<template xmlns="">
  <div class="page-see-panel">
    <el-input v-model="searchInput" placeholder="请输入标题" class="search-input" clearable></el-input>
    <el-select v-model="type" clearable placeholder="请选择分类" class="select-type">
      <el-option
          class="select-type"
          v-for="item in typesOptions"
          :key="item.id"
          :label="item.name"
          :value="item.id">
      </el-option>
    </el-select>
    <el-button type="primary" icon="el-icon-search" class="search-button" @click="search">搜索博客</el-button>
    <el-button type="primary" icon="el-icon-edit" class="add-button" @click="goWrite">添加博客</el-button>
    <template>
      <el-table
          class="page-table"
          :data="tableData"
          height="600"
          :row-style = "{height: '5.52rem'}"
          :cell-style="{padding: '.2rem 0'}"
          stripe
          style="width: 90%;
          margin-left: 5%;
          ">
        <el-table-column
            label="序号"
            type="index"
            width="100">
        </el-table-column>
        <el-table-column
            prop="name"
            label="标题"
            width="300">
        </el-table-column>
        <el-table-column
            prop="typeName"
            label="类型"
            width="200">
        </el-table-column>
        <el-table-column
            prop="state"
            width="200"
            label="状态">
        </el-table-column>
        <el-table-column
            prop="EndTime"
            label="更新时间"
            width="300">
        </el-table-column>
        <el-table-column
            label="管理"
            width="250">
          <template slot-scope="scope">
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataNum"
          empty-text="暂无我的待办">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  deleteArticle,
  selectAllArticle,
  selectAllArticleByCondition,
  selectByPage,
  selectType
} from "@/network/article/article";

export default {
  name: "PageSeePanel",
  data() {
    return {
      searchInput: "",
      type: "",
      typesOptions: [],
      tableData: [],
      dataNum: 0,
      currentPage: 1,
      rowAccount: 10
    }
  },
  methods: {
    goWrite() {
      this.$router.push({path: "/base/WriterBlog"})
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.rowAccount = val
      selectByPage(null,null,null,null,null,null,null,this.currentPage,this.rowAccount).then(res => {
        // console.log(res);
        if (res.obj === null ) {
          this.tableData = [];
        } else {
          this.tableData = res.obj;
        }
      })
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      selectByPage(null,null,null,null,null,null,null,this.currentPage,this.rowAccount).then(res => {
        // console.log(res);
        if (res.obj === null ) {
          this.tableData = [];
        } else {
          this.tableData = res.obj;
        }
      })
    },
    search() {
      selectAllArticleByCondition(this.searchInput,this.type).then(res => {
        // console.log(res);
        if (res.obj === null ) {
          this.tableData = [];
          this.dataNum = 0
        } else {
          this.tableData = res.obj;
          this.dataNum = res.obj.length
        }
      })
    },
    handleEdit(index, row) {
      // console.log(index);
      // console.log(row);
      this.$router.push({
        path: "/base/WriterBlog",
        query: {post: row}
      })
    },
    handleDelete(index, row) {
      // console.log(index);
      // console.log(row);
      this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        deleteArticle(row.id).then(res => {
          // console.log(res);
          selectByPage(null,null,null,null,null,null,null,this.currentPage,this.rowAccount).then(res => {
            // console.log(res);
            if (res.obj === null || res.obj.length === 0) {
              this.currentPage = this.currentPage - 1
              selectByPage(null,null,null,null,null,null,null,this.currentPage,this.rowAccount).then(res => {
                if (res.obj === null ) {
                  this.tableData = [];
                } else {
                  this.tableData = res.obj;
                }
              })
            } else {
              this.tableData = res.obj;
            }
          })
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });


    },
  },
  created() {
    selectType().then( res => {
      this.typesOptions = res.obj
    })

    selectAllArticle().then(res => {
      // console.log(res);
      if (res.obj === null ) {
        this.dataNum = 0
      } else {
        this.dataNum = res.obj.length
      }
    })

    selectByPage(null,null,null,null,null,null,null,this.currentPage,this.rowAccount).then(res => {
      // console.log(res);
      if (res.obj === null ) {
        this.tableData = [];
      } else {
        this.tableData = res.obj;
      }
    })
  },
}
</script>

<style scoped>
.page-see-panel {
  width: 92%;
  min-height: 75rem;
  margin: 3rem auto;
  border-top: 3px #62d5ff solid;
  background: rgba(255,255,255,.5);
}

.search-input {
  width: 25rem;
  margin: 2rem 5%;
}

.select-type {
  width: 25rem;
  margin-left: -4%;
}
.search-button {
  margin-left: 2rem;
}

.page-table {
  text-align: center;
}

.pagination {
  margin: 2rem 68%;
}
</style>
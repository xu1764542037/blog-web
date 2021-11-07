<template>
  <div class="page-edit-panel">
    <div class="input-title">
      <el-input placeholder="文章标题" v-model="title">
      </el-input>
    </div>
    <mavon-editor class="editor"
                  :ishljs = "true"
                  v-model="PageValue"
                  ref=md @save="saveFile"
                  @imgAdd="imgAdd"></mavon-editor>
    <el-select v-model="type" clearable placeholder="请选择分类" class="select-type">
      <el-option
          v-for="item in typesOptions"
          :key="item.id"
          :label="item.name"
          :value="item.id">
      </el-option>
    </el-select>
    <el-select v-model="label" clearable multiple placeholder="请选择标签" class="select-label">
      <el-option
          v-for="item in labelsOptions"
          :key="item.id"
          :label="item.name"
          :value="item.id">
      </el-option>
    </el-select>
    <el-input
        class="input-summary"
        type="textarea"
        :rows="2"
        placeholder="请输入摘要"
        v-model="textarea">
    </el-input>
    <el-button type="success" class="button-back">返回</el-button>
    <el-button type="info" class="button-save" @click="save">保存</el-button>
    <el-button type="primary" class="button-open" @click="open" v-show="!isUpdate">发表</el-button>
  </div>
</template>

<script>
import {postMd, uploadFile} from "@/network/upload/upload";
import {addDraft} from "@/network/draft/draft";

import {
  addArticle,
  deleteArticle,
  selectByPage,
  selectLabel,
  selectType,
  setLabelByArticle, updateArticle
} from "@/network/article/article";

export default {
  name: "PageEditPanel",
  watch: {
    label: {
      handler() {
        if (this.label.length === 0) {
          this.$alert('标签不能为空！', '提示', {
            confirmButtonText: '确定'
          });
        }
      }
    },
  },
  data() {
    return {
      id: '',
      title: '',
      select: '',
      type: "",
      typesOptions: [],
      labelsOptions: [],
      label: [],
      PageValue: '',
      textarea: '',
      isUpdate: false,
    }
  },
  methods: {
    //保存md到后台
    saveFile(){
      //传递name(文件名),typeId(文件所属类别),value(md文件内容）
      var result=postMd(this.title,"java",this.PageValue);
      // console.log(result);
      this.dialogFormVisible=false

    },
    //保存图片到后台
    imgAdd(pos, $file){
      var _this = this;
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('image', $file);
      uploadFile(formdata).then(resp => {
        // console.log(resp);
        var url = resp.imgUrl; //取出上传成功后的url
        if (resp != null) {
          //  将后端返回的url放在md中图片的指定位置
          _this.$refs.md.$img2Url(pos, url)
        } else {
          _this.$message("上传失败");
        }
      });
    },
    save() {
      if (this.isUpdate) {
        this.$confirm('是否保存此条博客的修改内容？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          updateArticle(this.id,this.title,this.textarea,this.PageValue,this.label,this.type).then( res => {
            // console.log(res);
          })
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
          this.$router.go(0);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });

      } else {

        this.$confirm('是否保存此条博客到草稿箱？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          const state = "不发布"
          addDraft(this.title,this.textarea,this.PageValue,this.label,this.type,state).then( res => {
            // console.log(res);
          })
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
          this.$router.go(0);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消保存'
          });
        });

      }
    },
    open() {
      this.$confirm('是否发布此条博客？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const state = "发布"
        addArticle(this.title,this.textarea,this.PageValue,this.label,this.type,state).then( res => {
          // console.log(res);
        })
        this.$message({
          type: 'success',
          message: '发布成功!'
        });
        this.$router.go(0);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发布'
        });
      });
    }
  },
  created() {
    selectLabel().then( res => {
      // console.log(res);
      this.labelsOptions = res.obj
    })

    selectType().then( res => {
      this.typesOptions = res.obj
    })

    // console.log(this.$route.query.post);
    const post = this.$route.query.post
    if (this.$route.query.post === undefined || this.$route.query.post === "[object Object]" ) {
      // alert(1)
    } else {
      this.id = post.id
      this.title = post.name
      this.PageValue = post.text
      this.type = post.type
      for (let i = 0;i< post.labelNames.length;i++) {
        this.label.push(post.labelNames[i].id)
      }
      this.textarea = post.summary
      this.isUpdate = true
      // alert(2)
    }

  }
}
</script>

<style scoped>
.page-edit-panel {
  width: 92%;
  min-height: 70rem;
  margin: 3rem auto;
  border-top: 3px #62d5ff solid;
  background: rgba(255,255,255,.5);
}

.input-title {
  width: 80%;
  margin: 2rem auto;
}

.editor {
  margin: 0 auto;
  width:80%;
  height: 40rem;
  max-height: 40rem
}

.select-type {
  position: absolute;
  margin: 2rem 9%;
  width: 36.7%;
}

.select-label {
  width: 40.2%;
  margin: 2rem 50%;
}

.input-summary {
  position: relative;
  height: 4rem;
  width: 80.4%;
  margin-left: 9.8%;
  font-family: PingFangSC,sans-serif;
}

.button-back {
  margin-top: 3rem;
  margin-left: 42.5%;
}


</style>
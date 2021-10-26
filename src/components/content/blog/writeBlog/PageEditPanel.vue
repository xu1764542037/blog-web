<template>
  <div class="page-edit-panel">
    <div class="input-title">
      <el-input placeholder="文章标题" v-model="title">
      </el-input>
    </div>
    <mavon-editor class="editor" :ishljs = "true" v-model="PageValue" ref=md @save="save" @imgAdd="imgAdd"></mavon-editor>
    <el-select v-model="type" clearable placeholder="请选择分类" class="select-type">
      <el-option
          v-for="item in typesOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="label" clearable multiple placeholder="请选择标签" class="select-label">
      <el-option
          v-for="item in labelsOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
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
    <el-button type="info" class="button-save">保存</el-button>
    <el-button type="primary" class="button-open">发表</el-button>
  </div>
</template>

<script>
import {postMd, uploadFile} from "@/network/upload/upload";

export default {
  name: "PageEditPanel",
  data() {
    return {
      title: '',
      select: '',
      type: "",
      typesOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      labelsOptions: [{
        value: '选项1',
        label: '学习'
      }, {
        value: '选项2',
        label: '美食'
      }, {
        value: '选项3',
        label: 'Vue'
      }, {
        value: '选项4',
        label: 'Java'
      }, {
        value: '选项5',
        label: '音乐'
      }],
      label: [],
      PageValue: '',
      textarea: '',
    }
  },
  methods: {
    //保存md到后台
    save(){
      //传递name(文件名),typeId(文件所属类别),value(md文件内容）
      var result=postMd("555","java",this.PageValue);
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
        var url = resp.data; //取出上传成功后的url
        if (resp.status == 200) {
          //  将后端返回的url放在md中图片的指定位置
          _this.$refs.md.$img2Url(pos, url)
        } else {
          _this.$message({type: resp.status, message: resp.statusText});
        }
      });
    },
  },
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
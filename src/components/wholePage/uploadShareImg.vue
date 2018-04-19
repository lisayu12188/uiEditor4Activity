<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://api.91jkys.com:8096"
      :data="{action:'fileUpload'}"
      ref='imgList'
      :on-success='handleSuccess'
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"

      :with-credentials='withCredentials'>
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      <!-- <el-button size="small" type="primary">上传图片</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->



    </el-upload>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        title:'上传分享图片：',
        fileList: [],

        withCredentials:true,

      };
    },
    methods: {
      ...mapMutations([
        'uploadShareImg'
      ]),

      handleSuccess(file,fileList) {
        let url = file.data[0];
        const imgName = fileList.name;
        this.uploadShareImg({url:url})
        this.fileList = [{name:imgName,url:url}]
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },

    }
  }
</script>
<style>

</style>

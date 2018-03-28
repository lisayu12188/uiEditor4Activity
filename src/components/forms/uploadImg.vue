<template>
  <div>

    <el-upload
      class="upload-demo"
      action="http://api.qa.91jkys.com:9105/mall/uploadImage"
      :on-success='handleSuccess'
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type="picture"
      :limit='limit' >
      <el-button size="small" type="primary">上传图片</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title:'替换图片：',
        fileList2: [],
        limit:1
      };
    },
    methods: {
      handleSuccess(file) {
        let url = file.url
        this.$store.commit('changeImgSrc',{url})
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },

    }
  }
</script>

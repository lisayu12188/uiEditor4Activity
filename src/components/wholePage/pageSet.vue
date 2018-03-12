<template>
  <el-form ref="form" :model="pageSet" label-width="100px">
    <el-form-item label="活动code：">
      <el-input
        placeholder="请输入活动code"
        v-model="pageSet.actCode"
        clearable>
      </el-input>
    </el-form-item>

    <el-form-item label="活动标题：">
      <el-input
        placeholder="活动标题"
        v-model="pageSet.actTitle"
        clearable>
      </el-input>
    </el-form-item>

    <div>
      <b class="sub-title">分享配置<i class='el-icon-caret-bottom'></i></b>
      <el-form-item label="链接:">
        <el-input
          placeholder="请输入分享链接"
          v-model="pageSet.share.link"
          clearable class="share-input">
        </el-input>
      </el-form-item>
      <el-form-item label="标题:">
        <el-input
          placeholder="请输入分享标题"
          v-model="pageSet.share.title"
          clearable class="share-input">
        </el-input>
      </el-form-item>

      <el-form-item label="内容:">
        <el-input
        type="textarea"
          placeholder="请输入分享内容"
          :rows="3"
          v-model="pageSet.share.content"
          clearable class="share-input">
        </el-input>
      </el-form-item>
      <el-form-item label="描述:">
        <el-input
        type="textarea"
        :rows="3"
          placeholder="请输入分享描述"
          v-model="pageSet.share.desc"
          clearable class="share-input">
        </el-input>
      </el-form-item>

      <el-form-item label="图片:">
        <el-input
          placeholder="请输入分享图片文件名, 例如 share.jpg"
          v-model="pageSet.share.pic"
          clearable class="share-input">
        </el-input>
      </el-form-item>
    </div>

    <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

</template>


<script>
export default {
  name: 'pageSet',

  data () {
    return {
      pageSet:{
        actCode:'',
        actTitle:'',
        share:{
          link:'',
          title:'',
          content:'',
          desc:'',
          pic:''
        }
      },
    }
  },

  methods:{
    onSubmit() {
        console.log('submit!');
      }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

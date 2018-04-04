<template>
  <el-form ref="form" label-width="100px">
    <el-form-item label="活动code：" >
      <el-input
        required
        placeholder="请输入活动code"
        :value="pageConfig.actCode" @change='updatePageConfig("actCode",$event)'
        clearable>
      </el-input>
    </el-form-item>

    <el-form-item label="活动标题：">
      <el-input
        placeholder="活动标题"
        :value="pageConfig.actTitle" @change='updatePageConfig("actTitle",$event)'
        clearable>
      </el-input>
    </el-form-item>

    <div>
      <b class="sub-title">分享配置<i class='el-icon-caret-bottom'></i></b>
      <el-form-item label="链接:">
        <el-input
          placeholder="请输入分享链接"
          :value="pageConfig.shareLink"
          clearable class="share-input" @change='updatePageConfig("shareLink",$event)'>
        </el-input>
      </el-form-item>
      <el-form-item label="标题:">
        <el-input
          placeholder="请输入分享标题"
          :value="pageConfig.shareTitle"
          clearable class="share-input" @change='updatePageConfig("shareTitle",$event)'>
        </el-input>
      </el-form-item>

      <el-form-item label="内容:">
        <el-input
        type="textarea"
          placeholder="请输入分享内容"
          :rows="3"
          :value="pageConfig.shareContent"
          clearable class="share-input" @change='updatePageConfig("shareContent",$event)'>
        </el-input>
      </el-form-item>
      <el-form-item label="描述:">
        <el-input
        type="textarea"
        :rows="3"
          placeholder="请输入分享描述"
          :value="pageConfig.shareDesc"
          clearable class="share-input" @change='updatePageConfig("shareDesc",$event)'>
        </el-input>
      </el-form-item>

      <el-form-item label="图片:">
        <el-input
          placeholder="请输入分享图片文件名, 例如 share.jpg"
          :value="pageConfig.sharePic" @change='updatePageConfig("sharePic",$event)'
          clearable class="share-input">
        </el-input>
      </el-form-item>
    </div>

    <el-form-item>
    <!-- <el-button type="primary" @click="onSubmit">保存</el-button> -->
    <!-- <el-button>取消</el-button> -->
  </el-form-item>
</el-form>

</template>


<script>
function clone(obj){
  return JSON.parse(JSON.stringify(obj))
}
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
  name: 'pageConfig',

  data () {
    return {
    }
  },
  watch:{
  },
  computed:{
    ...mapState(['pageConfig'])
  },

  methods:{
    updatePageConfig(key,value){
      this.$store.commit('setPageConfig',{key:key,value:value})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

<template>
  <div class="btns-wrapper">
    <el-button-group class="group1">
      <el-button type="primary" icon="el-icon-upload2" @click.stop="handler('moveToFirst')"></el-button>
      <el-button type="primary" icon="el-icon-caret-top" @click.stop="handler('moveTop')"></el-button>
      <el-button type="primary" icon="el-icon-caret-bottom" @click.stop="handler('moveDown')"></el-button>
      <el-button type="primary" icon="el-icon-delete" @click.stop="handler('remove')"></el-button>
    </el-button-group>
  </div>
</template>


<script>
export default {
  name: 'myBtns',

  data () {
    return {
    

    }
  },

  methods:{
    handler(bynType){
        this.$emit(bynType)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btns-wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.btns-wrapper .group1{
  position: absolute;
  top: 0;
  right: 0;
}
.btns-wrapper .group2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
}

</style>

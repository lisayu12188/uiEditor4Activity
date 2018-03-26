<template>
  <div>
    {{title}}
    <el-input
      placeholder="请输入内容"
      v-model="text"
      clearable>
    </el-input>
  </div>
</template>
<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        title:'标题：',
      }
    },
    computed:{...mapState({
      selectedCompIndex:'selectedCompIndex',
    }),
    text:{
      get(){
        return this.$store.state.myPageComps[this.selectedCompIndex]['data']['text'];
      },
      set(value){
        this.$store.commit('changeValue',{key:'text',value:value});
      }

     }
  },
  }
</script>

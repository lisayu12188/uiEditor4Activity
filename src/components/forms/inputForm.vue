<template>
  <div>
    {{title}}
    <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable>
    </el-input>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title:'标题：',
        input: ''
      }
    }
  }
</script>

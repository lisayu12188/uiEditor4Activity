<template>
  <div>
    {{title}}
    <el-input
      type="textarea"
      :autosize="{ minRows: 3}"
      placeholder="请输入内容"
      v-model="value"

      >
    </el-input>
  </div>
</template>
<div style="margin: 20px 0;"></div>

<script>
export default {
  data() {
    return {
      title:'段落：',
      // value: '',
    }
  },
  computed:{
    value:{
      get () {
        return this.$store.state.paragraph.value[0]
      },
      set (value) {
        this.$store.commit('changeValue', {value})
      }
    }

  },
  methods:{

  }
}
</script>

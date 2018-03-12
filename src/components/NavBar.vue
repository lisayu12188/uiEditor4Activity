<template>
  <div class="navbar tabbable tabs-left">
    <ul class="nav nav-tabs">
      <li>页面设置</li>
      <li>颜色配置</li>
      <li>历史版本</li>
      <li>页面模块</li>
      <li>历史版本</li>

    </ul>
    <div class="tab-content">

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

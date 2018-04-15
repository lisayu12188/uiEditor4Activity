<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>
<style>
a {
  display: inline-block;
  text-decoration: none!important;
}

html {
  font-size: 37.5px;
}

body {
  font-size: 18px;
  background-color: #eceef3;
}

#app {
  height: 100vh;
  width: 100vw;
}

img {
  vertical-align: middle;
}np

* {
  box-sizing: border-box;
}

</style>

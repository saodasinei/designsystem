<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <img src="https://ablum1-1302515234.cos.ap-singapore.myqcloud.com/album/User-1597667513026/8130ed5e-91ae-426b-a6c3-c2225ea7a494.jpg"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

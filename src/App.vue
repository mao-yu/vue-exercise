<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  components:{
    Layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div,ul,p,h1,h2,h3,h4,h5{
  padding:0;margin:0;
  list-style: none;
}
a{text-decoration: none;color:#000;}
</style>

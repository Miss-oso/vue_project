<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="My Calculator"/>-->
    <MyCalculator></MyCalculator>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import MyCalculator from './components/MyCalculator.vue'


export default {
  name: 'App',
  components: {
    MyCalculator,
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
      <hr />
      <div>
        <router-link to="/add/payment/Food?value=200" 
          >Добавить платеж категории Food с ценой 200</router-link
        ><br />
        <router-link to="/add/payment/Transport?value=50"
          >Добавить платеж категории Transport с ценой 50</router-link
        ><br />
        <router-link to="/add/payment/Entertainment?value=2000"
          >Категория Entertainment с ценой 2000</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  
  created() {
    // this.$store.commit('getDataApp', this.fetchData())
    this.$store.dispatch("fetchData");
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<template>
  <div id="app">
     <h1>My personal costs</h1>
     <Add-cost-module :maxCostID="maxCostID" @addCost="addCostToCosts()"/>
    <CostsTable :costs="costs"/>
  </div>
</template>

<script>
import CostsTable from './components/CostsTable.vue'
import AddCostModule from './components/AddCostModule.vue'
  
  export default {
  name: 'App',
  components: {
    CostsTable,
    AddCostModule
  },

data(){
      return {
        costs: [],
        maxCostID: '',
      }
    },
    methods: {
      fetchData(){
        return [
          {
            id: '1',
            date: '28.03.2020',
            category: 'Food',
            value: '169'
          },
          {
            id: '2',
            date: '24.03.2020',
            category: 'Transport',
            value: '360'
          },
          {
            id: '3',
            date: '24.03.2020',
            category: 'Food',
            value: '532'
          },
        ]
      },
      getMaxId(){
        this.maxCostID = this.costs[this.costs.length - 1].id
      },
      addCostToCosts(cost){
        console.log(cost);
        this.costs = [...this.costs, cost]
      }
    },
    created() {
      this.costs = [...this.fetchData()];
      this.getMaxId();
    }
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

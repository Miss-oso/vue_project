<template>
  <div class="add-cost">
      <button class="add-cost__button" @click="showForm">Add new cost +</button>
      <div class="add-cost__form-wrapp">
        <form action="GET" class="add-cost-form" v-if="show">
          <div class="section__wrap">
            <input 
                type="date" 
                name="date" 
                id="add-cost__date" 
                v-model="date"
            />
          </div>
          <div class="section__wrap">
            <input 
                type="text" 
                name="category" 
                id="add-cost__category" 
                placeholder="Enter category"
                v-model="category">
          </div>
          <div class="section__wrap">
            <input 
                type="number" 
                name="value" 
                id="add-cost__value" 
                placeholder="Enter value" 
                v-model="value">
          </div>
          <div class="section__wrap">
            <button @click="addCost($event)">ADD +</button>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddCostModule',
  data(){
    return {
      date: '' || new Date(),
      category: '',
      value: '',
      show: false,
      disabled: true,
    }
  },
  props: [
    'maxCostID'
  ],
  methods: {
    test(){
      console.log(this.date, this.category, this.value)
    },
    showForm(){
      this.show = !this.show 
    },
    addCost(event){
      event.preventDefault();
      let cost = {
        id: Number(this.maxCostID) + 1,
        date: this.getDate(),
        category: this.category,
        value: this.value
      };
        this.$emit('addCost', cost);
      console.log(cost)
    },
    getDate(){
      return `${new Date(this.date).getDate()}.0${new Date(this.date).getMonth() + 1}.${new Date(this.date).getFullYear()}`;
    },
  },
}
</script>

<style>
    .add-cost {
      position: relative;
    }
    .add-cost-form {
      position: absolute;
      padding: 15px 10px;
      background: #fff;
    }
</style>
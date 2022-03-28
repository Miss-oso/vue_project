<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <div class ="display">

    <input v-model.number="operand1" type="number"/>
    <input v-model.number="operand2" type="number"/>

    = {{ result }}
  </div>

  <div class="keyboard">
    <button v-on:click="result = operand1 + operand2">+</button>
    <button @click="result = operand1 - operand2">-</button>
    <button @click="divide(operand1, operand2)" :disabled="!operand2">/</button>
    <button @click="multiply">*</button>
    <button @click="degree">^</button>
    <button @click="intDivide" :disabled="!operand2">//</button>
  </div>
</div>  

  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
    type:String
    }
  },


data() {
  return {
    message: "Hello Vue",
    operand1: 0,
    operand2: 0,
    result: 0,
  };
},
methods: {
   divide(op1, op2) {
     this.result = op1 / op2;
   },
   multiply(){
     const {operand1, operand2} = this;
     this.result = operand1 * operand2;
   },
   degree() {
     const {operand1, operand2} = this;
     this.result = Math.pow (operand1, operand2);
   },
   intDivide() {
     const {operand1, operand2} = this;
     this.result = Math.floor(operand1 / operand2);
   },
 },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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

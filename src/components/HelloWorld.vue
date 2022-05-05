<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ messageComputed }}</h1>
    <hr/>
    <div class ="display">

    <input v-model.number="operand1" type="number"/>
    <input v-model.number="operand2" type="number"/>

    = {{ result }}
    <br/>
    = Fib: {{ resultFib }}
  </div>
  <div class="errors" v-if="error">Ошибка: {{ error }}</div>

  <div class="strange-message">
    <template v-if="result <0"> Получилось отрицательное число</template>
    <template v-else-if="result <100">Результат в первой сотне</template>
    <template v-else> Получилось слишком большое число</template>
  </div>

  <!-- <div class="arr">
    <div v-for="(item, index) in myCollection" :key="index"> 
      {{ index }} - {{ item }}
    </div>
  </div> -->

  <div class="logs">{{ logs }}</div>


  
 <button @click="message='ahidhsk'">update</button>
 
  <div class="keyboard">
    <button 
    v-for="operand in operands" 
    :key="operand" 
    :name="operand"
    :disabled="getBtnStatusDisabled(operand)"
    @click="calculate(operand)">
    {{ operand }}
    </button>
    <button @click="degree">^</button>
    <button @click="intDivide" :disabled="!operand2">//</button>
  </div>
</div>  

  
</template>

<script>
//import Vue from "vue";


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
    myCollection: [1, 2, 3, 4, 5, 6],
    operands: ["+", "-", "/", "*"],
    operand1: 0,
    operand2: 0,
    result: 0,
    resultFib: 0,
    error: "",
    logs: {}
  };
},
computed: {
messageComputed() {
  return `${this.message} From GB`
  },
fibOperand1(){
  return this.fib(this.operand1)

 }, 
fibOperand2(){
  return this.fib(this.operand2)
 } 
},
watch: {
  fibOperand1: {
    handler: function(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  },
},

methods: {
  calculate(operation="+"){
    this.error = "";
    switch (operation) {
      case "+":
        this.add();
        break;
      case "-":
        this.substract();
        break;
      case "/":
        this.divide();
        break;
      case "*":
      this.multiply();
      break;
    }
   //Vue.set(object, propertyName, value);
    const key= Date.now();
    const value = `${this.operand1}${operation}${this.operand2} = ${this.result}`;
    this.$set(this.logs, key, value);
    
    //this.logs[Date.now()] = `${this.operand1}${operation}${this.operand2} = ${this.result}`
  },
   divide() {
     if(this.operand2 === 0) {
       this.error = "На 0 делить нельзя!"
       return
     } else {
      this.result = this.operand1 / this.operand2;
     }
   },
   add() {
     this.result = this.operand1 +  this.operand2;
     this.resultFib = this.fibOperand1 + this.fibOperand2
   },
   substract() {
     this.result = this.operand1 - this.operand2;
   },
   multiply(){
     this.result = this.operand1 * this.operand2;
   },
   degree() {
     const { operand1, operand2 } = this;
     this.result = Math.pow (operand1, operand2);
   },
   intDivide() {
     const {operand1, operand2} = this;
     this.result = Math.floor(operand1 / operand2);
   },
   getBtnStatusDisabled(operation) {
     if(operation === '/' && this.operand2 === 0) {
       return false
     }
     return false
   },
   fib(n) {
     return n <= 1 ? n : this.fib(n-1) + this.fib(n-2)


   }
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

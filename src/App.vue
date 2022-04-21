<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
        <div> My total {{ getFPV }}</div>
      </header>
     <main>
        <button @click="showForm">{{ textBtn }}</button>
        <div v-show="showBtnAdd">
          <AddPaymentForm @addNewPayment="addData" />
        </div>
        <PaymentDisplay :list="currentElements" />
        <MyPagination
          :length="paymentsList.length"
          :n="n"
          :cur="cur"
          @changePage="onChangePage"/>
      </main>
    </div>
  </div>
</template>

<script>
import MyPagination from './components/MyPagination.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
  
  export default {
  name: 'App',
  components: {
    MyPagination,
    PaymentDisplay,
    AddPaymentForm,
  },

data() {
    return {
      showBtnAdd: false,
      textBtn: "Показать форму",
      n: 5,
      cur: 1,
    };
  },
  methods: {
    showForm() {
      if (this.showBtnAdd === false) {
        this.showBtnAdd = true;
        this.textBtn = "Скрыть форму";
      } else {
        this.showBtnAdd = false;
        this.textBtn = "Показать форму";
      }
    },
    addData(data) {
      this.$store.commit("addDataPaymentList", data);
    },
    onChangePage(numberPage) {
      this.cur = numberPage;
    },
  },
  created() {
    // this.$store.commit('getDataApp', this.fetchData())
    this.$store.dispatch("fetchData");
  },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    currentElements() {
      return this.paymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
    },
  },
};
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
.title {
  font-size: 30px;
  margin-bottom: 50px;
}
</style>
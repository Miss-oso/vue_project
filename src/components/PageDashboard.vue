<template>
  <div class="wrapper">
    <header>
      <div class="title">Мой дневник затрат</div>
    </header>
    <main>
      <button @click="showForm">{{ textBtn }}</button>
      <div v-show="showBtnAdd">
        <AddPaymentForm @addNewPayment="addData" />
      </div>
      <PaymentDisplay :list="carrentElement" />
      <MyPagination
        :length="paymentsList.length"
        :n="n"
        :cur="cur"
        @changePage="onChangePage"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import PaymentDisplay from "./PaymentDisplay.vue";
import MyPagination from "./MyPagination.vue";
export default {
  name: "PageDashboard",
  components: {
    PaymentDisplay,
    AddPaymentForm,
    MyPagination,
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
    onChangePage(namberPage) {
      this.cur = namberPage;
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
    carrentElement() {
      return this.paymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
    },
  },
};
</script>

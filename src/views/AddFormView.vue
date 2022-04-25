<template>
  <div>
    <input placeholder="Amount" v-model="value" />
    <input placeholder="Категория" v-model="category" />
    <input placeholder="Date" v-model="date" />
    <button @click="onSave">Save!</button>
    <PaymentDisplay :list="carrentElement" />
    <MyPagination
        :length="paymentsList.length"
        :n="n"
        :cur="cur"
        @changePage="onChangePage"
      />
  </div>
</template>

<script>
import PaymentDisplay from "../components/PaymentDisplay.vue";
import MyPagination from "../components/MyPagination.vue";
export default {
  name: "AddFormView",
  components: {
    PaymentDisplay,
    MyPagination,
  },  
  data() {
    return {
      value: "",
      category: "",
      date: "",
      n: 5,
      cur: 1,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
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
  methods: {
    onSave() {
      const data = {
        value: this.value,
        category: this.category,
        data: this.data || this.getCurrentDate,
      };
      this.$store.commit("addDataPaymentList", data);
    },
    autoSave() {
      const el = {
        value: this.value,
        category: this.category,
        data: this.getCurrentDate,
      };
       this.$store.commit("addDataPaymentList", el);
    },
    onChangePage(namberPage) {
      this.cur = namberPage;
    },
  },
  mounted() {
    this.value = this.$route.query.value;
    this.category = this.$route.params.Category;
    this.date = this.getCurrentDate;
    this.autoSave();
    if (!this.categoryList.length) {
      this.$store.dispatch("fetchCategoryList");
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.value = to.query.value;
    this.category = to.params.Category;
    this.autoSave();
    
    next();
    // вызывается когда маршрут, что рендерит этот компонент изменился,
    // но этот компонент будет повторно использован в новом маршруте.
    // Например, для маршрута с динамическими параметрами `/foo/:id`, когда мы
    // перемещаемся между `/foo/1` и `/foo/2`, экземпляр того же компонента `Foo`
    // будет использован повторно, и этот хук будет вызван когда это случится.
    // Также имеется доступ в `this` к экземпляру компонента.
  },
};
</script>

<style lang="scss" scoped>
</style>
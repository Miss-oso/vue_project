<template>
    <div>
        <input placeholder="Amount" v-model="value" />
        <div class="categoryList" v-if ="categoryList.length">
        <select v-model="category">
          <option v-for="(option, idx) in categoryList" :key="idx">{{ option }}</option>  
        </select>
        </div>
        <input placeholder="Date" v-model="date" />
        <button @click="onSave">Save!</button>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data() {
        return {
        value: "",
        category: "",
        date: "",
        };
    },
    computed: {
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() +1;
            const y = today.getFullYear();

            return `${d}.${m}.${y}`;
        },
        categoryList(){
            return this.$store.getters.getCategoryList;
        }
    },
    methods: {
        onSave(){
            const data = {
                value: this.value,
                category: this.category,
                date: this.data || this.getCurrentDate,
            }
            this.$emit('addNewPayment', data);
        }
    },
    async mounted() {
        if(!this.categoryList.length) {
            await this.$store.dispatch('fetchCategoryList');
            this.category = this.categoryList[0]
        }
    },
};

</script>

<style >

</style>

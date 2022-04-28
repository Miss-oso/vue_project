<template>
  <div class="wrapper" v-if="settings.content">
      <div class="header">
        {{ settings.title }}
      </div>
      <div class="content">
        <component :is="settings.content"/>
        <!-- <AddPaymentForm v-if="settings.content === 'addpaymentform'"/>
        <MyAuth v-if="settings.content === 'auth'"/> -->
      </div>
      <div class="footer">
        <button @click="onCloseClick">
          Close
        </button>
      </div>
    </div>
</template>
<script>
export default{
  name: "ModalWindowAddPaymentForm",
  components: {
    AddPaymentForm: ()=>import('./AddPaymentForm.vue'),
    PageAbout:()=>import('./PageAbout.vue'),
  },
  props: {
    settings: Object
  },
  methods: {
    onCloseClick(){
      this.$modal.hide()
    }
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
    padding: 20px;
    position: absolute;
    top:20%;
    left: 35%;
    background: #efefef;
}
</style>
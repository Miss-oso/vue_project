<template>
  <div class="list">
    <div class="item" v-for="item in list" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
   methods: {
    editItem(item) {
      console.log(item);
    },
    deleteItem(id) {
      console.log(id);
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deleteItem(item.id);
          },
        },
      ];
      this.$contextMenu.show({event, items})
    },
  },
};
</script>
<style lang="scss" scoped>
.action {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
</style>
};

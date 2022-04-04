<template>
  <div class="costs-table__wrapp">
      <table class="costs-table">
          <tr class="costs-table__tr">
              <th class="costs-table__td costs-table__td--id">#</th>
              <th class="costs-table__td costs-table__td--date">Date</th>
              <th class="costs-table__td costs-table__td--category">Category</th>
              <th class="costs-table__td costs-table__td--value">Value</th>
          </tr>
          <tr class="costs-table__tr" v-for="cost in costs" :key="cost.id">
              <td class="costs-table__td costs-table__td--id">{{ cost.id }}</td>
              <td class="costs-table__td costs-table__td--date">{{ cost.date }}</td>
              <td class="costs-table__td costs-table__td--category">{{ cost.category }}</td>
              <td class="costs-table__td costs-table__td--value">{{ cost.value }}</td>
          </tr>
      </table>
  </div>
</template>


 <script>
 export default {
   name: "CostsTable",
   props: {
     costs: {
       type: Array,
       default: () => [],
     },
   },
 };
 </script>

 <style>
    th {
        text-align: start;
    }
    .costs-table__tr {
        border: 3px solid #000;
        padding: 5px;
    }
    .costs-table__td {
        padding: 5px 10px;
        border-bottom: 1px solid #ccc;
    }
    .costs-table__td--id {
        width: 20px;
    }
    .costs-table__td--date {
        width: 130px;
    }
    .costs-table__td--category {
        width: 150px;
    }
    .costs-table__td--value {
        width: 40px
    }

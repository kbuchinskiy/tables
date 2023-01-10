<template>
  <div class="wrapper">
    <table class="table">
      <tr class="table-row" v-for="(row, index) in tableData" :key="index">
        <td class="table-col-1">
          <div class="table-cell">
            <h4 v-text="row.countName" />
            <p v-text="row.createdAt" />
          </div>
        </td>
        <td>
          <div class="table-cell table-col-2" v-text="row.latestStatus" />
        </td>
        <td>
          <div class="table-cell table-col-3" v-text="row.advertiserName" />
        </td>
        <td><div class="table-cell table-col-4" v-text="row.id" /></td>
        <td><div class="table-cell table-col-5" v-text="row.authorName" /></td>
        <td>
          <div class="table-cell table-col-6">
            <div class="buttons">
              <font-awesome-icon icon="trash" />
              <font-awesome-icon icon="copy" />
              <font-awesome-icon icon="stop" />
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import tableData from "@/data.json";
export default {
  name: "TableNative",
  data() {
    return {
      tableData,
    };
  },
};
</script>

<style scoped>
table {
  width: 950px;
  border-spacing: 0;
  border-collapse: collapse;
}

td {
  padding: 0;
}

.table-cell {
  margin-right: 0;
}
</style>

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
        <td class="table-col-2">
          <div class="table-cell" v-text="row.latestStatus" />
        </td>
        <td class="table-col-3">
          <div class="table-cell" v-text="row.advertiserName" />
        </td>
        <td class="table-col-4"><div class="table-cell" v-text="row.id" /></td>
        <td class="table-col-5">
          <div class="table-cell" v-text="row.authorName" />
        </td>
        <td class="table-col-6">
          <div class="table-cell">
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

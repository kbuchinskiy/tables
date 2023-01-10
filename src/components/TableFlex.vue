<template>
  <div class="wrapper">
    <div class="table">
      <div class="table-row" v-for="(row, index) in tableData" :key="index">
        <div class="table-cell table-col-1">
          <h4 v-text="row.countName" />
          <p v-text="row.createdAt" />
        </div>
        <div class="table-cell table-col-2" v-text="row.latestStatus" />
        <div class="table-cell table-col-3" v-text="row.advertiserName" />
        <div class="table-cell table-col-4" v-text="row.id" />
        <div class="table-cell table-col-5" v-text="row.authorName" />
        <div class="table-cell table-col-6">
          <div class="buttons">
            <font-awesome-icon icon="trash" />
            <font-awesome-icon icon="copy" />
            <font-awesome-icon icon="stop" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableData from "@/data.json";
export default {
  name: "TableFlex",
  data() {
    return {
      tableData,
    };
  },
};
</script>

<style scoped>
.table {
  width: 950px;
}

.table-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
</style>

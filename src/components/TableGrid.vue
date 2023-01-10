<template>
  <div class="wrapper">
    <div class="table">
      <template v-for="(row, index) in tableData">
        <div :key="index" class="table-cell table-col-1">
          <h4 v-text="row.countName" />
          <p v-text="row.createdAt" />
        </div>
        <div
          :key="index"
          class="table-cell table-col-2"
          v-text="row.latestStatus"
        />
        <div
          :key="index"
          class="table-cell table-col-3"
          v-text="row.advertiserName"
        />
        <div :key="index" class="table-cell table-col-4" v-text="row.id" />
        <div
          :key="index"
          class="table-cell table-col-5"
          v-text="row.authorName"
        />
        <div :key="index" class="table-cell table-col-6">
          <div class="buttons">
            <font-awesome-icon icon="trash" />
            <font-awesome-icon icon="copy" />
            <font-awesome-icon icon="stop" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import tableData from "@/data.json";
export default {
  name: "TableGrid",
  data() {
    return {
      tableData,
    };
  },
};
</script>

<style scoped>
.table {
  width: 840px;
  display: grid;
  grid-template-columns: calc(300px) 100px 150px 50px 200px 150px;
  table-layout: fixed;
}

.table-cell {
  display: flex;
  flex-flow: column wrap;
  border-bottom: 1px solid #ccc;
  justify-content: center;
}

.table-cell:nth-child(6n + 1) {
  display: block;
}
</style>

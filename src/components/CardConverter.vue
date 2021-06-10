<template>
  <mdb-card class="card">
    <mdb-card-body>
      <mdb-card-title class="small">Австарлийский доллар</mdb-card-title>
      <div class="content">
        <select class="browser-default custom-select custom-select-sm w-50">
          <option
            v-for="(item, index) in selectData"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
        <mdb-input class="w-50" :disabled="!main" />
      </div>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardTitle, mdbInput } from "mdbvue";
export default {
  name: "CardPage",
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbInput,
  },

  props: {
    selectData: Array,
    main: Boolean,
  },
};
</script>

<style scoped>
.card {
  max-width: 300px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<template>
  <mdb-card class="card">
    <mdb-card-body>
      <mdb-card-title class="small">{{ title }}</mdb-card-title>
      <div class="content">
        <select
          class="browser-default custom-select custom-select-sm w-50 mr-2"
          :value="defaultSelect"
          @change="
            main
              ? $emit('updateMainValute', $event.target.value)
              : $emit('updateComputedValute', $event.target.value)
          "
        >
          <option
            v-for="(item, index) in selectData"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
        <mdb-input
          type="number"
          class="w-50"
          :disabled="!main"
          :value="main ? defaultValue : computedValue"
          @input="$emit('changeValue', $event)"
        />
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
    computedValue: Number,
    defaultValue: Number,
    defaultSelect: Number,
    title: String,
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
  justify-content: space-around;
}
</style>

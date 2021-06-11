<template>
  <div class="container">
    <CardConverter
      :selectData="selectData"
      :main="true"
      @updateMainValute="updateMainValute($event)"
      @changeValue="changeValue($event)"
      :defaultValue="value"
    />
    <mdb-icon icon="arrows-alt-h" size="2x" />
    <CardConverter
      :selectData="selectData"
      @updateComputedValute="updateComputedValute($event)"
      :computedValue="computedValue"
    />
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
import CardConverter from "@/components/CardConverter";

export default {
  components: {
    mdbIcon,
    CardConverter,
  },

  methods: {
    updateMainValute(event) {
      this.mainValute = event;
    },
    updateComputedValute(event) {
      this.computedValute = event;
    },
    changeValue(event) {
      this.value = event;
    },
  },

  data() {
    return {
      mainValute: +this.$store.state.data[0].Value,
      computedValute: +this.$store.state.data[0].Value,
      value: "1",
    };
  },

  computed: {
    selectData() {
      let data = [];
      this.$store.state.data.forEach((element) => {
        data.push({ value: element.Value, label: element.CharCode });
      });
      return data;
    },

    computedValue() {
      return ((+this.mainValute / +this.computedValute) * +this.value).toFixed(
        4
      );
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

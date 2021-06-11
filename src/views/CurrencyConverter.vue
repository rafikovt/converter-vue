<template>
  <div class="container">
    <CardConverter
      :selectData="selectData"
      :main="true"
      @updateMainValute="updateMainValute($event)"
      @changeValue="changeValue($event)"
      :defaultValue="+value"
      :defaultSelect="+mainValute"
      :title="mainTitle"
    />
    <div @click="changeCards">
      <mdb-btn color="light-blue"
        ><mdb-icon icon="arrows-alt-h" size="2x"
      /></mdb-btn>
    </div>

    <CardConverter
      :selectData="selectData"
      @updateComputedValute="updateComputedValute($event)"
      :computedValue="+computedValue"
      :defaultSelect="+computedValute"
      :title="computedTitle"
    />
  </div>
</template>

<script>
import { mdbIcon, mdbBtn } from "mdbvue";
import CardConverter from "@/components/CardConverter";

export default {
  components: {
    mdbIcon,
    mdbBtn,
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

    changeCards() {
      let temp = this.mainValute;
      this.mainValute = this.computedValute;
      this.computedValute = temp;
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

    mainTitle() {
      return this.$store.state.data.find((e) => e.Value == this.mainValute)
        .Name;
    },

    computedValue() {
      return ((+this.mainValute / +this.computedValute) * +this.value).toFixed(
        4
      );
    },

    computedTitle() {
      return this.$store.state.data.find((e) => e.Value == this.computedValute)
        .Name;
    },
  },

  created() {
    this.$store.dispatch("loadData");
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

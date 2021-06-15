<template>
  <div class="container">
    <div
      v-if="$store.state.onLoading"
      class="d-flex justify-content-center text-primary"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <mdb-container v-if="$store.state.onError">
      <mdb-alert color="danger">
        Произошла ошибка при загрузке данных, попробуйте снова...
      </mdb-alert>
    </mdb-container>
    <mdb-container v-if="!$store.state.onLoading">
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
    </mdb-container>
  </div>
</template>

<script>
import { mdbIcon, mdbBtn, mdbContainer, mdbAlert } from "mdbvue";
import CardConverter from "@/components/CardConverter";

export default {
  components: {
    mdbIcon,
    mdbBtn,
    CardConverter,
    mdbContainer,
    mdbAlert,
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
      mainValute: null,
      computedValute: null,
      value: "1",
    };
  },

  watch: {
    selectData() {
      this.mainValute = +this.$store.state.data[0].Value;
      this.computedValute = +this.$store.state.data[0].Value;
    },
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

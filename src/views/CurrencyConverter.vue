<template>
  <div class="container">
    <CardConverter :selectData="selectData" :main="true" />
    <mdb-icon icon="arrows-alt-h" size="2x" />
    <CardConverter :selectData="selectData" />
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

  computed: {
    selectData() {
      let data = [];
      this.$store.state.data.forEach((element) => {
        data.push({ value: element.Value, label: element.CharCode });
      });
      return data;
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

<template>
  <mdb-list-group-item
    @click.native="changeNominal"
    class="list-item z-depth-2"
  >
    <div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-2 h5 grey-text darken-1 small">
          {{ item.Name }}
        </h5>
      </div>
      <div class="content">
        <p class="mb-2 mr-2">1 {{ valute.name }}</p>
        <mdb-icon icon="arrows-alt-h" class="mb-2 mr-2 grey-text" size="lg" />
        <p class="mb-2 mr-4">
          {{ (valute.value / nominal.value).toFixed(4) }} {{ nominal.name }}
        </p>

        <mdb-icon
          v-if="item.Value > item.Previous"
          icon="long-arrow-alt-up"
          class="green-text mr-2 mb-2"
        />
        <mdb-icon
          v-else
          icon="long-arrow-alt-down"
          class="red-text mr-2 mb-2"
        />

        <p
          class="red-text mb-2"
          :class="{ 'green-text': item.Value > item.Previous }"
        >
          {{ (item.Value - item.Previous).toFixed(4) }}
        </p>
      </div>
    </div>
  </mdb-list-group-item>
</template>

<script>
import { mdbListGroupItem, mdbIcon } from "mdbvue";

export default {
  components: {
    mdbListGroupItem,
    mdbIcon,
  },

  data() {
    return {
      nominal: { name: "RUB", value: this.item.Nominal },
      valute: { name: this.item.CharCode, value: this.item.Value },
    };
  },

  watch: {
    item(val) {
      this.nominal = { name: "RUB", value: val.Nominal };
      this.valute = { name: val.CharCode, value: val.Value };
    },
  },

  methods: {
    changeNominal() {
      let temp = this.valute;
      this.valute = this.nominal;
      this.nominal = temp;
    },
  },

  props: {
    item: Object,
  },
};
</script>

<style scoped>
.list-item {
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 15px;
  flex: 1 1 22%;
  border-radius: 10px !important;
  cursor: pointer;
}

.list-item:hover {
  background-color: #5c6bc0;
  color: #fff;
}

.content {
  display: flex;
  align-items: center;
}
</style>

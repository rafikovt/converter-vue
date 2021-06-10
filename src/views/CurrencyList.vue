<template>
  <div class="home">
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
    <mdb-list-group v-else class="list">
      <mdb-list-group-item
        class="list-item z-depth-2"
        v-for="(item, index) in items"
        :key="index"
      >
        <div>
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-2 h5 grey-text darken-1 small">
              {{ item.Name }}
            </h5>
          </div>
          <div class="content">
            <p class="mb-2 mr-2">1 {{ item.CharCode }}</p>
            <mdb-icon
              icon="arrows-alt-h"
              class="mb-2 mr-2 grey-text"
              size="lg"
            />
            <p class="mb-2 mr-4">{{ item.Value }} RUB</p>

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
    </mdb-list-group>
  </div>
</template>

<script>
import {
  mdbListGroup,
  mdbListGroupItem,
  mdbIcon,
  mdbContainer,
  mdbAlert,
} from "mdbvue";
export default {
  name: "Home",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbContainer,
    mdbAlert,
  },

  computed: {
    items() {
      console.log(1);
      return this.$store.state.data.filter(
        (e) =>
          e.CharCode.includes(this.$store.state.filterValue.toUpperCase()) ||
          e.Name.toLowerCase().includes(
            this.$store.state.filterValue.toLowerCase()
          )
      );
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 1770px;
}

.list {
  display: flex;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
}

.list-item {
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 15px;
  flex: 1 1 22%;
  border-radius: 10px !important;
}

.content {
  display: flex;
  align-items: center;
}
</style>

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
      <ValuteItem v-for="(item, index) in items" :key="index" :item="item" />
    </mdb-list-group>
  </div>
</template>

<script>
import { mdbListGroup, mdbContainer, mdbAlert } from "mdbvue";
import ValuteItem from "@/components/ValuteItem";
export default {
  name: "Home",
  components: {
    mdbListGroup,
    ValuteItem,
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
</style>

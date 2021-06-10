<template>
  <div id="app">
    <header id="nav">
      <mdb-navbar color="indigo" dark>
        <mdb-navbar-brand href="#"> Online-Converter </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item
              :class="{ active: $route.name === 'Main' }"
              router
              :to="{ name: 'Main' }"
              >Список валют</mdb-nav-item
            >
            <mdb-nav-item
              :class="{ active: $route.name === 'Converter' }"
              router
              :to="{ name: 'Converter' }"
              >Конвертер валют</mdb-nav-item
            >
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            <mdb-form-inline class="ml-auto">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                v-model="$store.state.filterValue"
              />
            </mdb-form-inline>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </header>
    <router-view />
  </div>
</template>
<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
export default {
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },

  created() {
    this.$store.dispatch("loadData");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 15px 25px;
}
</style>

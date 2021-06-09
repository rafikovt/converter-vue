<template>
  <div id="app">
    <header id="nav">
      <mdb-navbar color="indigo" dark>
        <mdb-navbar-brand href="#"> Online-Converter </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item class="active" router :to="{name: 'Main'}">Список валют</mdb-nav-item>
            <mdb-nav-item  router :to="{name: 'Converter'}">Конвертер валют</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </header>
    <router-view/>
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
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 15px 25px;
}

// .main-link {
//   padding: 10px 25px;
// }
</style>

<template>
  <div id="app">
    <TopBar />
    <router-view />
    <ContactFooter />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import ContactFooter from "@/components/ContactFooter.vue";

export default {
  components: {
    TopBar,
    ContactFooter
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


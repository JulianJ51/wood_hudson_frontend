<template>
  <div id="app">
    <TopBar />
    <HeroSlide />
    <AboutUs />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import HeroSlide from './components/HeroSlide.vue';
import AboutUs from './components/AboutUs.vue';

export default {
  components: {
    TopBar,
    HeroSlide,
    AboutUs
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
  margin-top: 60px;
}
</style>

<template>
  <div>
    <HeroSlide />
    <AboutUs />
  </div>
</template>

<script>
import HeroSlide from '@/components/HeroSlide.vue';
import AboutUs from '@/components/AboutUs.vue';

export default {
  name: "HomePage",
  components: {
    HeroSlide,
    AboutUs
  }
};
</script>

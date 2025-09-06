<template>
  <section class="hero-slide-section">
    <div class="slideshow">
      <img :src="slides[currentSlide]" alt="Slide Image" class="slide-image" />
      <div class="overlay">
        <div class="content">
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
          <button class="donate-button" @click="goDonate">Donate Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSlide",
  data() {
    return {
      title: "Making Childhood Cancer History",
      subtitle: "Join us in supporting children and families in need.",
      slides: [
        require("@/assets/slide1.jpg"),
        require("@/assets/slide2.jpg"),
        require("@/assets/slide3.jpg")
      ],
      currentSlide: 0
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
    goDonate() {
      this.$router.push("/donate");
    }
  }
};
</script>

<style scoped>
.hero-slide-section {
  position: relative;
  width: 100%;
  height: 60vh; /* slightly smaller section */
  overflow: hidden;
}

.slideshow {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  pointer-events: auto; /* ensures clicks work */
  z-index: 2;
}

.content {
  max-width: 500px;
  z-index: 3;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.donate-button {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  z-index: 3;
}

.donate-button:hover {
  background-color: #cc0000;
}

/* Responsive */
@media (max-width: 768px) {
  .overlay {
    justify-content: center;
    padding: 1rem;
  }

  .content {
    max-width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>



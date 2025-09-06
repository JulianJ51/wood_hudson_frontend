<template>
  <section class="hero-slide-section">
    <div class="slideshow">
      <img :src="slides[currentSlide]" alt="Slide Image" />
      <div class="overlay">
        <div class="content">
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
          <button class="donate-button">Donate Now</button>
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
        require('@/assets/slide1.jpg'),
        require('@/assets/slide2.jpg'),
        require('@/assets/slide3.jpg')
      ],
      currentSlide: 0,
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
    }
  }
};
</script>

<style scoped>
.hero-slide-section {
  position: relative;
  width: 100%;
  height: 60vh; /* slightly smaller than previous 70vh */
  overflow: hidden;
}

.slideshow {
  width: 100%;
  height: 100%;
  position: relative;
}

.slideshow img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* makes image fill section */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;   /* vertically center text */
  justify-content: flex-start; /* text on left */
  padding-left: 5%;
  background: rgba(0,0,0,0.2); /* optional dark overlay for readability */
  color: white;
}

.overlay .content {
  max-width: 500px;
}

.overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.overlay p {
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

  .overlay .content {
    max-width: 100%;
    text-align: center;
  }

  .overlay h1 {
    font-size: 2rem;
  }

  .overlay p {
    font-size: 1rem;
  }
}
</style>


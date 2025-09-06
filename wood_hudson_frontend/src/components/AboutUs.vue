<template>
  <section id="about" class="about-us-section">
    <div class="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur sed nisl nec purus ullamcorper tincidunt. 
        This is where you can write about your organization, mission, or story.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-us-section {
  padding: 6rem 2rem;
  min-height: 60vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center; /* center the content container */
}

.about-us-section .content {
  max-width: 800px;    /* limits line width for readability */
  text-align: left;    /* left-align text like an essay */
}

.about-us-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.about-us-section p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>


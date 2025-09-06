<template>
  <header class ="top-bar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <nav class="nav-tabs">
      <ul>
        <li v-for="tab in tabs" :key="tab.id">
          <a href="#" @click.prevent="scrollToSection(tab.id)">
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      tabs: [
        { id: "about", name: "About us" },
        { id: "donate", name: "Giving Back" },
        { id: "lab", name: "Laboratory" },
        { id: "people", name: "People" },
        { id: "contact", name: "Contact Us" },
      ],
    };
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 2rem;
  background-color: #ffffff;
  height: 11vh;
  position: relative;
  top: auto;
  z-index: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo img {
  max-height: 100%;
  height: auto;
  object-fit: contain;
}

.nav-tabs ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-tabs a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
}

.nav-tabs a:hover {
  color: #ff0000;
}
</style>



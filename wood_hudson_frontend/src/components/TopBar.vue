<template>
  <header class="top-bar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>

    <!-- Show nav tabs only on Home page -->
    <nav class="nav-tabs" v-if="$route.path === '/'">
      <ul>
        <li v-for="tab in tabs" :key="tab.id">

          <!-- If it's Contact, route instead of scroll -->

          <a
            v-if="tab.id === 'contact'"
            href="#"
            @click.prevent="$router.push('/contact')"
          >
            {{ tab.name }}
          </a>
          <a
            v-else-if="tab.id === 'people'"
            href="#"
            @click.prevent="$router.push('/people')"
          >
            {{ tab.name }}
          </a>
          <a
  v-else-if="tab.id === 'lab'"
  href="#"
  @click.prevent="$router.push('/laboratory')"
>
  {{ tab.name }}
</a>

          <a
            v-else
            href="#"
            @click.prevent="scrollToSection(tab.id)"
          >
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Show Back button only on Contact page -->
    <div v-else>
      <button class="back-btn" @click="$router.push('/')">
        ← Back
      </button>
    </div>
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
        { id: "contact", name: "Contact Us" }, // special case
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


<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  height: 11vh;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 50px;
}

.nav-tabs ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
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

.back-btn {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
}

.back-btn:hover {
  color: #ff0000;
}
</style>




import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ContactPage from '@/components/ContactPage.vue'; // or wherever you placed it

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;



import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import PeoplePage from '@/components/PeoplePage.vue'; 
import DonatePage from "@/components/DonatePage.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/donate', component: DonatePage },
  { path: '/people', component: PeoplePage } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;



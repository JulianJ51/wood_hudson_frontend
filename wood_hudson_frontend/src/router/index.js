import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import PeoplePage from '@/components/PeoplePage.vue'; // <-- Add this line
import LaboratoryPage from '@/components/LaboratoryPage.vue'; // <-- Add this line

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/people', component: PeoplePage }, // <-- Add this line
  { path: '/laboratory', component: LaboratoryPage } // <-- Add this line
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

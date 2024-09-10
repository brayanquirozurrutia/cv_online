import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
    { path: '/', component: HomePage },
];

const router = createRouter({
    history: createWebHistory('/cv_online/'),
    routes
});

export default router;

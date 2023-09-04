import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/Login.vue')

        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./pages/Register.vue')

        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./pages/Dashboard.vue')

        },
    ]
})

export { router };

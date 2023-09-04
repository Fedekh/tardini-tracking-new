import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./pages/Login.vue'),
            meta: { requiresAuth: false } 
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./pages/Register.vue'),
            meta: { requiresAuth: false } 
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./pages/Dashboard.vue'),
            meta: { requiresAuth: true } 
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./pages/Profile.vue'),
          }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!authStore.isAuthenticated) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export { router };

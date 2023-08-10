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
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./pages/Dashboard.vue')

        },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'fallback',
        //     component: () => import('./pages/Fallback.vue')
        // }
    ]
})

export { router };
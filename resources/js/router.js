import { createRouter, createWebHashHistory } from "vue-router";
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'pippo',
            component: () => import('./pages/Pippo.vue')
        }
    ]
})




export { router };
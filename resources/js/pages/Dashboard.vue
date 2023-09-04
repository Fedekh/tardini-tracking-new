<template>
    <div>
        <HeaderApp />
        <Loading v-if="loading" />
        <section v-else class="my-4">
            <h3>sono dashboard</h3>
            <h4>loggato come : {{ username }}</h4>
            <button @click="logout"
                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">Logout</button>
        </section>
        <!-- <router-link :to="{ name: 'login' }"
            class="px-4 my-5 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
            torna in login
        </router-link> -->
    </div>
</template>

<script>
import { useAuthStore } from '../auth';
import HeaderApp from '../components/HeaderApp.vue';
import Loading from '../components/Loading.vue';
export default {
    components: {
        Loading,
        HeaderApp
    },
    data() {
        return {
            loading: false,
            // apiLogout: 'api/auth/logout'
        }
    },
    computed: {
        username() {
            const authStore = useAuthStore();
            console.log(authStore.user.username);
            return authStore.user.username ? authStore.user.username : 'Nessun utente loggato';
        },
    },

    methods: {
        async logout() {
            const authStore = useAuthStore();
            this.loading = true;
            authStore.logout();
            this.$router.push({ name: 'login' });
            this.loading = false;
            // try {
            //     const token = localStorage.getItem('token');
            //     await axios.post(`${this.apiLogout}`, {}, {
            //         headers: {
            //             'Authorization': `Bearer ${token}`
            //         }
            //     });
            //     localStorage.removeItem('token');
            //     console.log('Logout con successo');
            //     this.$router.push({ name: 'login' });
            // } catch (error) {
            //     console.error("Errore durante il logout:", error);
            // }
        }

    }
}
</script>


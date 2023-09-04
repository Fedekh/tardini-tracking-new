<template>
    <div>
        <HeaderApp />
        <Loading v-if="loading" />
        <section v-else>
            <h3>sono dashboard</h3>
            <h4>loggato come : {{ username }}</h4>
            <button @click="logout"
                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">Logout</button>
        </section>
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
            console.log(authStore.user);
            return authStore.user ? authStore.user : 'Nessun utente loggato';
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


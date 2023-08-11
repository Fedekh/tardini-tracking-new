<template>
    <div>
        <Navbar />
        <Loading v-if="loading" />
        <section v-else>
            <h3>sono dashboard</h3>
            <button @click="logout"
                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">Logout</button>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';
export default {
    components: {
        Navbar,
        Loading
    },
    data() {
        return {
            loading: false,
            apiLogout: 'api/auth/logout'
        }
    },
    methods: {
        async logout() {
            try {
                const token = localStorage.getItem('token');
                await axios.post(`${this.apiLogout}`, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                localStorage.removeItem('token');
                console.log('Logout con successo');
                this.$router.push({ name: 'login' });
            } catch (error) {
                console.error("Errore durante il logout:", error);
            }
        }


    }
}
</script>


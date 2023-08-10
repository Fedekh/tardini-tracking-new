<template>
    <div>
        <Navbar />

        <h3>sono dashboard</h3>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
    },
    methods: {
        logout() {
            this.$router.push({ name: 'login' });

        }
    }
}
</script>


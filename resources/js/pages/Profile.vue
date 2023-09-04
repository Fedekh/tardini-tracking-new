<template>
    <div>
        <HeaderApp/>
        <Loading v-if="loading" />

CIAO SONO PROFILE
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
        }
    },
    computed: {
        username() {
            const authStore = useAuthStore();
            console.log(authStore.user.username);
            return authStore.user.username ? authStore.user.username : 'Nessun utente loggato';
        },
    }
}


</script>

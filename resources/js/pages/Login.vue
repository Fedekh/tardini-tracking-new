<template>
    <Loading v-if='loading' />
    <div v-else>
        <div class="flex justify-center mt-20">
            <div class="w-full sm:w-7/12">
                <span class="flex flex-wrap justify-around">
                    <div name="logo" class="w-5/12 flex">
                        <img src="../../img/TardiniLogo.svg" />
                    </div>
                    <div
                        class="w-5/12 flex uppercase tracking-wide text-gray-700 font-bold flex-wrap justify-center content-end text-center">
                        <h2>WEB TRACKING utlimate</h2>
                    </div>
                </span>
                <div class="p-8 bg-white rounded shadow-xl">
                    <form>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="username" value="username"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="username" type="text"
                                name="username" placeholder="username" v-model="username" required autofocus
                                autocomplete="username" />
                            <span v-if="(submitted && !username)" class="text-red-600">Inserisci username.</span>

                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="password" value="password"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="password" type="password"
                                placeholder="password" name="password" v-model="password" required
                                autocomplete="current-password" />
                            <span v-if="(submitted && !password)" class="text-red-600">Inserisci password.</span>

                        </div>
                        <div class="flex items-center justify-end gap-3 mt-4">
                            <router-link :to="{ name: 'register' }"
                                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                                Registrati
                            </router-link>
                            <button @click.prevent="login"
                                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                                Log in
                            </button>
                        </div>
                    </form>
                    <h2 class="text-red-600" v-if="errorMessage">{{ errorMessage }}</h2>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import { useAuthStore } from '../auth.js';
// import axios from 'axios';

export default {
    components: {
        Loading
    },
    data() {
        return {
            username: '',
            password: '',
            loading: false,
            submitted: false,
            errorMessage: ''

        }
    },

    methods: {
        async login() {
            const authStore = useAuthStore();
            this.loading = true;
            this.errorMessage = ''
            await authStore.login({ username: this.username, password: this.password });

            if (!this.username || !this.password) {
                this.submitted = true;
            } else {
                this.submitted = false; 
            }

            if(authStore.isAuthenticated){
                this.$router.push({ name: 'dashboard' });
                this.loading = false;
            }

            if (authStore.error) {
                this.errorMessage = authStore.error.error
                this.loading = false;
                this.username = '';
                this.password = '';
            } 
        },
    }
}
</script>

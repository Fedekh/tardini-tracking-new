<template>
    <Loading v-if='loading' />
    <div v-else class="flex justify-center mt-20">
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
                <form @submit.prevent="login">
                    <div class="mt-4">
                        <label class="block text-sm text-gray-00" for="Username" value="username"></label>
                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="email" type="text"
                            name="username" placeholder="username" v-model="username" required autofocus />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm text-gray-00" for="password" value="password"></label>
                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="password" type="password"
                            placeholder="password" name="password" v-model="password" required
                            autocomplete="current-password" />
                    </div>
                    <div class="flex items-center justify-end mt-4">
                        <button
                            class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import axios from 'axios';

export default {
    components: {
        Loading
    },
    data() {
        return {
            username: '',
            password: '',
            loading: false
        }
    },
    methods: {
        login() {
            this.$router.push({ name: 'dashboard' });

        }
    }
}
</script>

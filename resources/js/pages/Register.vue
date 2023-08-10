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
                            <label class="block text-sm text-gray-00" for="name" value="name"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="name" type="text"
                                name="name" placeholder="name" v-model="username" required autofocus />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="lastname" value="lastname"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="lastname" type="text"
                                name="lastname" placeholder="lastname" v-model="username" required autofocus />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="username" value="username"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="username" type="text"
                                name="username" placeholder="username" v-model="username" required autofocus />
                        </div>

                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="email" value="email"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="email" type="email"
                                placeholder="email" name="email" v-model="email" required autocomplete="current-email" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="password" value="password"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="password" type="password"
                                placeholder="password" name="password" v-model="password" required
                                autocomplete="current-password" />
                        </div>
                      <div class="flex justify-center gap-8">
                        <div class="mt-4">
                            <label class="tracking-wide text-gray-00 text-md mr-2" for="role">
                                Ruolo
                            </label>
                            <select name="role" id="role">
                                <option value="">-</option>
                                <option value="courier">Corriere</option>
                                <option value="client">Cliente</option>
                                <option value="operator">Operatore</option>
                            </select>
                        </div>
                        <div class="mt-4">
                            <label class="tracking-wide text-gray-00 text-md mr-2" for="role">
                                Livello
                            </label>
                            <select name="role" id="role">
                                <option value="">-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                      </div>
                        <div class="flex items-center justify-end mt-4">
                            <button @click.prevent="register"
                                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                                Registrati
                            </button>
                        </div>
                    </form>
                </div>
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
            name: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            loading: false,
        }
    },
    methods: {
        register() {
            this.$router.push({ name: 'dashboard' });

        }

    }
}
</script>

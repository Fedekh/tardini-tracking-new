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
                                name="name" placeholder="name" v-model="name" required autofocus />
                            <span v-if="submitted && !name" class="text-red-600">Inserisci il nome.</span>
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="lastname" value="lastname"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="lastname" type="text"
                                name="lastname" placeholder="lastname" v-model="lastname" required autofocus />
                            <span v-if="submitted && !lastname" class="text-red-600">Inserisci il cognome.</span>
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="username" value="username"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="username" type="text"
                                name="username" placeholder="username" v-model="username" required autofocus />
                            <span v-if="submitted && !username" class="text-red-600">Inserisci un username.</span>

                        </div>

                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="email" value="email"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="email" type="email"
                                placeholder="email" name="email" v-model="email" required autocomplete="current-email" />
                            <span v-if="submitted && !email" class="text-red-600">Inserisci un indirizzo email valido.</span>

                        </div>
                        <div class="mt-4">
                            <label class="block text-sm text-gray-00" for="password" value="password"></label>
                            <input class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="password" type="password"
                                placeholder="password" name="password" v-model="password" required
                                autocomplete="current-password" />
                            <span v-if="submitted && !password" class="text-red-600">Inserisci un indirizzo email valido.</span>

                        </div>
                        <div class="flex justify-center gap-8">
                            <div class="mt-4">
                                <label class="tracking-wide text-gray-00 text-md mr-2" for="role">
                                    Ruolo
                                </label>
                                <select v-model="selectedRole" name="role" id="role">
                                    <option value="">-</option>
                                    <option value="courier">Corriere</option>
                                    <option value="client">Cliente</option>
                                    <option value="operator">Operatore</option>
                                </select>
                            </div>
                            <div class="mt-4">
                                <label class="tracking-wide text-gray-00 text-md mr-2" for="level">
                                    Livello
                                </label>
                                <select v-model="selectedLevel" name="level" id="level">
                                    <option v-for="level in availableLevels" :key="level.value" :value="level.value">{{
                                        level.label }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 justify-end mt-4">
                            <button @click.prevent="register"
                                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                                Registrati
                            </button>
                            <button @click.prevent="comeToLogin"
                                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                                log in
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
            selectedRole: '',
            selectedLevel: '',
            submitted: false,
            loading: false,
            apiRegister: '/api/register'
        }
    },
    computed: {
        availableLevels() {
            if (this.selectedRole === 'courier') {
                return [{ value: '1', label: '1' }];
            } else if (this.selectedRole === 'client') {
                return [{ value: '2', label: '2' }];
            } else if (this.selectedRole === 'operator') {
                return [{ value: '3', label: '3' }];
            } else {
                return [{ value: '', label: '-' }];
            }
        },
        isAnyFieldEmpty() {
            return !this.name || !this.lastname || !this.username || !this.email || !this.password;
        }
    },
    methods: {
        comeToLogin() {
            this.$router.push({ name: 'login' });

        },
        async register() {
            this.submitted = true;
            if (this.isAnyFieldEmpty) {
                return; // Interrompi la registrazione se ci sono campi vuoti
            } else {

                this.loading = true;
                try {
                    const response = await axios.post(`${this.apiRegister}`, {
                        name: this.name,
                        lastname: this.lastname,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        role: this.selectedRole,
                        level: this.selectedLevel
                    });

                    if (response.data.success) {
                        this.$router.push({ name: 'dashboard' });
                    } else {
                        console.log("Registration failed:", response.data.error);
                    }

                } catch (error) {
                    console.error("Error during registration:", error);
                } finally {
                    this.loading = false;
                }
            }
        },

    },

}
</script>

<template>
    <div>
        <button type="button" @click="dropDownMenu"
            class="inline-flex items-center mx-3 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-200 hover:text-gray-700 focus:outline-none transition">
            {{ username }}
            <div class="mx-3">
                <i v-if="dropMenu" class="fa-solid fa-chevron-up"></i>
                <i v-else class="fa-solid fa-chevron-down"></i>
            </div>
        </button>


        <!-- dropdown menu -->
        <div v-if="dropMenu" @click="dropMenu = false"
            class="text-center origin-top-right absolute right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <div class="block px-4 py-2 text-xs border-b-2 text-gray-400">
                Manage Account
            </div>
            <router-link v-if="currentRoute==='/dashboard'" :to="{ name: 'profile' }" class="block px-4 py-2 text-sm text-gray-700 focus:outline-none"
                role="menuitem" tabindex="-1" id="user-menu-item-0">
                Profilo
            </router-link>
            <router-link v-else :to="{ name: 'dashboard' }" class="block px-4 py-2 text-sm text-gray-700 focus:outline-none"
                role="menuitem" tabindex="-1" id="user-menu-item-0">
                Dashboard
            </router-link>
            <button @click="logout"
                class="px-4 py-1 focus:outline-none text-white font-light tracking-wider bg-button-red rounded">
                Logout
            </button>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../auth';

export default {
    data() {
        return {
            username: '',
            dropMenu: false,
            currentRoute:''
        }
    },
    mounted() {
        const authUser = useAuthStore();
        this.username = authUser.user.username;
        authUser.getUrl()
        this.currentRoute = authUser.currentRoute;
        console.log(this.currentRoute);
    },
    methods: {
        dropDownMenu() {
            console.log('t ho premuto ');
            this.dropMenu = !this.dropMenu;
        },
     logout() {
            const authStore = useAuthStore();
            this.loading = true;
            authStore.logout();
            this.$router.push({ name: 'login' });
            this.loading = false;
        },
        // getUrl(){
        //     this.currentRoute = window.location.pathname;
        //     console.log(this.currentRoute);
        // }
    }
}
</script>

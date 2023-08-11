<template>
    <div class="header-app">
        <nav class="bg-white border-b border-gray-100 shadow">
            <div class="mx-auto px-4 sm:px-6">
                <div class="flex justify-between h-16">
                    <LogoMenu/>
                    <NavLink/>
                    <UserMenu/>
                    <Hamburger/>
                </div>

                <!--  <div :class="{ 'block': openMenu, 'hidden': !openMenu }" class="sm:hidden" @click="openMenu = false">
                <LogoMenu :extended="false" />
                <div class="pt-4 pb-1 border-t border-gray-200">
                    <div class="mt-3 space-y-1">
                        <NavLink @setLoading="setLoading" @notify="notify" :extended="false" />
                    </div>
                </div>
                <div class="pt-4 pb-1 border-t border-gray-200">
                    <div class="mt-3 space-y-1">
                        <UserMenu :extended="false" @setLoading="setLoading" @notify="notify" />
                    </div>
                </div>-->
            </div>
        </nav>
    </div>
</template>

<script>
import LogoMenu from './LogoMenu.vue';
import NavLink from './NavLink.vue';
import UserMenu from './UserMenu.vue';
import Hamburger from './Hamburger.vue';

export default {
    components:{
        LogoMenu,
        Hamburger,
        NavLink,
        UserMenu
    }
}

</script>

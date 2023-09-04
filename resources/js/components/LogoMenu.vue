<template>
   <div class="flex">
      <router-link :to="{ name: 'dashboard' }"
         class="hover:bg-gray-200 rounded-md px-2 m-1 flex-shrink-0 flex items-center grid">
         <img src="../../img/TardiniLogo.svg" class="block w-auto" />
         <p class="tracking-wide font-bold text-xs text-gray-700">WEB TRACKING</p>
      </router-link>
   </div>
   <!-- <div class="block px-4 pt-2 pb-3 space-y-1 hidden">
        <router-link :to="{name: 'dashboard'}">
         dashboard
        </router-link>
    </div> -->
</template>


<script>
</script>
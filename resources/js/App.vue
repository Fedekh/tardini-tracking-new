<template>
    <div>
        <router-view /> 
    </div>
</template>

<script >
export default{
    mounted(){
        setTimeout(() => {
            this.$router.push({ name: 'login' });
        }, 500);
    }
}

</script>


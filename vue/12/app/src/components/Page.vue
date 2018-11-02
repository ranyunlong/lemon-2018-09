<template>
    <div class="mint-page">
        <slot />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .mint-page {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
    }
</style>
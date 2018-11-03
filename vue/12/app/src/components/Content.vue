<template>
    <div class="mint-content">
        <slot />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .mint-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
</style>
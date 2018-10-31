<template>
    <div>
        {{user}} {{age}}

        <button @click="CHANGE_AGE">CHANGE_AGE</button>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    // 获取命名空间的助手函数
    const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers('users');
    export default {
        computed: {
            ...mapGetters([
                'user',
                'age'
            ])
        },
        methods: {
            ...mapMutations([
                'CHANGE_AGE'
            ])
        }
    }
</script>

<style scoped>

</style>
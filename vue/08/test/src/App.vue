<template>
    <div id="app">
        test
        <AAA />
        <Test />
    </div>
</template>

<script>
    // 通过导入导出来加载组件
    import Test from './components/Test.vue'
    export default {
        components: { // 局部注册该组件
            Test
        }
    }
</script>

<style>

</style>
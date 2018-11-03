<template>
    <mt-page>
        <!-- 动态组件 -->
        <keep-alive>
            <component :is="selected"></component>
        </keep-alive>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="Home">
                <img slot="icon" />
                首页
            </mt-tab-item>
            <mt-tab-item id="Order">
                <img slot="icon" />
                订单
            </mt-tab-item>
            <mt-tab-item id="Find">
                <img slot="icon" />
                发现
            </mt-tab-item>
            <mt-tab-item id="Mine">
                <img slot="icon" />
                我的
            </mt-tab-item>
        </mt-tabbar>
    </mt-page>
</template>
<script>
    import Home from './Home'
    import Find from './Find'
    import Mine from './Mine'
    import Order from './Order'
    export default {
        data() {
            return {
                selected: 'Home'
            }
        },
        components: {
            Home,
            Find,
            Mine,
            Order
        }
    }
</script>

<style scoped>
.home-tab {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
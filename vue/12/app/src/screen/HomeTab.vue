<template>
    <mt-page>
        <mt-header title="标题">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-content>
            {{select}}
        </mt-content>
         <mt-tabbar>
            <mt-tab-item id="首页">
                <img slot="icon" />
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" />
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" />
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" />
                我的
            </mt-tab-item>
        </mt-tabbar>
    </mt-page>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
<template>
    <Sider class="page-menu">
        <Menu width="200">
            <Submenu 
                v-for="(item, index) in data" 
                :key="index"
                :name="index">
                <template slot="title">
                    <Icon v-if="item.icon" :type="item.icon" />
                    {{item.name}}
                </template>
                <menu-item 
                    v-for="(child, key) in item.children"
                    :key="key"
                    :to="child.to"
                    :name="index+'-'+ key">
                     <Icon v-if="child.icon" :type="child.icon" />
                    {{child.name}}
                </menu-item>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
    export default {
        props: {
            data: Array
        }
    }
</script>

<style lang="less">
    
</style>
<template>
    <Header class="header">
        <div class="logo">
           <router-link to="/"> {{logo}}</router-link>
        </div>
        <div class="user-bar">
            <Avatar :src="avatar" icon="ios-person" size="small" />
            <span>欢迎您,
                <Dropdown trigger="click">
                    <a>{{user}}<Icon type="ios-arrow-down"></Icon></a>
                    <DropdownMenu slot="list">
                        <DropdownItem v-for="(item, index) in dropdownMenu" :key="index">
                            <Icon v-if="item.icon" :type="item.icon" />
                            {{item.name}}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </span>
        </div>
    </Header>
</template>

<script>
    export default {
        props: {
            logo: {
                type: String,
                default: '后台管理系统'
            },
            user: {
                type: String
            },
            dropdownMenu: Array,
            avatar: String
        }
    }
</script>

<style scoped lang="less">
    .header {
        display: flex;
        background: #fff;
        border-bottom: 1px solid #ddd;
        justify-content: space-between;
        .logo {
            font-size: 20px;
        }
    }
</style>
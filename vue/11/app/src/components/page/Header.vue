<template>
    <Header class="header">
        <div class="logo">
           <router-link to="/"> {{logo}}</router-link>
        </div>
        <div class="user-bar">
            <Avatar :src="avatar" icon="ios-person" size="small" />
            <span v-if="user">欢迎您,
                <Dropdown @on-click="$emit('click')" trigger="click">
                    <a>{{user.username}}<Icon type="ios-arrow-down"></Icon></a>
                    <DropdownMenu slot="list">
                        <DropdownItem :name="item.name" v-for="(item, index) in dropdownMenu" :key="index">
                            <Icon v-if="item.icon" :type="item.icon" />
                            {{item.name}}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </span>
            <span v-if="!user">请登录后在来 
                <Button @click="$router.push('/login')">登录</Button>
            </span>
        </div>
    </Header>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'

    // function mapGetters(arr) {
    //     const obj = {}
    //     arr.forEach(k => {
    //         obj[k] = function() {
    //             return this.$store.getters[k]
    //         }
    //     })
    //     return obj
    // }

    // function mapMutations(arr) {
    //     const obj = {}
    //     arr.forEach(k => {
    //         obj[k] = function(val) {
    //             return this.$store.commit(k, val)
    //         }
    //     })
    //     return obj
    // }

    export default {
        props: {
            logo: {
                type: String,
                default: '后台管理系统'
            },
            dropdownMenu: Array,
            avatar: String
        },
        methods: {
            ...mapMutations([
                
            ])
        },
        computed: {
            ...mapGetters([
                'user'
            ])
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
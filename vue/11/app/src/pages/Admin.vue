<template>
    <Layout class="page-admin">
        <PageHeader user="管理员" avatar="https://i.loli.net/2017/08/21/599a521472424.jpg" :dropdown-menu="dropdownMenu" />
        <Layout class="content">
            <PageMenu :data="pageMenu" />
            <Content class="router-view">
                <router-view/>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import PageHeader from "@/components/page/Header";
    import PageMenu from "@/components/page/Menu";
    export default {
        data() {
            return {
                dropdownMenu: [
                    {
                        name: "修改密码",
                        icon: "md-unlock"
                    },
                    {
                        name: "安全退出",
                        icon: "md-log-out"
                    }
                ],
                pageMenu: [
                    {
                        name: "内容管理",
                        icon: "ios-appstore-outline",
                        children: [
                            {
                                name: "文章管理",
                                icon: "ios-apps",
                                to: '/articles'
                            },
                            {
                                name: "评论管理",
                                icon: "ios-aperture",
                                to: '/comment'
                            },
                            {
                                name: "举报管理",
                                icon: "ios-aperture",
                                to: '/110'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            PageHeader,
            PageMenu
        }
    }
</script>

<style scoped lang="less">
    .page-admin{
        height: 100%;
        display: flex;
        flex-direction: column;
        .content {
            flex: auto;
            display: flex;
            flex-direction: row;
            .router-view{
            padding: 15px;
            }
        }
    }
</style>
<template>
    <div class="page">
        <Breadcrumb class="bread-crumb">
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>文章管理</BreadcrumbItem>
        </Breadcrumb>
        <div class="search">
            <Input suffix="ios-search" size="small" placeholder="搜索点什么" style="width: auto" />
        </div>
        <div class="table">
            <Table @on-select-all="selectAll" :loading="loading" stripe border size="small" :columns="columns" :data="data"></Table>
        </div>
        <div class="bar">
            <div class="buttons">
                <Button type="primary">全选</Button>
                <Button type="error" @click="delectAll">批量删除</Button>
            </div>
            <Page :current.sync="current" :total="total" size="small" show-sizer />
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import axios from 'axios'
    export default {
        created() {
            this.getUsers({
                page: this.page,
                limit: this.limit
            }).then(res => {
                const { data, total } = res
                this.data = data
                this.total = total
            })
        },
        watch: {
            current(val) {
                this.getUsers({
                    page: this.page,
                    limit: this.limit
                }).then(res => {
                    const { data, total } = res
                    this.data = data
                    this.total = total
                })
            }
        },
        data() {
            return {
                loading: false,
                total: 0,
                current: 1,
                limit: 10,
                columns: [
                    {
                        type: 'selection',
                        width: 50
                    },
                    {
                        title: '#ID',
                        width: 150,
                        align: 'center',
                        sortable: true,
                        key: 'id'
                    },
                    {
                        title: '用户名',
                        align: 'center',
                        sortable: true,
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        align: 'center',
                        sortable: true,
                        key: 'age'
                    },
                    {
                        title: '地址',
                        align: 'center',
                        key: 'address'
                    }
                ],
                data: [],
                deleteAllData: []
            }
        },
        methods: {
            delectAll() {
               const data = this.data.filter(key => {
                    for (let k of this.deleteAllData) {
                        return k.id === key.id
                    }
                })
                this.data = data
            },
            selectAll(selection) {
                this.deleteAllData = selection
            },
            ...mapActions([
                'getUsers'
            ])
            // getUser() {
            //     this.loading = true
            //     axios.get('/api/getmembers', {
            //         params: {
            //             page: this.current,
            //             limit: this.limit
            //         }
            //     }).then(res => {
            //         this.data = res.data.data
            //         this.total = res.data.total
            //         this.loading = false
            //     }).catch(err => {
            //         console.log(err)
            //         this.loading = false
            //     })
            // }
        }
    }
</script>

<style scoped lang="less">
    .page {
        display: flex;
        flex-direction: column;
        .search {
            padding: 10px 0;
            display: flex;
            justify-content: flex-end;
        }
        .bar{
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
    }
</style>
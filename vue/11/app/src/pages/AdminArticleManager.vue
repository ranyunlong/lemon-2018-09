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
            <Table stripe border size="small" :columns="columns" :data="data"></Table>
        </div>
        <div class="bar">
            <div class="buttons">
                <Button type="primary">全选</Button>
                <Button type="error">批量删除</Button>
            </div>
            <Page :total="50" size="small" show-sizer />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                        key: 'add'
                    }
                ],
                data: [
                    {
                        id: 'a0011',
                        name: '张三',
                        age: 50,
                        add:'北京市'
                    },
                    {
                        id: 'a001',
                        name: '老王',
                        age: 50,
                        add:'北京市'
                    },
                    {
                        id: 'a002',
                        name: '李四',
                        age: 40,
                        add:'北京市'
                    },
                     {
                        id: 'a003',
                        name: '李四',
                        age: 30,
                        add:'北京市'
                    }
                ]
            }
        },
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
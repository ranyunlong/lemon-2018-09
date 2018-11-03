<template>
    <div class="home-tab">
        <mt-header title="首页">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-content>
            <div class="home-news" ref="home-news">
                <mt-swipe>
                    <mt-swipe-item>
                        <img src="https://m.360buyimg.com/mobilecms/jfs/t1/9355/8/4889/128846/5bdc5f42E637bc846/b6ce2629f53d1a76.jpg!cr_1125x549_0_72" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="https://m.360buyimg.com/mobilecms/jfs/t1/9399/35/4917/99312/5bdc248fE90e3133c/91fdd54f7ecfc00e.jpg!cr_1125x549_0_72" alt="" srcset="">
                    </mt-swipe-item>
                </mt-swipe>
                <news-item :scrollTop="scrollTop" v-for="(item, index) in news" :data="item" :key="index" />
                <div class="loading" v-if="loading">
                    正在加载...
                </div>
            </div>
        </mt-content>
    </div>
</template>

<script>
import axios from 'axios'
import NewsItem from '@/components/NewsItem'
export default {
    data() {
        return {
            data: '',
            news: [],
            page: 0,
            loading: false,
            scrollTop: 0
        }
    },
    components: {
        NewsItem
    },
    created() {
        axios.get('/api', {
            params: {
                page: this.page
            }
        }).then(res =>{
           this.news = res.data.data
           this.page++
        }).catch(err=> {
            
        })
    },
    mounted() {
        const newsBox = this.$refs['home-news']
        // 元素自身的高度
        const newsBoxHeight = newsBox.clientHeight
        newsBox.addEventListener('scroll', (e) => {
            this.scrollTop = newsBox.scrollTop
            if (newsBox.scrollHeight  === newsBox.scrollTop + newsBoxHeight){
                this.downRefresh()
            }
        })
    },
    methods: {
        downRefresh() {
            if (this.loading) return;
            this.loading = true
             axios.get('/api', {
                params: {
                    page: this.page
                }
            }).then(res =>{
                // this.news = res.data.data
                this.news.push(...res.data.data)
                this.page++
                this.loading = false 
            }).catch(err=> {
                this.loading = false 
            })
        }
    }
}
</script>

<style>
    .loading {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content {
        height: 100%;
    }
    .mint-swipe {
        height: 300px;
        background: red;
    }
    .home-news {
        flex: 1;
        overflow: scroll;
    }
    .mint-swipe-item img {
        width: 100%;
    }
</style>
<template>
    <div class="news-item">
        <header>
            <div class="avatar" :class="{
                empty: !data.src
            }">
                <img :src="data.src" />
            </div>
            <div class="info">
                <div class="title">
                    <span :class="{
                        empty: !data.nickname
                    }">{{data.nickname}}</span>
                </div>
                <div :class="{
                        empty: !data.pubtime
                }" class="sub-title">
                    <span>{{data.pubtime}}</span>
                </div>
            </div>
            <div class="menu"></div>
        </header>
        <article>
            <p :class="{
                empty: !data.content
            }">{{data.content}}</p>
        </article>
        <div class="photos">
            <ul ref="ul" v-for="(item, index) in getPhotos(data.photos)" :key="index">
                <li 
                    v-for="(img, i) in item"
                    :key="i"
                    :class="{
                        empty: !data.photos
                    }">
                    <img v-if="imgShow" :src="img" />
                </li>
            </ul>
        </div>
        <footer>
            <div class="data">
                <i :class="{
                    empty: !data.like
                }">{{data.like}}赞</i>
                <i :class="{
                    empty: !data.coment
                }">{{data.coment}}评论</i>
            </div>
            <div class="bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        props: {
            data: Object,
            scrollTop: Number
        },
        methods: {
            getPhotos(arr) {
                let arr1 = []
                let arr2 = []
                arr.forEach(k => {
                    if (arr2.length < 3) {
                        arr2.push(k)
                    } else {
                        arr1.push(JSON.parse(JSON.stringify(arr2)))
                        arr2 = []
                    }
                })
                return arr1
            }
        },
        watch: {
            scrollTop(val) {
                if (this.imgShow) return;
                Object.keys(this.uls).forEach(k => {
                    if (Number(k) >= val + 100) {
                        setTimeout(() => {
                           this.imgShow = true 
                        }, 5000);
                    }
                })
            }
        },
        data() {
            return {
                uls: {},
                imgShow: false
            }
        },
        mounted() {
            if (this.$refs['ul']) {
                this.$refs['ul'].forEach(ul => {
                    if (ul.offsetTop) {
                        this.uls[ul.offsetTop] = ul
                    }
                })
                console.log(this.uls)
            }   
        }
    }
</script>

<style lang="less">
    @background: #f1f1f1;
    .empty {
        background: @background;
    }
    .news-item {
        display: flex;
        flex-direction: column;
        border-bottom: 20px solid #f1f1f1;
        header {
            height: 72px;
            display: flex;
            align-items: center;
            padding: 18px;
            .avatar {
                width: 72px;
                height: 72px;
                border-radius: 100%;
            }
            .info {
                flex: 1;
                padding-left: 18px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: inherit;
                .title{
                    font-size: 32px;
                    color: #333;
                    span{
                        display: inline-block;
                        min-width: 200px;
                        height: 32px;
                    }
                }
                .sub-title {
                    font-size: 20px;
                    color: #999;
                    span{
                        display: inline-block;
                        min-width: 300px;
                        height: 20px;
                    }
                }
            }
            .menu {
                align-self:flex-start;
                width: 30px;
                height: 30px;
                background: @background;
            }
        }
        article {
            padding: 18px;
            margin: 0;
            p {
                font-size: 28px;
                line-height: 40px;
                min-height: 40px;
                margin: 0;
            }
        }
        .photos {
            padding: 0 1.66667vw;
            ul{
                padding: 0;
                margin: 0;
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                li {
                    width: 30.55556vw;
                    height: 30.55556vw;
                    margin: 0.83vw;
                    overflow: hidden;
                    img{ 
                        width: 100%;
                    }
                }
            }
        }
        footer{
            height: 90px;
            display: flex;
            align-items: center;
            padding: 0 18px;
            justify-content: space-between;
            .data {
                line-height: 32px;
                color: #999;
                i {
                    min-width: 50px;
                    display: inline-block;
                    margin-right: 10px;
                    min-height: 32px;
                }
            }
            .bar {
                span{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    background: @background;
                    border-radius: 50%;
                    margin-left: 10px;
                }
            }
        }
    }
</style>
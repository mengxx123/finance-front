<template>
    <my-page title="财务工具">
        <div class="container">
            <h2 class="sub-header">基本工具</h2>
            <div class="tool-list">
                <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                    v-for="app in apps">
                    <router-link class="link" :to="app.to" :href="app.href" :target="app.target">
                        <img :src="app.icon" class="img">
                        <div class="info">
                            <h3 class="text">{{ app.name }}</h3>
                            <div class="desc">{{ app.desc }}</div>
                        </div>
                        <i class="icon icon-heart"></i>
                    </router-link>
                </div>
            </div>
            <h2 class="sub-header">投资理财</h2>
            <div class="tool-list">
                <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                    v-for="app in apps3">
                    <router-link class="link" :to="app.to" :href="app.href" :target="app.target">
                        <img :src="app.icon" class="img">
                        <div class="info">
                            <h3 class="text">{{ app.name }}</h3>
                            <div class="desc">{{ app.desc }}</div>
                        </div>
                        <i class="icon icon-heart"></i>
                    </router-link>
                </div>
            </div>
            <h2 class="sub-header">企业财务</h2>
            <div class="tool-list">
                <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                    v-for="app in apps2">
                    <router-link class="link" :to="app.to">
                        <img :src="app.icon" class="img">
                        <div class="info">
                            <h3 class="text">{{ app.name }}</h3>
                            <div class="desc">{{ app.desc }}</div>
                        </div>
                        <i class="icon icon-heart"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                apps: [
                    {
                        name: '计算器',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '12',
                        href: 'https://calculator.yunser.com/calculator',
                        target: '_blank'
                    },
                    {
                        name: '人民币大小写转换',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '12',
                        href: 'https://calculator.yunser.com/rmb',
                        target: '_blank'
                    },
                    {
                        name: '个人所得税',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/tax'
                    },
                    {
                        name: '汇率查询',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/exchangeRate'
                    },
                    {
                        name: '汇率转换',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/exchangeRate/convert'
                    },
                    {
                        name: '五险一金计算器',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/tax51'
                    },
                    {
                        name: '银行卡号查询',
                        desc: '银行卡号归属信息查询',
                        icon: '/static/img/finance.svg',
                        to: '/bank'
                    }
                ],
                apps2: [
                    {
                        name: '会计科目汇总表',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/subject'
                    },
                    {
                        name: '印花税计算器',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/stampDuty'
                    }
                ],
                apps3: [
                    {
                        name: '信用卡分期',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/credit'
                    },
                    {
                        name: '退休养老保险金',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/pension'
                    },
                    {
                        name: '存款',
                        desc: '',
                        icon: '/static/img/finance.svg',
                        to: '/deposit'
                    }
                ]
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.container {
    max-width: 840px;
    margin: 0 auto;
}
.sub-header {
    margin-bottom: 16px;
    font-size: 24px;
}
.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>

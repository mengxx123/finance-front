<template>
    <my-page title="汇率查询">
        <div class="common-container container">
            <div class="search-bar">
                <input class="input" v-model="keyword" placeholder="输入货币名称或代码快速搜索" />
                <ui-icon-button icon="close" color="#999" v-if="keyword.length" @click="keyword = ''" />
            </div>
            <div class="empty" v-if="keyword && !filteRates.length">
                搜索不到结果~
            </div>
            <ui-article class="article" v-if="filteRates.length">
                <p>更新于：{{ time }}</p>
                <table>
                    <tr>
                        <!--<th>国家</th>-->
                        <th>名称</th>
                        <th>代码</th>
                        <th>数值</th>
                    </tr>
                    <tr>
                        <td>
                            <img class="flag" :src="getFlagSrc(base)">
                            {{ country[base] }}（基准）
                        </td>
                        <td>{{ base }}</td>
                        <td>1</td>
                    </tr>
                    <tr v-for="rate in filteRates">
                        <td>
                            <img class="flag" :src="getFlagSrc(rate.code)">
                            {{ country[rate.code] }}
                        </td>
                        <td>{{ rate.code }}</td>
                        <td>{{ rate.value }}</td>
                    </tr>
                </table>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    import {format} from '@/util/time'
    import country from '@/util/country'

    export default {
        data () {
            return {
                base: 'USD',
                rates: [],
                country: country,
                time: '',
                keyword: ''
            }
        },
        computed: {
            filteRates() {
                if (!this.keyword) {
                    return this.rates
                }
                return this.rates.filter(item => {
                    return item.code.includes(this.keyword) || (country[item.code] && country[item.code].includes(this.keyword))
                })
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let lastRequest = this.$storage.get('lastRequest')
                console.log(lastRequest, (new Date().getTime() - new Date(lastRequest).getTime()) < 15 * 60 * 1000)
                if (lastRequest && (new Date().getTime() - new Date(lastRequest).getTime()) < 15 * 60 * 1000) {
                    let data = this.$storage.get('data')
                    if (data) {
                        console.log('从缓存中获取数据')
                        this.data = data
                        this.dealData()
                        return
                    }
                }
                let url = '/rate?base=' + this.base
                // url = '/'
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        console.log('数据')
                        console.log(data)
                        this.data = data
                        this.$storage.set('lastRequest', new Date().getTime())
                        this.$storage.set('data', this.data)
                        this.dealData()
                    },
                    response => {
                        console.log(response)
                    })
            },
            dealData(data) {
                this.rates = this.data.rates
                this.time = format(new Date(this.data.timestamp * 1000), 'yyyy-MM-dd hh:mm')
            },
            getFlagSrc(code) {
                return 'http://img1.yunser.com/flag/png/' + code.toLowerCase().substr(0, 2) + '.png'
            }
        }
    }
</script>

<style lang="scss" scoped>
    $divider: rgba(0,0,0,.12);

    .article {
        margin-top: 64px;
    }
    .empty {
        margin-top: 64px;
    }
    .flag {
        margin-right: 8px;
        margin-bottom: 0;
    }
    .search-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        left: 2px;
        right: 0;
        z-index: 10000;
        height: 64px;
        background-color: #fff;
        border-bottom: 1px solid $divider;
        .input {
            flex-grow: 1;
            height: 100%;
            padding: 0 16px;
            line-height: 64px;
            border: none;
            outline: none;
        }
    }
    .search-result {
        padding-top: 64px;
    }
</style>

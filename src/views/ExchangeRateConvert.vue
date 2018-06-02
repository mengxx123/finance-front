<template>
    <my-page title="汇率转换">
        <ui-text-field v-model.number="number" label="金额" hintText="要兑换的货币数额" />
        <br>
        <ui-select-field v-model="fromCode" label="原始货币" :maxHeight="300">
            <ui-menu-item
                :value="item.code"
                :title="`${country[item.code]}（${item.code}）`"
                v-for="item in rates" :key="item.code" />
        </ui-select-field>
        <br>
        <ui-select-field v-model="toCode" label="目标货币" :maxHeight="300">
            <ui-menu-item
                :value="item.code"
                :title="`${country[item.code]}（${item.code}）`"
                v-for="item in rates" :key="item.code" />
        </ui-select-field>
        <br>
        <div class="btns">
            <ui-raised-button class="btn" label="转换" primary @click="convert" />
            <ui-raised-button class="btn" label="交换" @click="exchange" />
        </div>
        <div class="result">{{ result }}</div>
        <div class="info" v-if="time">
            数据更新于：{{ time }}
        </div>
    </my-page>
</template>

<script>
    import {format} from '@/util/time'
    import country from '@/util/country'

    export default {
        data () {
            return {
                result: '',
                number: 1,
                fromCode: '',
                toCode: '',
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
                this.fromCode = 'USD'
                this.toCode = 'CNY'
            },
            getFlagSrc(code) {
                return 'http://img1.yunser.com/flag/png/' + code.toLowerCase().substr(0, 2) + '.png'
            },
            getRateByCode(code) {
                for (let rate of this.rates) {
                    if (rate.code === code) {
                        return rate
                    }
                }
            },
            convert() {
                if (!this.number) {
                    this.$messgae({
                        type: 'danger',
                        text: '请输入金额'
                    })
                }
                let fromRate = this.getRateByCode(this.fromCode)
                let toRate = this.getRateByCode(this.toCode)
                console.log(fromRate.value, toRate.value)
                this.result = (this.number / fromRate.value * toRate.value).toFixed(4)
            },
            exchange() {
                let tmp = this.fromCode
                this.fromCode = this.toCode
                this.toCode = tmp
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
    .btns {
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
        }
    }
    .info {
        margin-top: 16px;
        color: #aaa;
    }
</style>

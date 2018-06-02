<template>
    <my-page title="汇率查询">
        <ui-article v-if="rates.length">
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
                <tr v-for="rate in rates">
                    <td>
                        <img class="flag" :src="getFlagSrc(rate.code)">
                        {{ country[rate.code] }}
                    </td>
                    <td>{{ rate.code }}</td>
                    <td>{{ rate.value }}</td>
                </tr>
            </table>
        </ui-article>
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
                time: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let url = '/rate?base=' + this.base
                // url = '/'
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        console.log('数据')
                        console.log(data)
                        this.data = data
                        this.rates = this.data.rates
                        this.time = format(new Date(this.data.timestamp * 1000), 'yyyy-MM-dd hh:mm')
                        // for (let key in this.data.rates) {
                        //     this.rates.push({
                        //         code: key,
                        //         value: this.data.rates[key]
                        //     })
                        // }
                    },
                    response => {
                        console.log(response)
                    })
            },
            getFlagSrc(code) {
                return 'http://img1.yunser.com/flag/png/' + code.toLowerCase().substr(0, 2) + '.png'
            }
        }
    }
</script>

<style scoped>
    .flag {
        margin-right: 8px;
        margin-bottom: 0;
    }
</style>

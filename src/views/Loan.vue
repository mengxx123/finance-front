<template>
    <my-page title="贷款计算器" :page="page">
        <div class="common-container container">
            <div class="tool-box-body">
                <div class="form-horizontal">
                    <div class="form-group">
                        <ui-select-field v-model="type" label="计算类型">
                            <ui-menu-item value="rate" title="等额本息"/>
                            <ui-menu-item value="reverse" title="等额本金"/>
                        </ui-select-field>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="money" type="number" :label="type === 'rate' ? '贷款总额' : '复利终值'"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="rate" type="number" label="贷款利率（%）"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="time" type="number" label="存入年限"/>
                    </div>
                    <div class="form-group btns">
                        <ui-raised-button class="btn" label="计算" primary @click="calculate" />
                        <ui-raised-button class="btn" label="重置" @click="reset" />
                    </div>
                </div>
                <div class="result" v-if="result">
                    <ul class="result-list" v-if="type === 'rate'">
                        <li>每月还款：<span class="strong">{{ (result.perMonth).toFixed(2) }}</span> 元</li>
                        <li>支付利息：<span class="strong">{{ (result.rate).toFixed(2) }}</span> 元</li>
                        <li>本息合计：<span class="strong">{{ (result.total).toFixed(2) }}</span> 元</li>
                    </ul>
                    <ul class="result-list" v-if="type === 'reverse'">
                        <li>支付利息：<span class="strong">{{ (result.rate).toFixed(2) }}</span> 元</li>
                        <li>本息合计：<span class="strong">{{ (result.total).toFixed(2) }}</span> 元</li>
                        <!-- <li>本金：<span class="strong">{{ (result.rate).toFixed(2) }}</span> 元</li> -->
                        <!-- <li>本息：<span class="strong">{{ (result.total).toFixed(2) }}</span> 元</li> -->
                    </ul>
                </div>
                <ui-article v-if="results.length">
                    <table>
                        <tr>
                            <th>期数</th>
                            <th>还款金额</th>
                        </tr>
                        <tr v-for="item in results">
                            <td>第 {{ item.month }} 个月</td>
                            <td>{{ item.money.toFixed(2) }} 元</td>
                        </tr>
                    </table>
                </ui-article>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                type: 'rate',
                money: null,
                rate: null,
                time: null,
                perMonth: null,
                result: null,
                results: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/5446125024cf11eabd7877dfcefc10ef',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted () {
            // this.debug()
        },
        methods: {
            debug() {
                this.type = 'reverse'
                this.money = 10000
                this.rate = 3
                this.time = 3
                this.calculate()

                console.log('测试', 10000 * 0.03 / 12 + 10000 / (3 * 12))
            },
            calculate() {
                this.result = null

                if (!this.money) {
                    this.$message({
                        type: 'danger',
                        text: '请输入' + (this.type === 'rate' ? '贷款总额' : '复利终值')
                    })
                    return
                }
                if (!this.rate) {
                    this.$message({
                        type: 'danger',
                        text: '请输入贷款利率'
                    })
                    return
                }
                if (!this.time) {
                    this.$message({
                        type: 'danger',
                        text: '请输入存入年限'
                    })
                    return
                }
                this.results = []
                if (this.type === 'rate') {
                    function cal(P, R, N) {
                        return P * (R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
                    }
                    console.log('cal1()', cal(20 * 10000, 0.042 / 12, 20 * 12))
                    console.log('cal()', cal(10000, 0.03 / 12, 3 * 12))
                    let perMonth = cal(this.money, this.rate / 100 / 12, this.time * 12)
                    console.log('perMonth', perMonth)
                    let total = this.time * 12 * perMonth
                    this.result = {
                        perMonth,
                        total,
                        rate: total - this.money,
                        // total: money
                    }
                } else {
                    console.log('测试', 10927 / Math.pow(1 + 0.03, 3))
                    // let rate = this.money / Math.pow(1 + this.rate / 100, this.time)
                    let total = 0
                    let month = this.time * 12
                    let leaveMoney = this.money
                    for (let i = 0; i < month; i++) {
                        let money = leaveMoney * this.rate / 100 / 12 + this.money / month
                        this.results.push({
                            month: i + 1,
                            money, 
                        })
                        leaveMoney -= this.money / month
                        total += money
                    }
                    let rate = total - this.money
                    this.result = {
                        rate,
                        total,
                    }
                }
            },
            reset() {
                this.money = null
                this.rate = null
                this.time = null
                this.result = null
                this.results = []
            }
        }
    }
</script>

<style lang="scss" scoped>
.tip {
    margin-bottom: 16px;
    color: #999;
}
.result {
    margin-top: 16px;
    margin-bottom: 16px;
}
.btns {
    .btn {
        margin-right: 8px;
    }
}
</style>

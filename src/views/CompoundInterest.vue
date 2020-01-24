<template>
    <my-page title="复利计算器" :page="page">
        <div class="common-container container">
            <div class="tool-box-body">
                <div class="form-horizontal">
                    <div class="form-group">
                        <ui-select-field v-model="type" label="计算类型">
                            <ui-menu-item value="rate" title="计算复利"/>
                            <ui-menu-item value="reverse" title="计算本金"/>
                        </ui-select-field>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="money" type="number" :label="type === 'rate' ? '存入本金' : '复利终值'"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="rate" type="number" label="年利率（%）"/>
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
                        <li>利息：<span class="strong">{{ (result.rate).toFixed(2) }}</span> 元</li>
                        <li>本息：<span class="strong">{{ (result.total).toFixed(2) }}</span> 元</li>
                    </ul>
                    <ul class="result-list" v-if="type === 'reverse'">
                        <li>本金：<span class="strong">{{ (result.rate).toFixed(2) }}</span> 元</li>
                        <!-- <li>本息：<span class="strong">{{ (result.total).toFixed(2) }}</span> 元</li> -->
                    </ul>
                </div>
                <ui-article v-if="results.length">
                    <h2>明细</h2>
                    <p>本息合计 = 每期本金 + 每期利息</p>
                    <p>收益率 = 利息累计 / 原始本金(第一期的本金)</p>
                    <table>
                        <tr>
                            <th>期数</th>
                            <th>每期本金</th>
                            <th>利率</th>
                            <th>每期利息</th>
                            <th>利息累计</th>
                            <th>本息合计</th>
                            <th>收益率</th>
                        </tr>
                        <tr v-for="item in results">
                            <td>第 {{ item.index + 1 }} 期</td>
                            <td>{{ item.oldMoney.toFixed(2) }}</td>
                            <td>{{ item.rate.toFixed(2) }}%</td>
                            <td>{{ item.interest.toFixed(2) }}</td>
                            <td>{{ item.interestTotal.toFixed(2) }}</td>
                            <td>{{ item.moneyTotal.toFixed(2) }}</td>
                            <td>{{ item.returnRate.toFixed(2) }}%</td>
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
                result: null,
                results: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/a95c5020247e11eabd7877dfcefc10ef',
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
                // this.type = 'reverse'
                this.money = 10000
                this.rate = 3
                this.time = 3
                this.calculate()
            },
            calculate() {
                this.result = null

                if (!this.money) {
                    this.$message({
                        type: 'danger',
                        text: '请输入' + (this.type === 'rate' ? '存入本金' : '复利终值')
                    })
                    return
                }
                if (!this.rate) {
                    this.$message({
                        type: 'danger',
                        text: '请输入年利率'
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
                    let money = this.money
                    let interestTotal = 0
                    for (let i = 0; i < this.time; i++) {
                        let oldMoney = money
                        money = money + money * this.rate / 100
                        let interest = oldMoney * this.rate / 100
                        interestTotal += interest
                        this.results.push({
                            index: i,
                            oldMoney,
                            rate: this.rate,
                            interest,
                            interestTotal,
                            moneyTotal: oldMoney + interest,
                            returnRate: interestTotal / this.money * 100,
                        })
                    }
    
                    let rate = money - this.money
                    this.result = {
                        rate,
                        total: money
                    }
                } else {
                    console.log('测试', 10927 / Math.pow(1 + 0.03, 3))
                    let rate = this.money / Math.pow(1 + this.rate / 100, this.time)
                    this.result = {
                        rate,
                        total: this.money
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

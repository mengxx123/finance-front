<template>
    <my-page title="个人存款计算器" :page="page">
        <div class="common-container container">
            <div>
                <div class="form-itemm">
                    <ui-select-field v-model="type" label="期限种类" hintText="请选择期限种类">
                        <ui-menu-item value="00" title="活期"/>
                        <ui-menu-item value="03" title="整存整取 三个月"/>
                        <ui-menu-item value="06" title="整存整取 半年"/>
                        <ui-menu-item value="12" title="整存整取 一年"/>
                        <ui-menu-item value="24" title="整存整取 二年"/>
                        <ui-menu-item value="36" title="整存整取 三年"/>
                        <ui-menu-item value="60" title="整存整取 五年"/>
                    </ui-select-field>
                </div>
                <div class="form-itemm">
                    <ui-text-field v-model.number="amount" label="存款金额（元）"/>
                </div>
                <div class="form-itemm">
                    <ui-text-field v-model.number="yrate" label="年利率（%）"/>
                </div>
                <div class="form-itemm">
                    <ui-text-field v-model.number="term" label="存期（月）"/>
                </div>
                <div class="form-itemm">
                    <ui-raised-button primary label="计算" @click="calculate" />
                </div>
            </div>
            <div class="result" v-if="result">
                <ul class="result-list">
                    <li>利息: <span class="strong">{{ result.interest }}</span></li>
                    <li>扣除利息税：<span class="strong">{{ result.tax }}</span></li>
                    <li>本息合计（税后）：<span class="strong">{{ result.result }}</span></li>
                </ul>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    
    export default {
        data () {
            return {
                type: '00',
                amount: null,
                yrate: 0.35,
                term: null,
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/deposit/help'
                        }
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            calculate() {
                if (!this.amount) {
                    this.$message({
                        type: 'danger',
                        text: '请输入存款金额!'
                    })
                    return
                }
                if (!this.yrate) {
                    this.$message({
                        type: 'danger',
                        text: '请输入年利率或选择期限种类!'
                    })
                    // document.per_form.yRateTextBox.focus()
                    return
                }
                if (!this.term) {
                    this.$message({
                        type: 'danger',
                        text: '请输入存期!'
                    })
                    // document.per_form.termTextBox.focus()
                    return
                }

                if (isNaN(this.amount)) {
                    alert("请输入数字!")
                    // document.per_form.amountTextBox.focus()
                    return
                }
                if (isNaN(this.yrate)) {
                    alert("请输入数字!")
                    // document.per_form.yRateTextBox.focus()
                    return
                }
                if (isNaN(this.term)) {
                    alert("请输入数字!")
                    // document.per_form.termTextBox.focus()
                    return
                }

                this.result = {}

                var taxrate = 0.00;//Saving Tax Rate,20090210
                var interest = this.amount * this.yrate * this.term * 0.01 / 12
                var tax = taxrate * this.amount * this.yrate * this.term * 0.01 / 12
                var result = this.amount * (1 + (1 - taxrate) * this.yrate * this.term * 0.01 / 12)
                interest = Math.round(interest * 100)
                interest = interest / 100
                interest = interest + ""
                this.result.interest = interest

                tax = Math.round(tax * 100)
                tax = tax / 100
                tax = tax + ""
                this.result.tax = tax

                result = Math.round(result * 100)
                result = result / 100
                result = result + ""
                this.result.result = result
            },
        },
        watch: {
            type() {
                switch (this.type) {
                    case '00':
                        this.yrate = 0.35
                        break
                    case '03':
                        this.yrate = 1.1
                        this.term = 3
                        break
                    case '06':
                        this.yrate = 1.3
                        this.term = 6
                        break
                    case '12':
                        this.yrate = 1.5
                        this.term = 12
                        break
                    case '24':
                        this.yrate = 2.1
                        this.term = 24
                        break
                    case '36':
                        this.yrate = 2.75
                        this.term = 36
                        break
                    case '60':
                        this.yrate = 2.75
                        this.term = 60
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.result {
    margin-top: 16px;
    .strong {
        color: #f60;
        font-weight: bold;
    }
}
</style>

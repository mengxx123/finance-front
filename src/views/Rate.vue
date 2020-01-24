<template>
    <my-page title="利息计算器" :page="page">
        <div class="common-container container">
            <div class="tool-box-body">
                <div class="form-horizontal">
                    <div class="form-group">
                        <ui-select-field v-model="type" label="计算类型">
                            <ui-menu-item value="rate" title="计算利息"/>
                            <ui-menu-item value="reverse" title="计算本金"/>
                        </ui-select-field>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="money" type="number" :label="type === 'rate' ? '本金' : '本息'"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="rate" type="number" label="年利率（%）"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="time" type="number" label="年数"/>
                    </div>
                    <div class="form-group btns">
                        <ui-raised-button class="btn" label="计算" primary @click="calculate" />
                        <ui-raised-button class="btn" label="重置" @click="reset" />
                    </div>
                </div>
                <div class="result" v-if="result">
                    <ul class="result-list" v-if="type === 'rate'">
                        <li>利息：<span class="strong">{{ result.rate }}</span> 元</li>
                        <li>本息：<span class="strong">{{ result.total }}</span> 元</li>
                    </ul>
                    <ul class="result-list" v-if="type === 'reverse'">
                        <li>本金：<span class="strong">{{ result.rate }}</span> 元</li>
                    </ul>
                </div>
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
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/9c01c670247f11eabd7877dfcefc10ef',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted () {
        },
        methods: {
            reset() {
                this.money = null
                this.rate = null
                this.time = null
                this.result = null
            },
            calculate() {
                this.result = null

                if (!this.money) {
                    this.$message({
                        type: 'danger',
                        text: '请输入' + (this.type === 'rate' ? '本金' : '本息')
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
                        text: '请输入年数'
                    })
                    return
                }

                if (this.type === 'rate') {
                    let rate = this.money * this.rate / 100 * this.time
                    this.result = {
                        rate,
                        total: rate + this.money
                    }
                } else {
                    let rate = this.money / (1 + this.rate / 100 * this.time)
                    this.result = {
                        rate,
                    }
                }

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
}
</style>

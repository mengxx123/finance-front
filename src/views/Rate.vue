<template>
    <my-page title="利息计算器" :page="page">
        <div class="common-container container">
            <div class="tool-box-body">
                <div class="form-horizontal">
                    <!-- <div class="form-group">
                        <ui-select-field v-model="type" label="收入类型">
                            <ui-menu-item value="1" title="工资、薪金所得"/>
                            <ui-menu-item value="2" title="个体工商户生产、经营所得"/>
                            <ui-menu-item value="3" title="对企事业单位的承包经营"/>
                            <ui-menu-item value="4" title="劳务报酬所得"/>
                            <ui-menu-item value="5" title="稿酬所得"/>
                            <ui-menu-item value="6" title="特需权使用费所得"/>
                            <ui-menu-item value="7" title="财产租赁所得"/>
                            <ui-menu-item value="8" title="财产转让所得"/>
                            <ui-menu-item value="9" title="利息、股息、红利所得"/>
                            <ui-menu-item value="10" title="偶然所得"/>
                        </ui-select-field>
                    </div> -->
                    <div class="form-group">
                        <ui-text-field v-model.number="money" type="number" label="金额"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="rate" type="number" label="日利率（%）"/>
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="time" type="number" label="天数"/>
                    </div>
                    <div class="form-group">
                        <ui-raised-button label="计算" primary @click="calculate" />
                    </div>
                </div>
                <div class="result" v-if="result">
                    <ul class="result-list">
                        <li>利息：<span class="strong">{{ result.rate }}</span> 元</li>
                        <li>本息：<span class="strong">{{ result.total }}</span> 元</li>
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
                money: null,
                rate: null,
                time: null,
                result: null,
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/tax/help'
                        // }
                    ]
                }
            }
        },
        mounted () {
        },
        methods: {
            calculate() {
                this.result = null

                if (!this.money) {
                    this.$message({
                        type: 'danger',
                        text: '请输入金额'
                    })
                    return
                }
                if (!this.rate) {
                    this.$message({
                        type: 'danger',
                        text: '请输入日利率'
                    })
                    return
                }
                if (!this.time) {
                    this.$message({
                        type: 'danger',
                        text: '请输入天数'
                    })
                    return
                }

                let rate = this.money * this.rate / 100 * this.time
                this.result = {
                    rate,
                    total: rate + this.money
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

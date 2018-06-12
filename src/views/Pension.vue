<template>
    <my-page title="退休养老保险金计算器" :page="page">
        <div>
            <div class="form-itemm">
                <div class="form-itemm">
                    <ui-text-field v-model.number="average" label="上年度月平均工资"/>
                </div>
            </div>
            <div class="form-itemm">
                <div class="form-itemm">
                    <ui-text-field v-model.number="total" label="您帐户累积的养老金额"/>
                </div>
            </div>
            <div class="form-itemm">
                <ui-raised-button primary label="计算" @click="calculate" />
            </div>
        </div>
        <div class="result" v-if="result">
            <ul class="result-list">
                <li>退休后每月基础养老金为： <span class="strong">{{ result }} 元</span></li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    
    export default {
        data () {
            return {
                average: null,
                total: null,
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/pension/help'
                        }
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            calculate() {
                if (!this.average) {
                    this.$message({
                        type: 'danger',
                        text: '请输入上年度月平均工资!'
                    })
                    return
                }
                if (!this.total) {
                    this.$message({
                        type: 'danger',
                        text: '请输入您帐户累积的养老金额!'
                    })
                    return
                }

                this.result = (this.average * 0.2 + this.total / 120).toFixed(2)
            },
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

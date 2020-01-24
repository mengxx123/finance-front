<template>
    <my-page title="银行卡号归属信息查询" :page="page">
        <div class="common-container container">
            <div class="tool-box-body">
                <div class="form-horizontal">
                    <div class="form-group">
                        <ui-text-field v-model="number" label="银行卡号"/>
                    </div>
                </div>
                <div class="btns">
                    <ui-raised-button class="btn" label="查询" primary @click="query" />
                    <ui-raised-button class="btn" label="清空" @click="clear" />
                </div>
                <div class="ui-loading" v-if="loading">
                    <ui-circular-progress :size="24"/>
                </div>
                <div class="result" v-if="result && result !== -1">
                    <ul class="result-list">
                        <li>银行名称：<span class="strong">{{ result.bank }}</span></li>
                        <li>卡类型：<span class="strong">{{ result.cardType }}</span></li>
                    </ul>
                </div>
                <div v-if="result === -1">
                    找不到银行卡
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    console.log(WordBankCardName)
    const cardTypes = {
        DC: '储蓄卡',
        CC: '信用卡',
        SCC: '准贷记卡',
        PC: '预付费卡'
    }

    export default {
        data () {
            return {
                loading: false,
                number: '',
                // number: '370286888888888',
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/4b1d7650247f11eabd7877dfcefc10ef',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted () {
            this.test()
        },
        methods: {
            test() {
                for (let i = 0; i < bankcardList.length; i++) {
                    var bankCard = bankcardList[i];
                    for (let pattern of bankCard.patterns) {
                        if (pattern.reg.test('621096000000000')) {
                            console.log('找到了', bankCard)
                            return bankCard
                        }
                    }
                }
            },
            clear() {
                this.number = ''
                this.result = null
            },
            query() {
                if (!this.number) {
                    this.$message({
                        type: 'danger',
                        text: '请输入银行卡号'
                    })
                    return
                }
                if (this.number.length < 15 || this.number.length > 19) {
                    this.$message({
                        type: 'danger',
                        text: '银行卡位数必须是 15 到 19 位'
                    })
                    return
                }
                
                this.loading = true
                this.result = null
                this.$http.get(`http://localhost:1026/bank_cards/${this.number}`).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        if (data.validated === true) {
                            this.result = {
                                bank: bankInfo[data.bank],
                                cardType: cardTypes[data.cardType]
                            }
                        } else {
                            this.result = -1
                        }
                        this.loading = false
                    },
                    response => {
                        this.loading = false
                        this.result = -1
                        console.log(response)
                    })
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.btns {
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
</style>

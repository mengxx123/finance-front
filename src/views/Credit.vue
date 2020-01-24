<template>
    <my-page title="信用卡分期计算器" :page="page">
        <div class="common-container container">
            <div>
                <div class="form-itemm">
                    <ui-select-field v-model="bank" label="银行" :maxHeight="300">
                        <ui-menu-item value="1" title="北京银行"/>
                        <ui-menu-item value="2" title="工商银行"/>
                        <ui-menu-item value="17" title="包商银行"/>
                        <ui-menu-item value="16" title="中信银行"/>
                        <ui-menu-item value="18" title="重庆银行"/>
                        <ui-menu-item value="6" title="建设银行"/>
                        <ui-menu-item value="11" title="浦发银行"/>
                        <ui-menu-item value="4" title="广发银行"/>
                        <ui-menu-item value="3" title="光大银行"/>
                        <ui-menu-item value="14" title="招商银行"/>
                        <ui-menu-item value="5" title="华夏银行"/>
                        <ui-menu-item value="15" title="中国银行"/>
                        <ui-menu-item value="9" title="农业银行"/>

                        <ui-menu-item value="13" title="兴业银行"/>
                        <ui-menu-item value="28" title="广州银行"/>
                        <ui-menu-item value="20" title="上海银行"/>
                        <ui-menu-item value="334" title="渣打银行"/>
                        <ui-menu-item value="7" title="交通银行"/>
                        <ui-menu-item value="8" title="民生银行"/>
                        <ui-menu-item value="31" title="花旗银行"/>
                    </ui-select-field>
                </div>
                <div class="form-itemm">
                    <ui-select-field v-model.number="stage" label="期数" :maxHeight="300">
                        <ui-menu-item value="3" title="3期（3个月）"/>
                        <ui-menu-item value="6" title="6期（6个月）"/>
                        <ui-menu-item value="9" title="9期（9个月）"/>
                        <ui-menu-item value="12" title="12期（一年）"/>
                        <ui-menu-item value="15" title="15期（一年三个月）"/>
                        <ui-menu-item value="18" title="18期（一年半）"/>
                        <ui-menu-item value="24" title="24期（两年）"/>
                    </ui-select-field>
                </div>
                <div class="form-itemm">
                    <ui-text-field v-model.number="money" label="金额（元）"/>
                </div>
                <div class="form-itemm">
                    <ui-raised-button primary label="计算" @click="calculate" />
                </div>
            </div>
            <div class="result" v-if="result">
                <ul class="result-list">
                    <li>总利息（手续费）：<span class="strong">{{ result.interest }}</span> 元</li>
                    <li>总计还款金额：<span class="strong">{{ result.total }}</span> 元</li>
                    <li>每期（月）还款金额：<span class="strong">{{ result.monthlyMoney }}</span> 元</li>
                    <li>每日利息（手续费）金额：<span class="strong">{{ result.dailyMoney }}</span> 元</li>
                </ul>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    var bank_stages = {
        "14": {
            "stage3": 2.7,
            "stage6": 4.5,
            "stage9": 0,
            "stage12": 7.92,
            "stage15": 0,
            "stage18": 12.24,
            "stage24": 16.32
        },
        "4": {
            "stage3": 0,
            "stage6": 4.2,
            "stage9": 0,
            "stage12": 8.4,
            "stage15": 0,
            "stage18": 12.96,
            "stage24": 17.28
        },
        "7": {
            "stage3": 2.79,
            "stage6": 4.8,
            "stage9": 6.48,
            "stage12": 8.64,
            "stage15": 0,
            "stage18": 12.96,
            "stage24": 17.28
        },
        "3": {"stage3": 2.9, "stage6": 5, "stage9": 7, "stage12": 9, "stage15": 0, "stage18": 0, "stage24": 0},
        "13": {
            "stage3": 2.55,
            "stage6": 4.5,
            "stage9": 0,
            "stage12": 9,
            "stage15": 0,
            "stage18": 13.5,
            "stage24": 18
        },
        "16": {
            "stage3": 2.4,
            "stage6": 4.8,
            "stage9": 6.84,
            "stage12": 8.76,
            "stage15": 0,
            "stage18": 13.5,
            "stage24": 18
        },
        "8": {
            "stage3": 2.46,
            "stage6": 4.2,
            "stage9": 6.03,
            "stage12": 8.04,
            "stage15": 0,
            "stage18": 12.06,
            "stage24": 16.8
        },
        "5": {
            "stage3": 2.55,
            "stage6": 4.5,
            "stage9": 6.3,
            "stage12": 8.4,
            "stage15": 10.5,
            "stage18": 12.6,
            "stage24": 16.8
        },
        "15": {
            "stage3": 1.95,
            "stage6": 3.6,
            "stage9": 5.4,
            "stage12": 7.2,
            "stage15": 0,
            "stage18": 11.7,
            "stage24": 15
        },
        "11": {
            "stage3": 2.64,
            "stage6": 4.44,
            "stage9": 0,
            "stage12": 8.16,
            "stage15": 10.35,
            "stage18": 12.6,
            "stage24": 16.8
        },
        "10": {
            "stage3": 0,
            "stage6": 0.68,
            "stage9": 0.66,
            "stage12": 0.64,
            "stage15": 0,
            "stage18": 0.62,
            "stage24": 0.6
        },
        "9": {
            "stage3": 1.8,
            "stage6": 3.6,
            "stage9": 5.4,
            "stage12": 7.2,
            "stage15": 0,
            "stage18": 0,
            "stage24": 14.4
        },
        "2": {
            "stage3": 1.65,
            "stage6": 3.6,
            "stage9": 5.4,
            "stage12": 7.2,
            "stage15": 0,
            "stage18": 11.7,
            "stage24": 15.6
        },
        "6": {
            "stage3": 2.25,
            "stage6": 4.2,
            "stage9": 0,
            "stage12": 7.2,
            "stage15": 0,
            "stage18": 10.8,
            "stage24": 14.88
        },
        "1": {
            "stage3": 1.8,
            "stage6": 3.6,
            "stage9": 5.4,
            "stage12": 7.2,
            "stage15": 0,
            "stage18": 11.7,
            "stage24": 15.6
        },
        "31": {
            "stage3": 2.16,
            "stage6": 4.32,
            "stage9": 6.48,
            "stage12": 8.64,
            "stage15": 0,
            "stage18": 12.96,
            "stage24": 17.28
        },
        "28": {
            "stage3": 2.1,
            "stage6": 4.2,
            "stage9": 0,
            "stage12": 8.4,
            "stage15": 0,
            "stage18": 12.6,
            "stage24": 16.8
        },
        "17": {
            "stage3": 1.95,
            "stage6": 3.9,
            "stage9": 5.85,
            "stage12": 7.8,
            "stage15": 0,
            "stage18": 12.6,
            "stage24": 16.8
        },
        "334": {
            "stage3": 0,
            "stage6": 2.9,
            "stage9": 6.25,
            "stage12": 9,
            "stage15": 0,
            "stage18": 13.5,
            "stage24": 18
        },
        "20": {
            "stage3": 2.35,
            "stage6": 3.9,
            "stage9": 5.85,
            "stage12": 7.8,
            "stage15": 0,
            "stage18": 0,
            "stage24": 16.08
        },
        "18": {"stage3": 2.6, "stage6": 4.2, "stage9": 0, "stage12": 7.2, "stage15": 0, "stage18": 0, "stage24": 0}
    };

    export default {
        data () {
            return {
                bank: '2',
                money: null,
                stage: '12',

                type: 1,
                total: 11700,
                insure: 0,
                start: 3500,
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/d2d13040248011eabd7877dfcefc10ef',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            calculate: function () {
                if (!this.bank) {
                    ui.msg('请选择银行')
                    return
                }
                if (!this.stage) {
                    ui.msg('请选择期数')
                    return
                }
                if (!this.money) {
                    this.$message({
                        type: 'danger',
                        text: '请输入金额'
                    })
                    return
                }

                var rate = bank_stages['' + this.bank]['stage' + this.stage]

                console.log(this.money * rate)

                var lixi = this.money * rate / 100

                this.result = {
                    interest: lixi,
                    total: lixi + this.money,
                    monthlyMoney: ((lixi + this.money) / this.stage).toFixed(2),
                    dailyMoney: ((lixi) / this.stage / 30).toFixed(1)
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

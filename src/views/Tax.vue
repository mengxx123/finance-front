<template>
    <my-page title="个人所得税计算器" :page="page">
        <div class="common-container container">
            <div class="tool-box-body">
                <div class="form-horizontal">
                    <div class="form-group">
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
                    </div>
                    <div class="form-group">
                        <ui-text-field v-model.number="total" label="收入总额"/>
                        <span class="unit">元</span>
                    </div>
                    <div v-if="type === '1'">
                        <div class="form-group">
                            <ui-text-field v-model.number="insure" label="五险一金"/>
                            <span class="unit">元</span>
                        </div>
                        <div class="form-group">
                            <ui-select-field v-model.number="start" label="起征额">
                                <ui-menu-item value="5000" title="5000"/>
                                <ui-menu-item value="3500" title="3500"/>
                                <ui-menu-item value="4800" title="4800"/>
                            </ui-select-field>
                            <div class="tip">大陆 5000 元；外籍及港、澳、台 4800 元</div>

                            <!--<label class="control-label col-sm-3">起征额：</label>-->
                            <!--<div class="col-sm-9">-->
                                <!--<select class="form-control" v-model="start">-->
                                    <!--<option value="3500" selected>3500</option>-->
                                    <!--<option value="4800">4800</option>-->
                                <!--</select>-->
                                <!--&lt;!&ndash;                                        <input v-model.number="start" value="3500" class="form-control"> 元&ndash;&gt;-->
                                <!--<div class="help-block"></div>-->
                            <!--</div>-->
                        </div>
                    </div>
                    <div class="form-group">
                        <ui-raised-button label="计算" primary @click="calculate" />
                        <!--<div class="col-sm-9 col-sm-offset-3">-->
                            <!--<button class="btn btn-primary" @click="calculate">计算</button>-->
                        <!--</div>-->
                    </div>
                </div>
                <div class="result" v-if="result">
                    <ul class="result-list">
                        <li>应缴税款：<span class="strong">{{ result.edTaxSum }}</span> 元</li>
                        <li>税后收入：<span class="strong">{{ result.fullSum }}</span> 元</li>
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
                type: '1',
                total: null,
                insure: 0,
                start: '5000',
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/tax/help'
                        }
                    ]
                }
            }
        },
        mounted () {
        },
        methods: {
            calculate() {
                this.result = null

                if (!this.total) {
                    this.$message({
                        type: 'danger',
                        text: '请输入收入总额'
                    })
                    return
                }
                var total = parseFloat(this.total)
                var B = parseFloat(this.insure)
                var C = parseFloat(this.start)
                var T = this.type
                var D = 0
                var E = 0

                console.log(this.type)

                switch (T) {
                    case '1':
                        var L = total - B - C;
                        let K;
                        var R = K = 0;
                        if (total <= C) {
                            D = 0;
                            E = total;
                            break;
                        }
                        if (L <= 1500) {
                            R = 0.03;
                            K = 0;
                        } else if (L <= 4500) {
                            R = 0.1;
                            K = 105;
                        } else if (L <= 9000) {
                            R = 0.2;
                            K = 555;
                        } else if (L <= 35000) {
                            R = 0.25;
                            K = 1005;
                        } else if (L <= 55000) {
                            R = 0.30;
                            K = 2755;
                        } else if (L <= 80000) {
                            R = 0.35;
                            K = 5505;
                        } else {
                            R = 0.45;
                            K = 13505;
                        }
                        D = L * R - K;
                        E = total - B - D;
                        break;
                    case '2':
                    case '3':
                        var R = K = 0;
                        if (total <= 15000) {
                            R = 0.05;
                            K = 0;
                        } else if (total <= 30000) {
                            R = 0.1;
                            K = 750;
                        } else if (total <= 60000) {
                            R = 0.2;
                            K = 3750;
                        } else if (total <= 100000) {
                            R = 0.3;
                            K = 9750;
                        } else {
                            R = 0.35;
                            K = 14750;
                        }
                        D = total * R - K;
                        E = total - D;
                        break;
                    case '4':
                        if (total <= 800) {
                            D = 0;
                            E = total - D;
                        } else if (total <= 4000) {
                            D = (total - 800) * window.personUnexpectedRate;
                            E = total - D;
                        } else {
                            var R = K = 0, tmp = total * (1 - window.personUnexpectedRate);
                            if (tmp <= 20000) {
                                R = 0.2;
                                K = 0;
                            } else if (tmp <= 50000) {
                                R = 0.3;
                                K = 2000;
                            } else {
                                R = 0.4;
                                K = 7000;
                            }
                            D = total * (1 - window.personUnexpectedRate) * R - K;
                            E = total - D;
                        }
                        break;
                    case '5':
                        if (total <= 800) {
                            D = 0;
                            E = total - D;
                        } else if (total <= 4000) {
                            D = (total - 800) * window.personUnexpectedRate * (1 - window.personPaperRate);
                            E = total - D;
                        } else {
                            D = total * (1 - window.personUnexpectedRate) * window.personUnexpectedRate * (1 - window.personPaperRate);
                            E = total - D;
                        }
                        break;
                    case '6':
                    case '7': //
                        if (total <= 800) {
                            D = 0;
                            E = total - D;
                        } else if (total <= 4000) {
                            D = (total - 800) * window.personUnexpectedRate;
                            E = total - D;
                        } else {
                            D = total * (1 - window.personUnexpectedRate) * window.personUnexpectedRate;
                            E = total - D;
                        }
                        break;
                    case '8': // 财产转让所得
                    case '9': // 利息、股息、红利所得
                    case '10': // 偶然所得
                        D = total * window.personUnexpectedRate;
                        E = total * (1 - window.personUnexpectedRate);
                        break;
                }

                this.result = {
                    edTaxSum: D.toFixed(2),
                    fullSum: E.toFixed(2)
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

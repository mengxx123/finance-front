<template>
    <my-page title="财务" :page="page">
        <app-list :data="groups" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '基本工具',
                        apps: [
                            {
                                name: '计算器',
                                desc: '',
                                icon: '/static/img/calculator_simple.svg',
                                to: '12',
                                href: 'https://calculator.yunser.com/calculator',
                                target: '_blank'
                            },
                            {
                                name: '人民币大小写转换',
                                desc: '',
                                icon: '/static/img/finance_rmb.svg',
                                to: '12',
                                href: 'https://calculator.yunser.com/rmb',
                                target: '_blank'
                            },
                            {
                                name: '个人所得税',
                                desc: '',
                                icon: '/static/img/finance_tax.svg',
                                to: '/tax'
                            },
                            {
                                name: '五险一金计算器',
                                desc: '',
                                icon: '/static/img/finance_51.svg',
                                to: '/tax51'
                            },
                            {
                                name: '银行卡号查询',
                                desc: '银行卡号归属信息查询',
                                icon: '/static/img/finance_bank_card.svg',
                                to: '/bank'
                            },
                            {
                                name: '利息计算器',
                                desc: '',
                                icon: '/static/img/finance.svg',
                                to: '/rate'
                            }
                        ]
                    },
                    {
                        name: '货币',
                        apps: [
                            {
                                name: '汇率查询',
                                desc: '',
                                icon: '/static/img/finance_exchange_rate.svg',
                                to: '/exchangeRate'
                            },
                            {
                                name: '汇率转换',
                                desc: '',
                                icon: '/static/img/finance_rate_convert.svg',
                                to: '/exchangeRate/convert'
                            },
                            {
                                name: '世界各国货币',
                                desc: '',
                                icon: '/static/img/finance.svg',
                                to: '/currency'
                            }
                        ]
                    },
                    {
                        name: '投资理财',
                        apps: [
                            {
                                name: '会计科目汇总表',
                                desc: '',
                                icon: '/static/img/table.svg',
                                to: '/subject'
                            },
                            {
                                name: '印花税计算器',
                                desc: '',
                                icon: '/static/img/finance_tax.svg',
                                to: '/stampDuty'
                            }
                        ]
                    },
                    {
                        name: '企业财务',
                        apps: [
                            {
                                name: '信用卡分期',
                                desc: '',
                                icon: '/static/img/finance_bank_card.svg',
                                to: '/credit'
                            },
                            {
                                name: '退休养老保险金',
                                desc: '',
                                icon: '/static/img/finance_insurance.svg',
                                to: '/pension'
                            },
                            {
                                name: '存款',
                                desc: '',
                                icon: '/static/img/finance_save_money.svg',
                                to: '/deposit'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=finance',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=finance',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        mounted() {
        }
    }
</script>

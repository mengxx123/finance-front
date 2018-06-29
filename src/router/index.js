import Vue from 'vue'
import Router from 'vue-router'

const Tax = resolve => require(['@/views/Tax'], resolve)
const Tax51 = resolve => require(['@/views/Tax51'], resolve)
const TaxHelp = resolve => require(['@/views/TaxHelp'], resolve)
const ExchangeRate = resolve => require(['@/views/ExchangeRate'], resolve)
const ExchangeRateConvert = resolve => require(['@/views/ExchangeRateConvert'], resolve)
const Deposit = resolve => require(['@/views/Deposit'], resolve)
const DepositHelp = resolve => require(['@/views/DepositHelp'], resolve)
const Credit = resolve => require(['@/views/Credit'], resolve)
const CreditHelp = resolve => require(['@/views/CreditHelp'], resolve)
const Pension = resolve => require(['@/views/Pension'], resolve)
const PensionHelp = resolve => require(['@/views/PensionHelp'], resolve)
const Subject = resolve => require(['@/views/Subject'], resolve)
const StampDuty = resolve => require(['@/views/StampDuty'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Tax
    },
    {
        path: '/tax/help',
        component: TaxHelp
    },
    {
        path: '/tax51',
        component: Tax51
    },
    {
        path: '/exchangeRate',
        component: ExchangeRate
    },
    {
        path: '/exchangeRate/convert',
        component: ExchangeRateConvert
    },
    {
        path: '/deposit',
        component: Deposit
    },
    {
        path: '/deposit/help',
        component: DepositHelp
    },
    {
        path: '/credit',
        component: Credit
    },
    {
        path: '/credit/help',
        component: CreditHelp
    },
    {
        path: '/pension',
        component: Pension
    },
    {
        path: '/pension/help',
        component: PensionHelp
    },
    {
        path: '/subject',
        component: Subject
    },
    {
        path: '/stampDuty',
        component: StampDuty
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router

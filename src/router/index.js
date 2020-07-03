import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Passionists from '@/components/Passionists'
import Paul from '@/components/Paul'
import Prayer from '@/components/Prayer'
import Prayer1 from '@/components/Prayer1'
import Prayer2 from '@/components/Prayer2'
import Thoughts from '@/components/Thoughts'
import Province from '@/components/Province'
import InPoland from '@/components/InPoland'
import Monasteries from '@/components/Monasteries'
import Przasnysz from '@/components/Przasnysz'
import Sadowie from '@/components/Sadowie'
import Rawa from '@/components/Rawa'
import Lodz from '@/components/Lodz'
import Warszawa from '@/components/Warszawa'
import Wisla from '@/components/Wisla'
import Kiezliny from '@/components/Kiezliny'
import Smotrycz from '@/components/Smotrycz'
import Jaromierzyce from '@/components/Jaromierzyce'
import WarszawaBialoleka from '@/components/WarszawaBialoleka'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/passionists',
            name: 'Passionists',
            component: Passionists
        },
        {
            path: '/paul',
            name: 'Paul',
            component: Paul
        },
        {
            path: '/prayer',
            name: 'Prayer',
            component: Prayer
        }, {
            path: '/prayer1',
            name: 'Prayer1',
            component: Prayer1
        }, {
            path: '/prayer2',
            name: 'Prayer2',
            component: Prayer2
        }, {
            path: '/thoughts',
            name: 'Thoughts',
            component: Thoughts
        },
        {
            path: '/province',
            name: 'Province',
            component: Province
        },
        {
            path: '/inPoland',
            name: 'InPoland',
            component: InPoland
        },
        {
            path: '/monasteries',
            name: 'Monasteries',
            component: Monasteries
        },
        {
            path: '/przasnysz',
            name: 'Przasnysz',
            component: Przasnysz
        },
        {
            path: '/sadowie',
            name: 'Sadowie',
            component: Sadowie
        },
        {
            path: '/rawa-mazowiecka',
            name: 'Rawa',
            component: Rawa
        },
        {
            path: '/lodz',
            name: 'Lodz',
            component: Lodz
        },
        {
            path: '/warszawa',
            name: 'Warszawa',
            component: Warszawa
        },

        {
            path: '/wisla',
            name: 'Wisla',
            component: Wisla
        },
        {
            path: '/kiezliny',
            name: 'Kiezliny',
            component: Kiezliny
        },
        {
            path: '/smotrycz',
            name: 'Smotrycz',
            component: Smotrycz
        },
        {
            path: '/jaromierzyce',
            name: 'Jaromierzyce',
            component: Jaromierzyce
        },

        {
            path: '/warszawa-bialoleka',
            name: 'WarszawaBialoleka',
            component: WarszawaBialoleka
        },
    ]
})

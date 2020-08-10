import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/ad/:id', name: 'Ad', component: Ad},
    {path: '/list', name: 'AdList', component: AdList},
    {path: '/newAd', name: 'NewAd', component: NewAd},
    {path: '/login', name: 'Login', component: Login},
    {path: '/registration', name: 'Registration', component: Registration},
    {path: '/orders', name: 'Orders', component: Orders}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricingView from '@/views/PricingView.vue'
import WhyUsView from '@/views/WhyUsView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: PricingView,
        },
        {
            path: '/whyus',
            name: 'Why us',
            component: WhyUsView,
        },
        {
            path: '/reviews',
            name: 'Reviews',
            component: ReviewsView,
        },
        {
            path: '/contact',
            name: 'Conact Us',
            component: ContactView,
        },
    ],
})

export default router

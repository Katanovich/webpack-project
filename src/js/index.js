import '../scss/style.scss'
import Swiper from 'swiper'
import './aside.js'
import { initSwiper } from './swiper.js'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

window.addEventListener('DOMContentLoaded', () => {
  initSwiper('.brand', 'brand-swiper')
})

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const swipers = {}

export function initSwiper(selector, key) {
  const isMobile = window.innerWidth < 768

  const slider = document.querySelector(selector)

  if (!slider) return

  if (isMobile && !swipers[key]) {
    swipers[key] = new Swiper(slider, {
      modules: [Pagination],

      slidesPerView: 1.2,

      spaceBetween: 16,

      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true
      }
    })
  }

  if (!isMobile && swipers[key]) {
    swipers[key].destroy(true, true)

    swipers[key] = null
  }
}

function initAllSwipers() {
  initSwiper('.brand', 'brand')
  initSwiper('.repair', 'repair')
}

initAllSwipers()

window.addEventListener('resize', initAllSwipers)

const btn = document.querySelector('#brandBtn')

const brandList = document.querySelector('.brand__list')

const brandBtnText = document.querySelector('.brand__button-text')

if (btn) {
  btn.addEventListener('click', () => {
    brandList.classList.toggle('brand__list--expanded')

    if (brandList.classList.contains('brand__list--expanded')) {
      brandBtnText.textContent = 'Скрыть'
    } else {
      brandBtnText.textContent = 'Показать все'
    }
  })
}

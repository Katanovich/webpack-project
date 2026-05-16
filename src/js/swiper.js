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
      spaceBetween: 24,
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true
      }
    })
  } else if (!isMobile && swipers[key]) {
    swipers[key].destroy(true, true)
    const wrapper = slider.querySelector('.swiper-wrapper')
    const slides = slider.querySelectorAll('.swiper-slide')
    wrapper.removeAttribute('style')
    slides.forEach((slide) => {
      slide.removeAttribute('style')
    })
    swipers[key] = null
  }
}

function initAllSwipers() {
  initSwiper('.brand', 'brand')
  initSwiper('.repair', 'repair')
  initSwiper('.price__table', 'price')
}

initAllSwipers()
window.addEventListener('resize', initAllSwipers)

function setToggleButton(btnSelector, listSelector, textSelector, activeClass) {
  const btn = document.querySelector(btnSelector)
  const list = document.querySelector(listSelector)
  const btnText = document.querySelector(textSelector)
  const arrow = btn.querySelector('.arrow')
  if (!btn || !list || !btnText) return
  btn.addEventListener('click', () => {
    list.classList.toggle(activeClass)
    if (list.classList.contains(activeClass)) {
      btnText.textContent = 'Скрыть'
      arrow.style.transform = 'rotate(180deg)'
    } else {
      btnText.textContent = 'Показать все'
      arrow.style.transform = 'rotate(0deg)'
    }
  })
}

setToggleButton(
  '#brandBtn',
  '.brand__list',
  '.brand__button-text',
  'brand__list--expanded'
)

setToggleButton(
  '#repairBtn',
  '.repair__list',
  '.repair__button-text',
  'repair__list--expanded'
)

setToggleButton(
  '#price-tableBtn',
  '.price__list',
  '.price-table__button-text',
  'price__list--expanded'
)

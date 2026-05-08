document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar__main')
  const burger = document.querySelector('.cps-header__burger')
  const closeBtn = document.querySelector('.sidebar__btn-close')
  const overlay = document.querySelector('.overlay')

  if (burger) {
    burger.addEventListener('click', () => {
      sidebar.classList.add('sidebar__main--open')
      overlay.classList.add('overlay--active')
    })
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('sidebar__main--open')
      overlay.classList.remove('overlay--active')
    })
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('sidebar__main--open')
      overlay.classList.remove('overlay--active')
    })
  }
})

let changeThemeButtons = document.querySelectorAll('.changeTheme')

changeThemeButtons.forEach((button) => {
  button.addEventListener('click', function () {
    let theme = this.dataset.theme
    applyTheme(theme)
  })
})

function applyTheme(themeName) {
  document
    .querySelector('[title="theme"]')
    .setAttribute('href', `theme-${themeName}.css`)
  changeThemeButtons.forEach((button) => {
    button.style.display = 'block'
  })
  document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'
  localStorage.setItem('theme', themeName)
}

let actionTheme = localStorage.getItem('theme')

if (actionTheme === null || actionTheme === 'light') {
  applyTheme('light')
} else if (actionTheme === 'dark') {
  applyTheme('dark')
}

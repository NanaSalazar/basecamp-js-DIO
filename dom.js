const darkModeClass = 'dark-mode'
const button = document.querySelector('#mode-selector')
const h1 = document.querySelector('#page-title')
const body = document.querySelector('#body')
const footer = document.querySelector('#footer')

button.addEventListener('click', changeMode)

function changeMode() {
    changeClasses()
    changeText()
}

function changeClasses() {
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeText() {
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = 'Light Mode'
        h1.innerHTML = 'Dark Mode ON'
        return
    }

    button.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'
    
}
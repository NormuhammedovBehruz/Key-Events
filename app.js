
const insert = document.querySelector('#insert')
const keyEvent = document.querySelector('.keyEvent')
const keyCode = document.querySelector('.keyCode')
const code = document.querySelector('.code')

document.addEventListener('keydown', (e) => {
    document.querySelector('.entering').classList.add('hidden')    
    document.querySelector('.container-keys').classList.remove('hidden')
    
    keyEvent.textContent = e.key
    keyCode.textContent = e.keyCode
    code.textContent = e.code
})
const elem = document.querySelector('body')
const btn = document.querySelector('.continue')
const modal = document.querySelector('.modal')
const dark = document.querySelector('.dark')
const prompt = document.querySelector('.prompt')

btn.addEventListener('click', function(){
    modal.classList.remove('active-modal')
    dark.classList.remove('active-modal')
    prompt.style.display = 'block'
})

elem.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        modal.classList.add('active-modal')
        dark.classList.add('active-modal')
        prompt.style.display = 'none'
    }
})

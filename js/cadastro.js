let btn = document.querySelector('#versenha')

btn.addEventListener('click', () =>{
    let inputsenha = document.querySelector('#senha')
    
    if(inputsenha.getAttribute('type') == 'password') {
        inputsenha.setAttribute('type', 'text')
    } else{
        inputsenha.setAttribute('type', 'password')
    }
})


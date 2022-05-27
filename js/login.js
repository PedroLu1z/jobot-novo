let btn = document.querySelector('#')

btn[0].addEventListener('click', () =>{
    let inputsenha = document.querySelector('#senha')
    
    if(inputsenha.getAttribute('type') == 'password') {
        inputsenha.setAttribute('type', 'text')
    } else{
        inputsenha.setAttribute('type', 'password')
    }
})


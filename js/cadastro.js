let btn = document.querySelectorAll('.fa')

btn[0].addEventListener('click', () =>{
    let inputsenha = document.querySelector('#senha')
    
    if(inputsenha.getAttribute('type') == 'password') {
        inputsenha.setAttribute('type', 'text')
    } else{
        inputsenha.setAttribute('type', 'password')
    }
})

btn[1].addEventListener('click', () =>{
    let inputsenha = document.querySelector('#confirmSenha')
    
    if(inputsenha.getAttribute('type') == 'password') {
        inputsenha.setAttribute('type', 'text')
    } else{
        inputsenha.setAttribute('type', 'password')
    }
})



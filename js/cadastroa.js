let btnConfirm = document.querySelector('#verconfirmSenha')

btnConfirm.addEventListener('click', () =>{
    let inputConfirmsenha = document.querySelector('#verconfirmSenha')
    
    if(inputConfirmsenha.getAttribute('type') == 'password') {
        inputConfirmsenha.setAttribute('type', 'text')
    } else{
        inputConfirmsenha.setAttribute('type', 'password')
    }
})
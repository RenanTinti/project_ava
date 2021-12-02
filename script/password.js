const inputs = document.querySelectorAll('input');

function ResetPassword(){
    for(let k = 0; k < inputs.length; k++){
        if(inputs[0].value == '' || inputs[1].value == ''){
            alert('Um ou mais campos obrigatórios não foram preenchidos');
            break;
        }
        else{
            alert('A senha foi reenviada para seu e-mail');
            break;
        }
    }
}

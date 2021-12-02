const inputs = document.querySelectorAll('.register form input');

function RegisterCheck(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ''){
            alert('Um ou mais campos obrigatórios não foram preenchidos.');
            break;
        }else if(inputs[2].value != inputs[3].value){
            alert('As senhas não coincidem.');
            break;
        }else{
            alert('Cadastro criado com sucesso!');
            break;
        }
    }
}

const login_inputs = document.querySelectorAll('.login form input');

function LoginCheck(){
    for(let j = 0; j < login_inputs.length; j++){
        if(login_inputs[0].value == '' || login_inputs[1].value == ''){
            alert('Um ou mais campos obrigatórios não foram preenchidos');
            break;
        }else{
            alert('Cadastro acessado com sucesso!');
            break;
        }
    }
}
function login() {
    sendLogin({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });
}

function validateEmail(){
    var email = document.getElementById("email").value;
    
    var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    
    if(regex.test(email)){
        return true;
    }else{
        alert("Email fornecido está inválido")
        return false;
    }
}

function validatePassword(){
    var password = document.getElementById("password").value;

    if(password === ""){
        alert("Senha vazia!")
        return false;
    }
    
    if(password.length >= 8){
        return true;
    }else{
        alert("Senha precisa ter pelo menos 8 caracteres")
        return false;
    }
}

function validatePasswordisEqual(){

    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;

    if(password === passwordConfirm){
        return true;
    }else{
        alert("Senhas difertentes!")
    }

}

async function sendLogin(user){
    let url = ''; //path to backend 
    
    try {
        let response = await fetch(url, {
            method:'POST',
            body: JSON.stringify(user),
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'application/json;charset=utf-8'
            }
        });
        
        let json = await response.json();

        if (response.status == 200) {
            localStorage.setItem('token', json.token);
            localStorage.setItem('userID', json.userID);
            localStorage.setItem('userName', json.userName);
            window.location = 'perfil.html'; //should send user to logged home page 
        }
        else {
            localStorage.removeItem('token');
            localStorage.removeItem('userID');
            localStorage.removeItem('userName');
            console.log("DEU ERRO COMO ESPERADO");
            alert(json.message);
        }
    }
    catch(e) { 
        console.log(e);
    }
}

document.getElementById("commit").addEventListener("click",login,false);

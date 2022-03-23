function createUser(){
    if (document.getElementById("password").value != document.getElementById("password2").value)
        alert("A confirmação não corresponde à senha digitada.");
    else create({
        email :document.getElementById("email").value,
        nome: document.getElementById("nome").value,
        senha :document.getElementById("password").value
    });
}


function validatePasswordisEqual(){

    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    if(password === password2){
        return true;
    }else{
        alert("Senhas difertentes!")
    }

}

async function create(user) {
    let url = ' https://es-health-track.herokuapp.com/api/v1/auth'; 
    
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        
        let data = await response.json();
        
        if (response.status == 201) {
            alert("Usuário criado com sucesso.");
            window.location = 'index.html';
        }
        else {
            alert(data.message);
        }
    }
    catch(e) {
        console.log(e);
    }
}

document.getElementById("createUserButton").addEventListener("click", createUser, false);

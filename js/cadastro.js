function createUser(){
    if (document.getElementById("password").value != document.getElementById("password2").value)
        alert("A confirmação não corresponde à senha digitada.");
    else create({
        firstName: document.getElementById("nome").value,
        lastName :document.getElementById("sobrenome").value,
        email :document.getElementById("email").value,
        password :document.getElementById("password").value
    });
}

async function create(user) {
    let url = ''; //referencia pro back
    
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
            window.location = ''; //referencia pro html da pagina logada
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

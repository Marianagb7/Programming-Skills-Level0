
let loginForm = document.getElementById("loginForm")
let message = document.getElementById("message")
let attempts = 3

//Access conditions

loginForm.addEventListener("submit", function(event){
event.preventDefault()    

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(username==="admin"&& password==="2468"){
        message.innerHTML = "Bienveni@"
        message.style.color = "blue"
        window.close()
        window.open("http://127.0.0.1:5500/Programming-Skills-Level0/banking_system/system.html")

    }else{
        attempts--
        if(attempts > 0){
            message.innerHTML = "Tus credenciales están incorrectas, te quedan    "  + attempts +  "  intentos..."
            message.style.color="white"
        }else{
            loginForm.style.display="none"
            message.innerHTML="Intentos agotados...Intenta después"
            message.style.color="red"
        }

    }
})

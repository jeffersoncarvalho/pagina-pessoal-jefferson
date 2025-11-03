function say_hello() {
    console.log("Hello!")
}

function get_ano(){
    span_ano = document.getElementById("ano")
    ano_do_sistema = new Date().getFullYear()
    span_ano.innerHTML = ano_do_sistema
}

get_ano()
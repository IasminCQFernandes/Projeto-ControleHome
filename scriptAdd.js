

function buscar(){

    setTimeout(function() {
        let teste = document.getElementById('nomeControle').value;

        let resultado = document.getElementById('resultado').innerHTML = teste;

    }, 5000);
    
    let imgLoad = document.getElementById('imgLoad').style = "display:block;"

}

function conectar(){
    alert("Conectado com sucesso!");

    window.location.href = "index.html"
}

function insert (num){
    var numero = document.getElementById('painel-resultado').innerHTML;
    document.getElementById('painel-resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('painel-resultado').innerHTML = '';
}

function back(){
    var resultado = document.getElementById('painel-resultado').innerHTML;
    document.getElementById('painel-resultado').innerHTML = resultado.substring(0,resultado.length -1)
}

function efetuarCalculo(){
    var resultado = document.getElementById('painel-resultado').innerHTML;
    if(resultado){
        document.getElementById('painel-resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('painel-resultado').innerHTML = ''
    }
}
let lista=["samuel", "mateus"]
let divida =[]
function Divida(){
    let nome = document.getElementById("nome").value
    let kita = document.getElementById("kita")
    let propor = document.getElementById("propor")
    let aparecerr = document.getElementById("aparecerr")
    let principal = document.getElementById("principal")
    let teste = nome.toUpperCase()
    principal.style.display="block"
    aparecerr.style.display="block"

    if(lista.includes(nome)){
        kita.innerHTML=`ola ${teste} voce esta com pedencia que ver uma proposta para paga a divida?`
        kita.style.display="block"
        propor.style.background="#4EC6EB"
        propor.style.border="1px solid #000"
    }else{
        alert("nada encontrado")
    }
}

function Sim(){
    let nome = document.getElementById("nome").value
    let res = document.getElementById('res')
    let mar = document.getElementById("mar")
    mar.style.display="block"
    res.style.background='#4EC6EB'
    res.style.border='1px solid #000'
    if(nome === lista[0]){
        res.innerHTML=`${lista[0]} sua divida é de 20.000.00 entrada minima é de 500.00 reais`
    }
}


function Entrada(){
    let nome = document.getElementById("nome").value
    let res = document.getElementById('res')
    let entrada = document.getElementById("entrada").value
    let proposta = document.getElementById("proposta")
    let numero=Number(entrada)
    let mil = 20000.00
    if(nome === lista[0]){
         if(numero >= 500){
            let restante = numero - mil 
            for(let i= 2; i < 12 ; i++  ){
                let valor = (restante / i) + (restante * 0.04);
               proposta.innerHTML+=`${i}x : ${numero} : ${valor.toFixed(2)}<br>`
            }
        }
        else{
            alert('esse não é o valor minimo')
        }
    }
}

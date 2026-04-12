
let nuu =[1]

let valores =[]
function Divida(){

    let nome = document.getElementById("nome").value
    let kita = document.getElementById("kita")
    let propor = document.getElementById("propor")
    let aparecerr = document.getElementById("aparecerr")
    let principal = document.getElementById("principal")
    let imgreno = document.getElementById("imgreno")
    let teste = nome.toUpperCase()
    principal.style.display="block"
    aparecerr.style.display="block"
    imgreno.style.display="none"
    if(nome){
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
    let indice = Math.floor(Math.random() * nuu.length)
    let nu = nuu[indice]
    
    mar.style.display="block"
    res.style.background='#4EC6EB'
    res.style.border='1px solid #000'
    if(nome){
        if(nu === 1){
            res.innerHTML=`${nome} sua divida é de 200000.00$ entrada minima é de 2500.00 reais`
        }
    }
}

function Nao(){
    let nome = document.getElementById("nome").value
    alert(`não tem essa opção para voce ${nome} kkkkkkkkkkkkkkkkkkk`)
}

function Entrada(){
    let nome = document.getElementById("nome").value
    let entrada = document.getElementById("entrada").value
    let proposta = document.getElementById("proposta")
    let escolher =document.getElementById('escolher')
    let numero=Number(entrada)
    let indice = Math.floor(Math.random() * nuu.length)
    let nu = nuu[indice]
    proposta.innerHTML=''
    valores= []
    if(nome){
        if(nu === 1 ){
            if(numero >= 2500){
            let restante = numero - 200000
            escolher.style.background="#00EB86"
            escolher.style.display='block'
            escolher.style.border="1px solid #000"
            for(let i= 2; i < 12 ; i++  ){
                
                let valor = (restante / i) + (restante * 0.04);
                valores.push(valor)
               proposta.innerHTML+=`${i}x : ${numero} : ${valor.toFixed(2)}<br>`
            }
            if (numero >= 200000){
                let sobra = numero - 200000
                proposta.innerHTML=`voce digito ${numero} sua divida é de 200000 parabens voce quito sua divida e sobro ${sobra}$`
                escolher.style.display="none"
            }
        }
        else{
            alert('esse não é o valor minimo')
        }
        }

    } 
}

function Parcelar(){
    let dados = document.getElementsByName('Confirmar')
    let res01 = document.getElementById('res01')
    res01.style.background="#4EC6EB"
   if(dados[0].checked){
    res01.innerHTML=`voce parcelou em 2x de ${valores[0].toFixed(2)}`
   }
   if(dados[1].checked){
    res01.innerHTML=`voce parcelou em 3x de ${valores[1].toFixed(2)}`
   }
   if(dados[2].checked){
    res01.innerHTML=`voce parcelou em 4x de ${valores[2].toFixed(2)}`
   }
   if(dados[3].checked){
    res01.innerHTML=`voce parcelou em 5x de ${valores[3].toFixed(2)}`
   }
   if(dados[4].checked){
    res01.innerHTML=`voce parcelou em 6x de ${valores[4].toFixed(2)}`
   }
   if(dados[5].checked){
    res01.innerHTML=`voce parcelou em 7x de ${valores[5].toFixed(2)}`
   }
   if(dados[6].checked){
    res01.innerHTML=`voce parcelou em 8x de ${valores[6].toFixed(2)}`
   }
   if(dados[7].checked){
    res01.innerHTML=`voce parcelou em 9x de ${valores[7].toFixed(2)}`
   }
    if(dados[8].checked){
    res01.innerHTML=`voce parcelou em 10x de ${valores[8].toFixed(2)}`
   } 
   if(dados[9].checked){
    res01.innerHTML=`voce parcelou em 11x de ${valores[9].toFixed(2)}`
   }
   if(dados[10].checked){
    res01.innerHTML=`voce parcelou em 11x de ${valores[10].toFixed(2)}`
   }
}


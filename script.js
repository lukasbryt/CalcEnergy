function calcEletricidade (potencia, energia, tempo) {
            
    // Receive and adapt parameters
    var tempo = document.getElementById('tempo').value;
    var potencia = document.getElementById('potencia').value;
    var dias = document.getElementById('dias').value;
    var resultado = document.getElementById('resultado');
    var energia = 1000; //Quilowatt
    tempo = parseFloat (tempo); //Converte uma var tipo string para tipo number
    tempo /= 60;

    //Formula
    var consumo = (potencia/energia) * tempo;

    //Adjust to 2 decimal places
    consumo = consumo.toFixed(2);
    var kwhDay = consumo * dias;
    kwhDay = kwhDay.toFixed(1);

    //Tariffs
    var tarifa = null
    //Checks if value matches user selection with Switch Case
    switch (estado.value) {
        case "1":
            tarifa = 0.78
            break;
        case "2":
            tarifa = 1.20
            break;
        case "3":
            tarifa = 0.85
            break;
        case "4":
            tarifa = 0.90
            break;

        default:
            break;
    }
    
    //Display results
    resultado2.value = (' R$ ') + (tarifa*(consumo*dias)).toFixed(2);
    resultado.value = (' ') + consumo + (' KWh');
    resultado1.value = (' ') + kwhDay + (' KWh');
    
}

//>> Start screen slides
function trocaTela1(){
    if (potencia.value !== "") {
        document.getElementById('box1').style.display = 'none'
        document.getElementById('box2').style.display = 'block'
        document.getElementById('page').textContent = '2-4'
    } else {
        alert('Preencha o campo!')
    }
}
function trocaTela2(){
    if (tempo.value !== "") {
        document.getElementById('box2').style.display = 'none'
        document.getElementById('box3').style.display = 'block'
        document.getElementById('page').textContent = '3-4'
    } else {
        alert('Preencha o campo!')
    }
}
function trocaTela3(){
    if (dias.value !== "") {
        document.getElementById('box3').style.display = 'none'
        document.getElementById('box4').style.display = 'block'
        document.getElementById('page').textContent = '4-4'
    } else {
        alert('Preencha o campo!')
    }
}
function trocaTela4(){
    if (estado.value !== "0") {
        document.getElementById('box4').style.display = 'none'
        document.getElementById('popup').style.display = 'block'
        document.getElementById('page').textContent = ''
    } else {
        alert('Preencha o campo!')
    }
}
function recarregar(){
    document.getElementById('popup').style.display = 'none'
    document.getElementById('box1').style.display = 'block'
    document.getElementById('dias').value = ' '
    document.getElementById('tempo').value = ' '
    document.getElementById('potencia').value = ' '
    document.getElementById('page').textContent = '1-4'
}
//<< end slide display functions

btn1.addEventListener ('click', trocaTela1)
btn2.addEventListener ('click', trocaTela2)
btn3.addEventListener ('click', trocaTela3)
calc.addEventListener ('click', trocaTela4)

//Executes the main function after clicking the button 'CALCULATE CONSUMPTION' (Calcular Consumo)
calc.addEventListener ('click', calcEletricidade);
again.addEventListener ('click', recarregar)
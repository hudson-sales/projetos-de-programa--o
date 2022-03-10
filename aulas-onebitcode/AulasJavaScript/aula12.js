/* Início exercício computador de bordo*/
let velocity = 0;
nameSpaceship = "";
function computadorDeBordo(){
    shipData();
    menu();
    velocity = 0;
    nameSpaceship = "";    
}

function shipData(){
    nameSpaceship = prompt("Digite o nome da nave:");
    alert("Entrando no menu do computador de bordo:");
    return nameSpaceship;
}

function menu(){

    let itensmenu = prompt("Digite o número das seguintes opções:\n1- Acelerar a nave em 5km/s.\n2- Desacelerar a nave em 5Km/s.\n3- Imprimir os dados de bordo.\n4- Sair do programa.");

    switch(itensmenu){
        case "1":
        acelerar();
            break;
        case "2": 
        Desacelerar();
            break;
        case "3":
            imprimir();
            break;
        case "4":
            break;
        default:
            menu();
    }
}
function acelerar(){
    velocity += 5;
    alert("Você acelerou 5Km/s, sua velociade atual é "+velocity+".\n Voltando ao Menu principal.");
    menu();
}

function Desacelerar(){
    if(velocity > 0){
    velocity -= 5;
    alert("Você desacelerou 5Km/s, sua velociade atual é "+velocity+".\n Voltando ao Menu principal.");
    menu();
    }else{
        alert("Sua velocidade é menor do que 0, não podemos desacelerar!");
        menu();
    }
}
function imprimir(){
    alert("Dados da nave  \n Nome da nave: "+nameSpaceship+".\n Velocidade: "+velocity+".");
}
/*fim execício computador de bordo */
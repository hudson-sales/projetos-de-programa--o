var spaceShip = {
    name: "empty",
    velocity: 0,

    acelerar() {
            let max = parseInt(prompt("Quanto vc quer acelerar:"));
            if(this.velocity + max <= this.velocityMax){

            this.velocity += max;
            
            }else{
                alert("Você ecedeu a velociade máxima da nave de"+this.velocityMax+"Km/s.\n Sua velociade é: "+this.velocity);
            }
           menu();
    },

    dadosDaNave(){
        alert("Dados da nave:\nNome: "+this.name+"\n Tipo: "+this.type+"\n Velociadade: "+this.velocity);
        this.velocity = 0;
        this.name = "";
        this.tipo = "";
    },

    reduzir(){
        let min = parseInt(prompt("Quanto você quer reduzir:"));
        if(this.velocity >= min){
            this.velocity -= min;
        }
        else{
            alert("Sua velocidade é "+this.velocity+", se vc reduzir "+min+" sua nave vai parar.");
        }
    }

}
function criarSpaceship() {
    spaceShip.name = prompt("Digite nome da nave: ");
    spaceShip.type = prompt("Qual tipo da nave:");
    spaceShip.velocityMax = parseInt(prompt("Digite a velociade máxima da nave:"));
    menu();
}

function menu(){
    let itens = prompt("O que você deseja fazer: \n 1-Parar a nave.\n 2-Acelerar a nave.\n 3-Reduzir.");
    switch(itens){
        case "1":
            spaceShip.dadosDaNave();
            break;
        case "2":
            spaceShip.acelerar();
            break;
        case "3":
            spaceShip.reduzir();
        default:
        menu();
    }
}
/*Resolução exercício objetos*/
let spaceShip1 = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration;
    }
}

function registerSpaceship(){
    spaceShip1.name = prompt("Informe o nome da nave:");
    spaceShip1.type = prompt("Informe o tipo da nave:");
    spaceShip1.velocityMax = Number(prompt("informe a velociade máxima da nave Km/s"));
}

function acelerate(){
    let acceleration = Number(prompt("Quanto vc quer acelerar? (Km/s)"));
    spaceShip1.speedUp(acceleration);
    if(spaceShip1.velocity > spaceShip1.velocityMax){
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!"+
        "\NVelocidade da Nave: "+spaceShip1.velocity+"Km/s"+
        "\nVelocidade máxima da Nave: "+spaceShip1.velocityMax+"Km/s");
    }
}

function stop(){
    alert("Nome: "+ spaceShip1.name +"\nTipo: "+ spaceShip1.type +"\nVelociade: "+ spaceShip1.velocity +"\nVelocidade máxima da Nave: "+spaceShip1.velocityMax);
    spaceShip1.velocity = 0;
}

function showMenu(){
    let chosenOption;
    do{
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar");
        switch(chosenOption){
            case "1":
                acelerate();
                break;
            case "2":
                stop();
                break;
            default:
               alert("Opção inválida!") 
        }
    }while(chosenOption != 2);
}

function iniciar(){
    registerSpaceship();
    showMenu();
}
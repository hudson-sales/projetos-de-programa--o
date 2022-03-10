function load() {
    window.alert("bem-vindos! A seguir pediremos que informe alguns dados!");
    let nome = window.prompt("informe seu nome?");
    let idade = window.prompt("Informe sua idade?");
    let confirma = window.confirm("Esta e sua idade --> " + idade);
    if (confirma) {
        confirma = '"Sim"';
    } else {
        confirma = '"Não"';
    }
    alert("Seu nome é " + nome + ", sua idade é " + idade + ". Você confirmou sua idade " + confirma);
}
function calcularIdade() {
    let nome1 = window.prompt("Nome da pessoa mais velha:");
    let idade1 = window.prompt("Idade da pessoa mais velha:");
    let nome2 = window.prompt("Nome da pessoa mais nova:");
    let idade2 = window.prompt("Idade da pessoa mais nova:");

    let resul = idade1 - idade2;

    alert("A pessoa mais velha è " + nome1 + ", sua idade é " + idade1 + ".\n A pessoa mais nova é " 
    + nome2 + ", sua idade é " + idade2+".\n");
    alert("A diferença de idade e de "+resul+".");
}
function calcularVelocidade(){
    let nome_piloto = window.prompt("Qual nome do piloto:");
    let velocidade = 0;
    let velocidade_escolhida = window.prompt("Qual velociade você quer acelerar:");
    let confirma = window.confirm("Você esta indo para velocidade "+velocidade_escolhida+"Km/h, confirmar:");
    if(confirma){
        velocidade = parseInt(velocidade_escolhida);
    }
    if(velocidade == 0){
        alert("Nave está parada. Considere partir e aumentar a velociade:");
    }else if(velocidade < 40){
        alert("Você está devagar, podemos aumentar mais:");
    }else if(velocidade >= 40 && velocidade < 80){
        alert("Parece uma boa velociade para manter");
    }else if(velocidade >= 80 && velocidade < 100){
        alert("Velociade alta. Considere diminuir:")
    }else{
        alert("Velociade perigosa. Controle automático forçado:")
    }

    alert(`Piloto: ${nome_piloto} velocidade atual: ${velocidade_escolhida}Km/h`)
}
function calcularDataMoment(){
    let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)");

    let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

    let today = moment();

    let dateDiff = today - departureDate;

    let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- dias");

    if(chosenOption == "1"){

        let secondsOfDeparture = Math.round(dateDiff / 1000);
        alert("Tempo de vôo: "+secondsOfDeparture+" segundos.")

    }else if(chosenOption == "2"){

        let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
        alert("Tempo de vôo: "+minutesOfDeparture+" minutos.");

    }else if(chosenOption == "3"){

        hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
        alert("Tempo de vôo: "+hoursOfDeparture+" horas.");

    }else if(chosenOption == "4"){

        daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
        alert("Tempo de vôo: "+daysOfDeparture+" dias.");

    }else{
        alert("Opção invalida!")
    }
}
function conversor(){
    let ligthYears = window.prompt("Informe a distância em anos luz:")
    let chosenOption = window.prompt("selecione uma unidade de conversão: \n1- Parsec (ps)\n2- Unidade astronômica (AU)\n3- Quilômetros (Km)");

    let choseUnity;
    let convertedDistance;

    switch(chosenOption){
        case "1":
            convertedDistance = Math.round(ligthYears * 0.306601);
            choseUnity = "Parsec"
            break;
        case "2":
            convertedDistance = Math.round(ligthYears * 63241.1);
           choseUnity = "Unidade astronômica"
            break;
        case "3":
            convertedDistance = Math.round(ligthYears * 9.5 * Math.pow(10,12));
            choseUnity = "Quilômetros"
            break;
            default:
                choseUnity = "Unidade não identificada"
                convertedDistance = "Conversão fora do escopo"
    }
    alert("Distância em anos luz: "+ligthYears+"\n "+choseUnity+": "+convertedDistance);
}
function dobraEspacial(){
    let counter = 0;
    let name_ship = prompt("Digite o nome da nave:");
    let confirm_dob = prompt("Deseja entrar no dobra espacial: \n1- sim \n2- Não\n");

    while(confirm_dob == "1"){
        counter += 1;
        confirm_dob = prompt("Deseja realizar a proxima dobra: \n1- sim \n2- Não");
    }

    alert("Nave: "+name_ship+".\n Quantidade de dobras: "+counter+".")

}
function substituir(){
    let name_space_ship = prompt("Digite o nome da nave:");
    let replace = prompt("Qual letra deseja substituir:");
    let chosen_replace = prompt("Qual letra será a substituidora:");
    let newspaceship = "";
    for(let i = 0; i < name_space_ship.length; i++){
    
        if(replace == name_space_ship[i]){
            newspaceship += chosen_replace;
        }else {
            newspaceship += name_space_ship[i];
        }
    }
    alert("O novo nome da nave "+newspaceship);
}
function inverter(){
    let space_ship = prompt("Digite o nome da nave:");
    let newspaceship = "";
    let i = space_ship.length;
    do{    
        i = i - 1;
       if(space_ship[i] == "e"){
           break;
       }else{
        newspaceship += space_ship[i];
       }
    }while(i > 0);

    alert("Nome original da nave: "+space_ship+"\n Nome após a ocultação: "+newspaceship);
}


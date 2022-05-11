class spaceShipC{
    
    constructor(name,crew ){
        this.name = name;
        this.crewNumber = crew;
        this.doors = false;
        this.spaceHitch = false;
    }

}

let listSpaceship = new Array();

function showMenu(){
    let chosenOption;

    do{
        chosenOption = prompt("Você deseja:\n1-Cadastrar Espaçonave \n2-Engatar Espaçonave \n3-Imprimir \n4-Sair");
        switch(chosenOption){
            case "1":
                newSpaceship();
                break;
            case "2":
                engatar();
                break;
            case "3":
                print();
                break;
             case "4":
                break;
            default:
                alert("Opção inválida!")
        }
    }while(chosenOption != 4);
}

function newSpaceship(){
    let name = prompt("Nome da Espaçonave:");
    let crew = prompt("Número de Tripulantes:");
    let newObjeto = new spaceShipC(name,crew);
    listSpaceship.push(newObjeto);
}

function print(){
    let inform = "";
    listSpaceship.forEach(function(list){
        inform += "Nome: "+list.name+"\nNúmero de tripulantes: "+list.crewNumber+"\nEngatada: "+list.spaceHitch+"\nPortas abertas: "+list.doors+"\n*--------------------------*\n";
    });
    alert(inform);
}

function engatar(){
    let achou;
    let nameSpaceship = prompt("Nome da espaçonave para engatar na plataforma:");
    listSpaceship.filter(function (maior){
        if(maior.name == nameSpaceship){
            maior.doors = true;
            maior.spaceHitch = true;
            alert("Nave "+achou+" engatada com sucesso!")
        }else{
            achou = nameSpaceship;
        }
     });
     alert("Nave"+achou+" não encontrada");
}

class App {

    constructor() {
        this.spacechip = null
    }

    start() {
        this.enrollSpaceship();
        let chosen_option;
        do{
            chosen_option = this.showInitialMenu();
            this.redirectFeature(chosen_option);
        }while(chosen_option != "3");
        this.printAndExit();
    }

    enrollSpaceship() {
        let spaceship_name = prompt("Qual o nome da nave:");
        let crew_quantity = prompt("Qual a quantiade de tripulantes:");
        let spaceship_kind = this.askForSpaceshipKind();

        if (spaceship_kind == "1") {
            let weapons_quantity = prompt("Qual a quantidade de armas:");
            this.spacechip = new BattleSpaceship(spaceship_name, crew_quantity, weapons_quantity);
        } else {
            let sits_quantity = prompt("Qual a quantidade de assentos:");
            this.spacechip = new BattleSpaceship(spaceship_name, crew_quantity, sits_quantity);
        }  
    }

    askForSpaceshipKind(){
        let chosen_option;
        while(!["1", "2"].includes(chosen_option)){
            chosen_option = prompt("Qual o tipo da nave:\n 1-Batalha \n2-Transporte");
        }
        return chosen_option;
    }

    showInitialMenu() {
        const prompt_message = "O que você deseja fazer:\n"+
                                "1- Acelerar a Nave\n"+
                                "2- Trocar a Nave\n"+
                                "3-Imprimir e Sair"

        let chosen_option = prompt(prompt_message);

        while(!["1", "2","3"].includes(chosen_option)){
            chosen_option = prompt(prompt_message);
        }
        return chosen_option;
    }

    redirectFeature(chosen_option){
        switch(chosen_option){
            case "1":
                this.accelerationSpaceship();
                break;
            case "2":
                this.enrollSpaceship();
                break;
        }
    }

    accelerationSpaceship() {
        let acceleration = Number(prompt("Quanto gostaria de acelerar:"));
        this.spacechip.speedUp(acceleration);
    }

    printAndExit(){
        let final_message =  "Nome: "+this.spacechip.name+"\n Quantidade de Tripulantes: "+
         this.spacechip.crewquantity+"\n Velociade Atual: "+
         this.spacechip.velocity;
         alert(final_message);;
    }
}

function iniciar(){
    let nave = new App();
    nave.start();
}
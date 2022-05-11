class Spaceship {

    static get decelerationRate(){
        return 0.17;
    }

    constructor(name, crewquantity) {
        this.name = name;
        this.velocity = 0;
        this.crewquantity = crewquantity;
    }

    speedUp(acceleration){
        this.velocity += acceleration * (1 - Spaceship.decelerationRate);
    }
   
}

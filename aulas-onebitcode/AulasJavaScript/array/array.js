const hitchedSpaceships = [
    ["Fenix", 8, true], 
    ["Golias", 10, true], 
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

function infoShips(){
    const crewGreaterthan9 = hitchedSpaceships.filter(numeroTripulantes).map(spaceship =>{return spaceship[0]});
    const highlightedSpaceship = hitchedSpaceships.map(maiuscula);
    const ongoingHitchPlatform = 1+(hitchedSpaceships.findIndex(navesSemEngate));

    let message = "Espaçonaves com mais de 9 tripulantes: "+crewGreaterthan9.join(", ");
    message += "\nPlataforma com processo de engate: " + ongoingHitchPlatform;
    message += "\n Espaçonaves destacadas: " + highlightedSpaceship.join(", ");

    alert(message)
}
function numeroTripulantes(maior){
   return maior[1] > 9;
}
function maiuscula(current){
    return  current[0].toUpperCase(); 
}
function navesSemEngate(naoEngatadas){
    return (naoEngatadas[2] == false);
}
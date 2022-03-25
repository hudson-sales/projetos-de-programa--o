function desacelerar(velocity, print) {
    print(velocity);
    return velocity - 25;
}

function iniciar() {
    let velocity = 150;
    do {
        velocity = desacelerar(velocity, function(velocity) { alert("Aceleração da nave é: " + velocity) });
    } while (velocity >= 0);
    alert("A nave esta parada, as comportas pode ser abertas.")
}
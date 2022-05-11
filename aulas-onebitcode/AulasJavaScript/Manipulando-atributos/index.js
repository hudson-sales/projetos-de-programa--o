function verifyenablement() {
    let selectValue = document.querySelector("select").value;
    if(selectValue == "disabled") {
        document.querySelector("input[name='some-text']").disabled = true;
        let pElement = document.getElementById("message");
        pElement.innerText = "DESABILITADO";
        pElement.style.color = "white";
        pElement.style.backgroundColor = "red";
        pElement.style.width = "300px";
    }else if(selectValue == "enabled"){
        document.querySelector("input[name='some-text']").disabled = false;
        let pElement = document.getElementById("message");
        pElement.innerText = "";
        pElement.style.color = "transparent";
        pElement.style.backgroundColor = "black";
        pElement.style.width = "300px";
    }
}
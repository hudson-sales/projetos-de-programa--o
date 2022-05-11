class App {
    addProperty() {
        event.preventDefault();
        let kind = document.querySelector("select[name='kind']").value;
        let area = document.querySelector("input[name='area']").value;
        let retend = document.querySelector("input[name='retend']").checked;

        let property = new Property(kind, area, retend);

        this.addOnPropertiesList(property);
        this.cleanForm();
    }

    addOnPropertiesList(property) {
        let listElement = document.createElement("li");
        listElement.style.margin = "10px"
        let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"

        if (property.retend) {
            let rentedMark = this.createRentedMark();
            listElement.appendChild(rentedMark);
        }else{
            let rentedMark = this.createRentedVago();
            listElement.appendChild(rentedMark);
        }

        listElement.innerHTML += propertyInfo;

        let buttonToRemove = this.createRemoveButton();
        listElement.appendChild(buttonToRemove);
        document.getElementById("properties").appendChild(listElement);
    }

    createRentedMark(){
        let rentedMark = document.createElement("span");
        rentedMark.style.margin = "5px";
        rentedMark.style.padding = "5px";
        rentedMark.style.color = "white";
        rentedMark.style.width = "50px"
        rentedMark.style.backgroundColor = "red";
        rentedMark.innerText = "Alugado";
        return rentedMark;
    }

    createRentedVago(){
        let rentedMark = document.createElement("span");
        rentedMark.style.width = "50px";
        rentedMark.style.margin = "5px";
        rentedMark.style.padding = "5px";
        rentedMark.style.color = "white";
        rentedMark.style.backgroundColor = "green";
        rentedMark.innerText = "Vago";
        return rentedMark;
    }

    createRemoveButton(){
        let buttonToRemove = document.createElement("button");
        buttonToRemove.innerText = "Remover";
        buttonToRemove.setAttribute("onclick","app.remove()");
        buttonToRemove.style.margin = "10px"
        return buttonToRemove;
    }

    cleanForm(){
        document.querySelector("input[name='area']").value = " ";
        document.querySelector("input[name='retend']").checked = false;
    }

    remove() {
        let liToRemove = event.target.parentNode;
        document.getElementById("properties").removeChild(liToRemove);
    }

}





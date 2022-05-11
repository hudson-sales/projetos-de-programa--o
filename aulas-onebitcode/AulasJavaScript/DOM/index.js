function addNewPhone() {
    const phone_form = document.querySelector("form#phones");
    const new_Phone = phone_form.children[0].cloneNode(true);
    const phone_position = phone_form.children.length +1;
    new_Phone.querySelector("label").innerText = "Telefone" + phone_position +": ";
    phone_form.appendChild(new_Phone);
    console.log(phone_form.children);
}

function printPhones() {
    let message = "";
    const phones = document.querySelectorAll("input[name ='phone']");
    phones.forEach((phone) => {
        message += "Telefone "+ (index + 1) +": "+ phone.value +"\n"
    });
    alert(message);
}
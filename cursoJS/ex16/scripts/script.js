function contar() {
    var txtini = document.querySelector('#txtini').value;
    var txtfim = document.querySelector('#txtfim').value;
    var txtpass = document.querySelector('#txtpass').value;
    var res = document.querySelector('#res');

    if (txtini == '' || txtfim == 0 || txtpass == "") {

        alert('Preencha todos os campos')

    } else if(Number(txtpass == 0)) {

        alert('O campo passo = 0, será contado de um em um')
        res.innerHTML = 'Contando: '

        for (var c = Number(txtini); c <= Number(txtfim); c +=1) {
            res.innerHTML += `\u{1f449} ${c} `
        }
        res.innerHTML += ' \u{1f4cd}'

    }else {
        res.innerHTML = 'Contando: '
        for (var c = Number(txtini); c <= Number(txtfim); c +=Number(txtpass)) {
            res.innerHTML += `\u{1f449} ${c} `
        }
        res.innerHTML += ' \u{1f4cd}'
    }
}
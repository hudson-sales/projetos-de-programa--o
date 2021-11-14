let num = document.querySelector('#txtn');
let lista = document.querySelector('#seltab');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n.value)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option');
        item.text = `O número ${num.value} foi adicionado na lista`;
        lista.appendChild(item);
        res.innerHTML = ' ';
    } else {
        alert('Valor invalido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length;
        var max = Math.max.apply(Math, valores);
        var min = Math.min.apply(Math, valores);
        var soma = 0;
        var media = 0;

        

        let menor = valores[0];
        let maior = valores[0];
        for(let pos in valores){

            soma += valores[pos];

            if(valores[pos] > maior){
                maior = valores[pos];
            }else if(valores[pos] < menor){
                menor = valores[pos];
            }
        }
        media = Number(soma) / Number(tot);
        res.innerHTML = ' ';
        res.innerHTML += `<p>O maior número é: ${maior}.</p>`;
        res.innerHTML += `<p>O menor número é: ${min}.</p>`;
        res.innerHTML += `<p>A soma dos números é: ${soma}.</p>`;
        res.innerHTML += `<p>A média dos números é: ${media}.</p>`;

    }
}
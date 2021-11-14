function tabuada(){
    let num = document.querySelector('#txtn');
    let tab = document.querySelector('#seltab');
    if(num.value == 0){
        alert('Por favor digite um numero');
    }else{
        let n = Number(num.value);
        let c = 1;
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} X ${c} = ${c*n}`;
            tab.appendChild(item);
            c++;
        }
    }
}
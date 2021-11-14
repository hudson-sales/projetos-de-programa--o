function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#txtano').value;
    var res = document.querySelector('div#res');
   

    if (fano == 0 || fano > ano) {
        alert('Verifique os dados digitados');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano);   
        var genero =  "";

        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            genero = 'Homen';

            if(idade > 0 && idade <= 12){
                img.setAttribute('src','fotos/crianca-m.jpg');
            }else if(idade > 12 && idade < 18 ){
                img.setAttribute('src','fotos/jovemM.jpg');
            }else if(idade >= 18 && idade <= 65){
                img.setAttribute('src','fotos/homen.jpg');
            }else{
                img.setAttribute('src','fotos/idoso.jpg');
            }

        }else if(fsex[1].checked){
            genero = 'Mulher';

            if(idade > 0 && idade <= 12){
                img.setAttribute('src','fotos/criancaF.jpg');
            }else if(idade > 12 && idade < 18 ){    
                img.setAttribute('src','fotos/jovemF.jpg');
            }else if(idade >= 18 && idade <= 65){
                img.setAttribute('src','fotos/mulher.jpg');
            }else{
                img.setAttribute('src','fotos/idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `È uma ${genero} com idade ${idade}`;
        res.appendChild(img);
    
    }
}
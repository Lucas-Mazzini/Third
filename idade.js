function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const seano = document.querySelector('#Ano'); 
    const result = document.querySelector('#resultado');

    if (seano.value.length == 0 || Number(seano.value) > ano) {
        window.alert('[ERRO] Tente novamente inserindo os dados corretos');
    }
    else {
        var fsex = document.getElementsByName('rads');
        var idade = ano - Number(seano.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
        if (idade >= 0 && idade < 10) {
           img.setAttribute('src', 'MenKid.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'AdultoHomem.png')
        } else {
            img.setAttribute('src', 'Homemvelho.png')
            
        }
    }
        else if (fsex[1].checked) {
            genero = 'mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'Woman1.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'mulherjovem.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'Adulta.png')
        } else {
            img.setAttribute('src', 'MulherVelha.png')
            
        }
    }
        result.style.textAlign = 'center'
        result.style.color = '#fff'
        result.innerHTML = `Detectamos ${genero} com ${idade} anos`
        result.appendChild(img)
    }
}   

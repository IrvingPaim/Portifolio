function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados digitados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if(idade >= 0 && idade < 10) {
                genero = 'Um Menino'
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                genero = 'Um Jovem'
                img.setAttribute('src', 'jovem-mas.png')
            } else if (idade < 65) {
                genero = 'Um Homem'
                img.setAttribute('src', 'adulto.png')
            } else if (idade < 150) {
                genero = 'Um Idoso'
                img.setAttribute('src', 'idoso.png')
            } else {
                genero = 'Um Dinossauro Pré-Histórico'
                img.setAttribute('src', 'ac-man.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'Uma Menina'
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                genero = 'Uma Jovem'
                img.setAttribute('src', 'jovem-fem.png')
            } else if (idade < 65) {
                genero = 'Uma Mulher'
                img.setAttribute('src', 'adulta.png')
            } else if (idade < 150) {
                genero = 'Uma Idosa'
                img.setAttribute('src', 'idosa.png')
            } else {
                genero = 'Uma Dinossaura Pré-Histórica'
                img.setAttribute('src', 'ac-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
    }
    }
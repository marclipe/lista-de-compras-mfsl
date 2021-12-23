function verificar() {
    var res = document.getElementById('resposta')

    var ftipo = document.getElementsByName('radfood')
    var tipo = ''
    var image = document.createElement('img')
    image.setAttribute('id', 'foto')
    if(ftipo[0].checked) {
        tipo = 'Alimentos'
        image.setAttribute('src', 'imagens/alimentos.png')
    } else if (ftipo[1].checked) {
        tipo = 'Padaria e Outros'
        image.setAttribute('src', 'imagens/padaria.png')
    } else if (ftipo[2].checked) {
        tipo = 'Frutas, Legumes, Verduras'
        image.setAttribute('src', 'imagens/frutas.png')
    } else if (ftipo[3].checked) {
        tipo = 'Carnes'
        image.setAttribute('src', 'imagens/carnes.png')
    } else if (ftipo[4].checked) {
        tipo = 'Bebidas'
        image.setAttribute('src', 'imagens/bebidas.png')
    } else if (ftipo[5].checked) {
        tipo = 'Frios e Lacticínios'
        image.setAttribute('src', 'imagens/frios.png')
    } else if (ftipo[6].checked) {
        tipo = 'Higiene e Limpeza'
        image.setAttribute('src', 'imagens/limpeza.png')
    }

    res.innerHTML = `O tipo do produto é do setor <strong>${tipo}</strong>` 
    res.style.textAlign = 'center'
    res.style.background = '#012340'
    res.appendChild(image)
}
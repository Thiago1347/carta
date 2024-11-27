/**
 * Sorteio de uma carta 
 * Exemplo de uso de um vetor
 * @author Thiago Nascimento
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    //sorteio do indice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let facesSorteado = faces[Math.floor(Math.random() * 13)]
 
    //console.log(`${facesSorteado} de ${nipeSorteado}`)
 
    //renderizar o canto superior esquerda da carta
    // a linha abaixo adiciona a div identificada como 'supEsq' a face de um nipe sorteada a tambem a <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${facesSorteado}</div><div>${nipeSorteado}</div>`
 
    //renderizar o centro da carta
    let cc = document.getElementById('centroCarta')
    cc.innerHTML = `${nipeSorteado}`
 
    document.getElementById('infDir').innerHTML = `<div>${facesSorteado}</div><div>${nipeSorteado}</div>`
 
}
 

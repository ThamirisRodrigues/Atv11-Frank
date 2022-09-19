function calcular() {
let saida = document.getElementById('saida')
let peso = Number(document.getElementById('peso').value)
let altura = Number(document.getElementById('altura').value)

let soma = peso / (altura * altura)

if (soma <= 18.5) {
    saida.innerHTML += `<p>Seu texte deu ${soma}. Abaixo do peso`
}
else if (soma >= 18.6 && soma <= 24.9) {
    saida.innerHTML += `<p>Seu texte deu ${soma}. Peso ideal (Parabéns)`
}
else if (soma >= 25 && soma <= 29.9) {
    saida.innerHTML += `<p>Seu texte deu ${soma}. Leve mente acima do peso`
}
else if (soma >= 30 && soma <= 34.9) {
    saida.innerHTML += `<p>Seu texte deu ${soma}. Obesidade grau 1`
}
else if (soma >= 35 && soma <= 39.9) {
    saida.innerHTML += `<p>Seu texto deu ${soma}. Obesidade grau 2(severa)`
}
else{
    saida.innerHTML += `<p>Seu texto deu ${soma}. Obesidade 3(mórbida)`
    } 
}
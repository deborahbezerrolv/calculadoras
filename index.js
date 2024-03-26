
function calcularPotencia(base, expoente) {
    return Math.pow(base, expoente);
}


function calcularAreaQuadrado(lado) {
    return lado * lado;
}


function calcularAreaRetangulo(base, altura) {
    return base * altura;
}


function verificarPar(numero) {
    return numero % 2 === 0;
}

console.log("Potência de 2 elevado a 3:", calcularPotencia(2, 3));
console.log("Área do quadrado com lado 5:", calcularAreaQuadrado(5));
console.log("Área do retângulo com base 4 e altura 6:", calcularAreaRetangulo(4, 6));
console.log("É o número 10 par?", verificarPar(10));
console.log("É o número 7 par?", verificarPar(7));

function falar() {
  console.log("Hello World!!");
}
function returnEventValues(inicio, fim) {
  if (fim > inicio) {
    let numerosPares = [];
    let numerosImpares = [];
    for (let i = inicio; i <= fim; i++) {
      i % 2 == 0 ? numerosPares.push(i) : numerosImpares.push(i);
    }
    console.log(`A lista de numeros ímpares :[ ${numerosImpares}]`);
    console.log(`A lista de numeros pares : [ ${numerosPares}]`);
  } else {
    console.log("O valor do final é igual ou menor que o valor de início!");
  }
}
// falar();
returnEventValues(20,20);

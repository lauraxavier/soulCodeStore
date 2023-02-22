let nomeDoProduto ="Camiseta Js"
let precoDoProduto = 1700
let descontoDoProduto = 50
let descontoValido = false
let precoFinal

if (descontoValido) {
    precoFinal = precoDoProduto - descontoDoProduto 
    console.log(`Você recebeu um desconto no valor de R$${descontoDoProduto},00 e o preço final do produto agora é de R$${precoFinal},00`);
} else{
    precoFinal = precoDoProduto
    console.log(`Esse produto não teve desconto. O preço a pagar é de ${precoFinal},00`);
}

if (precoFinal >= 1000) {
    precoFinal = precoFinal - 50
    console.log(`Você recebeu um desconto! O preço final do produto agora é de R$${precoFinal},00`);
}else{
    console.log(`O valor da sua compra é de  R$${precoFinal},00`);
}


const demandas = [10, 2, 1, 30, 5]
let precoPorCliente = [];
let totalCliente = [];
let lucro = 0;

for (let i = 0; i < demandas.length; i++) {
  let preco = precoDoProduto * demandas[i];
  precoPorCliente.push(preco);
  console.log(`O cliente ${i+1} deverá pagar : R$ ${preco},00`);
}

for (let i = 0; i < precoPorCliente.length; i++){
    lucro += precoPorCliente[i]
}

console.log(`A loja obteve o lucro final de R$ ${lucro},00`);
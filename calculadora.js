const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor da conta: ', (entradaConta) => {
  const valorConta = parseFloat(entradaConta);

  rl.question('Digite o percentual da gorjeta: ', (entradaGorjeta) => {
    const percentualGorjeta = parseFloat(entradaGorjeta);

    const valorGorjeta = valorConta * (percentualGorjeta / 100);
    const valorTotal = valorConta + valorGorjeta;

    console.log(`Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${valorTotal.toFixed(2)}`);
    
    rl.close();
  });
})
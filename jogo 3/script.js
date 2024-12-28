let numeroSecreto;

function getNumeroSecreto(value) {
  numeroSecreto = Math.floor(Math.random() * 4) + 1;
  numeroSecreto === value ? getNumeroSecreto(value) : undefined;
  return numeroSecreto;
}

function botao(valor) {
  const res = document.getElementById("res");
  if (parseInt(valor) === numeroSecreto) {
    res.textContent = "Parabéns! Você acertou!";
    numeroSecreto = getNumeroSecreto(numeroSecreto);
  } else {
    res.textContent = "Tente novamente!";
  }
}

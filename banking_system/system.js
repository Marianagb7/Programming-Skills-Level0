const inputRetirar = document.getElementById("inputRetirar");
const buttonRetirar = document.getElementById("buttonRetirar");
const valueBalance = document.getElementById("valueBalance");
const valueWithdrew = document.getElementById("valueWithdrew");

const inputTransferir = document.getElementById("inputTransferir");
const buttonTransferir = document.getElementById("buttonTransferir");
const valueTransfer = document.getElementById("valueTransfer"); 

const valueDeposit = document.getElementById("valueDeposit");
const inputDepositar = document.getElementById("inputDepositar");
const buttonDepositar = document.getElementById("buttonDepositar");

const msgCaixa = document.getElementById("msg");
 
buttonRetirar.addEventListener("click", () => {
  const value = inputRetirar.value;
  if (Number(value) === 0) {
    msgCaixa.innerHTML = "Valor inválido";
  } else if (Number(value) > Number(valueBalance.innerText)) {
    msgCaixa.innerHTML = "Saldo insuficiente 😧";
  } else {
    const balanceValue = Number(valueBalance.innerText) - Number(value);
    const withdrewValue = Number(valueWithdrew.innerText) + Number(value);
    valueWithdrew.innerText = withdrewValue;
    valueBalance.innerText = balanceValue;
    inputRetirar.value = "";
    msgCaixa.innerHTML = "";
  }
});

buttonDepositar.addEventListener("click", () => {
  const value = inputDepositar.value;
  const depositoValue = Number(valueDeposit.innerText) + Number(value);
  const saldoValue = Number(valueBalance.innerText) + Number(value);
  valueDeposit.innerText = depositoValue;
  valueBalance.innerText = saldoValue;
  inputDepositar.value = "";
  msgCaixa.innerHTML = "";
});

buttonTransferir.addEventListener("click", () => {
    const value = inputTransferir.value;
    if (Number(value) === 0) {
      msgCaixa.innerHTML = "Valor inválido";
    } else if (Number(value) > Number(valueBalance.innerText)) {
      msgCaixa.innerHTML = "Recursos insuficientes 😟";
    } else {
      const totalValue = Number(valueBalance.innerText) - Number(value);
      const transferValue = Number(valueTransfer.innerText) + Number(value);
      valueTransfer.innerText = transferValue;
      valueBalance.innerText = totalValue;
      inputTransferir.value = "";
      msgCaixa.innerHTML = "";
    }
  });

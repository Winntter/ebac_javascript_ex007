function validar() {
  const msg = document.getElementById("msg");

  const campoA = parseFloat(document.getElementById("campoA").value);
  const campoB = parseFloat(document.getElementById("campoB").value);

  if (campoB > campoA) {
    msg.textContent = "Formulário válido! Número B é maior que número A.";
    msg.style.color = "green";
    } else {
    msg.textContent ="Formulário inválido! Número B deve ser maior que número A.";
    msg.style.color = "red";
  }
}


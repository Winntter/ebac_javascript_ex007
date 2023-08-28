document.addEventListener("DOMContentLoaded", function() {
    var submeterBtn = document.getElementById("submeterBtn");
    var mensagem = document.getElementById("mensagem");
  
    submeterBtn.addEventListener("click", function() {
        var campoA = parseFloat(document.getElementById("campoA").value);
        var campoB = parseFloat(document.getElementById("campoB").value);
  
        if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! Número B é maior que número A.";
        mensagem.style.color = "green";
        } else {
        mensagem.textContent = "Formulário inválido! Número B deve ser maior que número A.";
        mensagem.style.color = "red";
        }
    });
  });
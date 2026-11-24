// Interação 1: alternar tema claro/escuro
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
  const escuro = document.body.classList.toggle("escuro");
  btnTema.textContent = escuro ? "Tema claro" : "Tema escuro";
  btnTema.setAttribute("aria-pressed", String(escuro));
});

// Interação 2: mensagem de confirmação no formulário de contato
const form = document.getElementById("form-contato");
const retorno = document.getElementById("retorno");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const campos = form.querySelectorAll("input, textarea");
  let tudoPreenchido = true;

  campos.forEach(function (campo) {
    const vazio = campo.value.trim() === "";
    campo.classList.toggle("invalido", vazio);
    if (vazio) tudoPreenchido = false;
  });

  retorno.classList.remove("ok", "erro");

  if (!tudoPreenchido) {
    retorno.textContent = "Preencha nome, e-mail e mensagem para enviar.";
    retorno.classList.add("erro");
    return;
  }

  const nome = document.getElementById("nome").value.trim();
  retorno.textContent = "Obrigado, " + nome + "! Sua mensagem foi registrada.";
  retorno.classList.add("ok");
  form.reset();
});

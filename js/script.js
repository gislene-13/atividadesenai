
//efeito do botão voltar ao Topo

function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

//Validação de Login

function login() {
  var logado = false; 
  var usuario = document.getElementsByName('usuario')[0].value; 
  var senha = document.getElementById('senha').value;

  if (usuario === "admin" && senha === "123456") {
    window.location.href = "index.html";
    logado = true;
  }

  if (!logado) { 
    alert("Acesso Negado. Dados incorretos");
  }
}

//Ativar alert no botão cadastrar

function cadastro() {
  alert("Cadastrado com sucesso!");
  window.location.href = "index.html"; 
}

//efeito de esconder formulário de cadastro
$(function() {

  $("#botao-cadastrar").on("click", function() {
    
  $("#form-cadastrar").slideToggle("slow");
  $("#section-login").slideToggle("slow");
  $("#botao-cadastrar").hide();
  });
  });

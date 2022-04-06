function confimarCadastro(){
  let nomecompleto = document.getElementById('Fname')
  let nomeusuario = document.getElementById('Uname')
  let senha = document.getElementById('pass')

  if ( (nomecompleto.value.length == 0) || (nomeusuario.value.length == 0) || (senha.value.length == 0)  ){
    alert("[ERROR] Preencha todas os campos!")
  } else {
    alert("Cadastro Concluido com Sucesso!")
  }
}
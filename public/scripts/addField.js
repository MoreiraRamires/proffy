// Procurar o botao
document.querySelector("#add-time")
  // Quando Clicar no botao - click
  //  Executar acao - cloneField
  .addEventListener("click", cloneField)


function cloneField() {
  // Duplicar os campos { quais ?}
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

  //limpar os campos. 
  const fields = newFieldContainer.querySelectorAll("input")

  // limpar cada um dos campos
  fields.forEach(function (field) {
    field.value = ""

  })

  // Colocar na pagina: onde?
  document.querySelector(".schedule-item").appendChild(newFieldContainer)
}

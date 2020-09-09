//procurar o botao
document.querySelector("#add-time")

//quando clicar no botao
.addEventListener("click" , cloneField)
//Executar uma acao
function cloneField() {


    //Duplicar os campos. Que campos
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)//boolean: true or false
    var x  = "Horário inválido"

    //pegar os campos. que campos??
    const fields = newFieldsContainer.querySelectorAll("input")

    //colocar na pagina. onde?
    if(fields[1].value >= fields[0].value ){
        document.querySelector("#schedule-items").appendChild(newFieldsContainer)
    };

    if(fields[0].value >= fields[1].value || fields[0].value == fields[1].value || fields[1].value - fields[0].value > 8  ){
            alert("Campo Horário inválido!");
            return false;
            
    };

    //para cada campo limpar

     fields.forEach(function(field) {
        field.value = ""
    });
}
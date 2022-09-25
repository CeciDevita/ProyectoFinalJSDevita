const formulario = document.getElementById("formulario");

escuchadorEventos();

//escuchador de eventos
function cargaFinalizada (){

}
function escuchadorEventos(){
 document.addEventListener("DOMContentLoaded", cargaFinalizada);
 nombre.addEventListener("blur",validarInformacion);
 email.addEventListener("blur",validarInformacion);
 asunto.addEventListener("blur",validarInformacion);
 mensaje.addEventListener("blur",validarInformacion);

 //boton enviar

 formulario.addEventListener("submit", enviarFormulario);
}

//Guardado y Obtención de Datos
function convertFormularioDataToTransactionObj (formularioData){
    let transactionNombre = formularioData.get("nombre");
    let transactionEmail = formularioData.get("email");
    let transactionAsunto = formularioData.get("asunto");
    let transactionMensaje = formularioData.get("mensaje");
    return{
        "nombre": transactionNombre,
        "email": transactionEmail,
        "asunto": transactionAsunto,
        "mensaje": transactionMensaje
    }
}
//localStorage
function saveTransactionObj (transactionObj){
    let transactionObjJSON = JSON.stringify(transactionObj);
    localStorage.setItem("transactionData", transactionObjJSON);
}

    formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let formularioData = new FormData(formulario);
    let transactionObj = convertFormularioDataToTransactionObj (formularioData);
    saveTransactionObj (transactionObj);
})
    document.addEventListener("DOMcontentLoaded", function(event){
        let transactionObjArray = JSON.parse(localStorage.getItem("transactionData"));
        transactionObjArray.forEach(
            function (arrayElement){
                console.log(arrayElement);
            }
        )
    }
    )
    //fin localStorage
//Fin Guardado y Obtención de Datos

function mostrarError(){
    alert("Los campos están incompletos!")

}
function validarInformacion(elemento){
    if(elemento.target.value.length > 0){ 
        elemento.target.classList.remove("error-mostrar");
        elemento.target.classList.add("correcto");
    }
    else{
        elemento.target.classList.remove("correcto");
        elemento.target.classList.add("error-mostrar"); 
        mostrarError();
    }

}

//Mostrar formulario enviado
function enviarFormulario(elemento){
    elemento.preventDefault()
 Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Info enviada! Te respondemos por mail <3',
    showConfirmButton: false,
    timer: 1500
  })
}











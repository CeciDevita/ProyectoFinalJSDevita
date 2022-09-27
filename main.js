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
    formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let formularioData = new FormData(formulario);
    let transactionObj = convertFormularioDataToTransactionObj (formularioData);
    saveTransactionObj (transactionObj);
})

    function saveTransactionObj (transactionObj){
    let datosArray = JSON.parse(localStorage.getItem("transactionData")) || [];
    datosArray.push(transactionObj);
    let datosArrayJSON = JSON.stringify(datosArray); 
    localStorage.setItem("transactionData", datosArrayJSON);

//Implementación de guardado con fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    body: JSON.stringify(transactionObj),
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

}
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

//relleno y errores de los imputs
function mostrarError(elemento){
    elemento.preventDefault()
    Swal.fire({
        icon: 'error',
        title: 'Completa este campo!'
      })
}
function validarInformacion(elemento){
     if(elemento.target.value.length > 0){ 
        elemento.target.classList.remove("error-rojo");
        elemento.target.classList.add("correcto-verde");
    }
    else{
        elemento.target.classList.remove("correcto-verde");
        elemento.target.classList.add("error-rojo"); 
        mostrarError(elemento);
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











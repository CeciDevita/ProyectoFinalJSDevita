//variables
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const msj = document.querySelector("#msj");
const btnEnviar = document.querySelector("#btnEnviar");

escuchadorEventos();

//escuchador de eventos

function escuchadorEventos(){
 document.addEventListener("DOMContentLoaded", cargaFinalizada);

 nombre.addEventListener("blur",validarInformacion);
 email.addEventListener("blur",validarInformacion);
 asunto.addEventListener("blur",validarInformacion);
 msj.addEventListener("blur",validarInformacion);

 //boton enviar

 formulario.addEventListener("submit", enviarFormulario);
}

//Carga de información 

function cargaFinalizada(){
}
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

//Envio de formulario
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











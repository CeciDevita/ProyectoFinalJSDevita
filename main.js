//variables

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const msj = document.querySelector("#msj");

//boton

const btnEnviar = document.querySelector("#boton");

escuchadorEventos();

//escuchador de eventos

function escuchadorEventos(){
 document.addEventListener("DOMContentLoaded", cargaFinalizada);

 nombre.addEventListener("blur",validarInformacion);
 email.addEventListener("blur",validarInformacion);
 asunto.addEventListener("blur",validarInformacion);
 msj.addEventListener("blur",validarInformacion);
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



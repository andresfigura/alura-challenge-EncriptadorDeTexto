let btnEncode = document.querySelector('#btnEncode');
let userInput = document.querySelector("#textoInput");
let output    = document.querySelector("#textoDecode");
let ctlEncode = true;

/*INICIO Funciones que permiten activar y desactivar la codificacion/decodificacion del texto */
function activarEncode() {
    ctlEncode = true;  
    userInput.value = "";
    userInput.focus();
    //borra el mensaje de "texto copiado"
    const mensaje = document.getElementById("mensajeAlerta");
        mensaje.innerText = "";
    return ctlEncode;
}
function activarDecode() {
    ctlEncode = false;
    userInput.value = "";
    userInput.focus();
    //borra el mensaje de "texto copiado"
    const mensaje = document.getElementById("mensajeAlerta");
        mensaje.innerText = "";
    return ctlEncode;
}
userInput.addEventListener("input", (event) => {
    const textoOriginal = event.target.value;
    const imagenValue = document.getElementById("textoDecode")  
    if (ctlEncode){
        const textoEncriptado = encriptar(textoOriginal);
        output.value = textoEncriptado; // Actualiza el otro input con el resultado
                                    //console.log(ctlEncode)
                                    //console.log("encriptando")   
    } else {
        const textoDesencriptado = desencriptar(textoOriginal);
        output.value = textoDesencriptado
                            //console.log(ctlEncode)
                            //console.log("desencriptando")
    }
    if(output.value != ""){
        imagenValue.style.backgroundImage = "none"
    }else{
        output.removeAttribute("style")
    }
})
/*FIN Funciones que permiten activar y desactivar la codificacion/decodificacion del texto */

/*INICIO scrpit para poner un boton activo*/
// Selecciona todos los botones con la clase 'btn'
const buttons = document.querySelectorAll(".btn");
// Añade un event listener a cada botón
buttons.forEach(button => {
    button.addEventListener("click", function(){
        // Primero, elimina la clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove("active"));
        // Luego, añade la clase 'active' al botón que fue clicado
        this.classList.add("active");
    })
})
/*FIN script para poner un boton activo*/






/**
 * Codifica un texto utilizando un algoritmo específico.
 * @param {string} message - El texto a codificar.
 * @returns {string} - El texto codificado.
*/
function encriptar(message){
    let resultado = message.toLowerCase().replace(/[aeiou]/gi, (match) =>{
        switch(match){
            case 'a' : return 'ai';
            case 'e' : return 'enter';
            case 'i' : return 'imes';
            case 'o' : return 'ober';
            case 'u' : return 'ufat'
        }
    })
    return resultado;
}


    /**
     * funcion para desencriptar el codigo
     * @param {message} message el texto a desencriptar 
     * @returns {string} / el texto decodificado
 */

function desencriptar(message){
    let resultado = message.toLowerCase().replace(/ai|enter|imes|ober|ufat/gi, (match) =>{
        switch(match){
            case 'ai'    : return 'a';
            case 'enter' : return 'e';
            case 'imes'  : return 'i';
            case 'ober'  : return 'o';
            case 'ufat'  : return 'u'
        }
    })
    return resultado;
}

/*INICIO Script para copiar el texto de resultado en el clpboard*/

function copiarTexto(){
    const texto = output.value
    navigator.clipboard.writeText(texto).then(() => {
        console.log("texto copiado")
        const mensaje = document.getElementById("mensajeAlerta");
        mensaje.innerText = "Texto copiado en el portapapeles";
    }).catch(err => {
        console.error("Error al copiar texto", err);
    })
    }



/*FIN Script para copiar el texto de resultado en el clpboard*/

        

/* Este es el evento que permite que el texto que se ingrea en el textarea 1 se copie en el text area 2, en este caso se copiaria desencriptandolo gracias al llamado de la funcion desencriptar(textoOriginal)
        // userInput.addEventListener("input", (event)=>{
        //     const textoOriginal = event.target.value;
        //     const textoDesencriptado = desencriptar(textoOriginal);
        //     output.value = textoDesencriptado
        //                             console.log(ctlEncode)
        //                             console.log("desencriptando")
        // })
*/

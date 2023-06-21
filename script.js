const textArea = document.querySelector(".area-de-texto");
const mensaje = document.querySelector(".mensaje");

// almacenar las llaves de ingformación en arreglos 

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase() /* Por la regla de que todo debe ser en minúsculas */

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase() /* Por la regla de que todo debe ser en minúsculas */

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

/* function copiarTexto() {
    var copyText = document.getElementById("inputMensaje");
    // copyText.select(); esto subraya el texto de azul
    navigator.clipboard.writeText(copyText.value); 
  }
 */
  

    function copiarTexto() {
        navigator.clipboard.writeText(document.getElementById("inputMensaje").value); 
      }
    
      var input = document.querySelector(".area-de-texto");
      input.focus();
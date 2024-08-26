const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const info = document.querySelector(".informacion");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";   
}
function encriptar(stringencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringencriptada = stringencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringencriptada.includes(matrizCodigo[i][0])){
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        info.textContent = "Texto encriptado"
    }
    return stringencriptada  
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(texArea.value)
    mensaje.value = textoEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        info.textContent = "Texto desencriptado";
    }
    return stringDesencriptada;
}   
function btnCopiar(){
    let copiar = mensaje
    copiar.select();
    document.execCommand("copy");
    info.textContent = "Texto copiado";       

}


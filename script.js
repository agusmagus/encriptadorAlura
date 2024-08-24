function validarCadena(cadena) {
    const regex = /^[a-z\s!]*$/;
    return regex.test(cadena);
}

function encriptaCadena() {
    let cadena = document.getElementById("inputText").value;
    if (cadena.trim() === "") {
        alert("El campo de texto no puede estar vacío.");
        return;
    }
    if (!validarCadena(cadena) ) {
        alert("Por favor, usa letras minúsculas sin acentos.");
        document.getElementById("inputText").value = "";
        return;
    }
    let encriptado = cadena.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encriptado;
    document.getElementById("copyButton").style.display = "block";
}

function desencriptaCadena() {
    let cadena = document.getElementById("inputText").value;
    if (!validarCadena(cadena)) {
        alert("Por favor, introduce solo letras minúsculas, signos de exclamación y sin acentos ni caracteres especiales.");
        document.getElementById("inputText").value = "";
        return;
    }
    let desencriptado = cadena.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = desencriptado;
}

function copiarCadena() {
    let salida = document.getElementById("outputText");
    salida.select();
    document.execCommand("copy");   
}
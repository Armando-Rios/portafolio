var cifrar = document.getElementById("primary")
var descifrar = document.getElementById("secondary")
var copiar = document.getElementById("copy")
var entrada = document.getElementById("entrada")
var salida = document.getElementById("salida")

cifrar.addEventListener("click", function() {
    let texto = entrada.value;
    var textoCifrado = "";
    function cifrado(texto){
        textoCifrado = ""
        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoCifrado = textoCifrado + "ai"
            }
            else if(texto[i] == "e"){
                textoCifrado = textoCifrado + "enter"
            }
            else if(texto[i] == "i"){
                textoCifrado = textoCifrado + "imes"
            }
            else if(texto[i] == "o"){
                textoCifrado = textoCifrado + "ober"
            }
            
            else if(texto[i] == "u"){
                textoCifrado = textoCifrado + "ufat"
            }
            else{
                textoCifrado = textoCifrado + texto[i];
            } 
        }
        return textoCifrado;
    }
    cifrado(texto)
    salida.value = textoCifrado
    console.log("texto cifrado :D " + textoCifrado)
})


descifrar.addEventListener("click", function() {
    let texto = salida.value;
    var textoDecifrado = "";
    function descifrado(texto){
        textoDecifrado = "";
        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoDecifrado = textoDecifrado + "a"
                i = i+1;
            }
            else if(texto[i] == "e"){
                textoDecifrado = textoDecifrado + "e"
                i = i+4;
            }
            else if(texto[i] == "i"){
                textoDecifrado = textoDecifrado + "i"
                i = i+3;
            }
            else if(texto[i] == "o"){
                textoDecifrado = textoDecifrado + "o"
                i = i+3;
            }
            else if(texto[i] == "u"){
                textoDecifrado = textoDecifrado + "u"
                i = i+3;
            }
            else{
                textoDecifrado = textoDecifrado + texto[i];
            }   
        }
        return textoDecifrado;
    }
    descifrado(texto);
    salida.value = textoDecifrado
    console.log("texto cifrado :D " + textoDecifrado)
})
copiar.addEventListener("click", function(){
    salida.select();
    document.execCommand("copy")
    console.log("copiado")
})
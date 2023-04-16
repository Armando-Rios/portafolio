const piedra = document.getElementById("piedra"),
      papel = document.getElementById("papel"),
      tijera = document.getElementById("tijera"),
      piedra2 = document.getElementById("piedra2"),
      papel2 = document.getElementById("papel2"),
      tijera2 = document.getElementById("tijera2");

const p1piedra = document.getElementById("p1piedra"),
      p1papel = document.getElementById("p1papel"),
      p1tijera= document.getElementById("p1tijera"),
      p2piedra = document.getElementById("p2piedra"),
      p2papel = document.getElementById("p2papel"),
      p2tijera = document.getElementById("p2tijera");
      
const piedrawin = document.getElementById("piedrawin"),
      papelwin = document.getElementById("papelwin"),
      tijerawin = document.getElementById("tijerawin");   

// jugador1 Eleccion

piedra.addEventListener("click", () => {
    papel.classList.remove("activo");
    tijera.classList.remove("activo");
    piedra.classList.add("activo");
    if(piedra.classList.contains("activo")) {
        p1piedra.classList.add("p1");
        p1tijera.classList.remove("p1");
        p1papel.classList.remove("p1");
        if (tijera2.classList.contains("activo")){
            piedrawin.classList.add("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
        else if (papel2.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.add("win");
            tijerawin.classList.remove("win");
        }
        else if (piedra2.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
    }
});
tijera.addEventListener("click", () => {
    papel.classList.remove("activo");
    tijera.classList.add("activo");
    if(tijera.classList.contains("activo")) {
        p1piedra.classList.remove("p1");
        p1tijera.classList.add("p1");
        p1papel.classList.remove("p1");
        if (tijera2.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
        else if (papel2.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.add("win");
        }
        else if (piedra2.classList.contains("activo")){
            piedrawin.classList.add("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
    }
    piedra.classList.remove("activo");
});
papel.addEventListener("click", () => {
    papel.classList.add("activo");
    if(papel.classList.contains("activo")) {
        p1piedra.classList.remove("p1");
        p1tijera.classList.remove("p1");
        p1papel.classList.add("p1");
    }
    if (tijera2.classList.contains("activo")){
        piedrawin.classList.remove("win");
        papelwin.classList.add("win");
        tijerawin.classList.remove("win");
    }
    else if (papel2.classList.contains("activo")){
        piedrawin.classList.remove("win");
        papelwin.classList.remove("win");
        tijerawin.classList.remove("win");
    }
    else if (piedra2.classList.contains("activo")){
        piedrawin.classList.remove("win");
        papelwin.classList.add("win");
        tijerawin.classList.remove("win");
    }
    tijera.classList.remove("activo");
    piedra.classList.remove("activo");
});

// jugador2 Eleccion
piedra2.addEventListener("click", () => {
    papel2.classList.remove("activo");
    tijera2.classList.remove("activo");
    piedra2.classList.add("activo");
    if(piedra2.classList.contains("activo")) {
        p2piedra.classList.add("p2");
        p2tijera.classList.remove("p2");
        p2papel.classList.remove("p2");
        if (tijera.classList.contains("activo")){
            piedrawin.classList.add("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
        else if (papel.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.add("win");
            tijerawin.classList.remove("win");
        }
        else if (piedra.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
    }
});
tijera2.addEventListener("click", () => {
    papel2.classList.remove("activo");
    tijera2.classList.add("activo");
    if(tijera2.classList.contains("activo")) {
        p2piedra.classList.remove("p2");
        p2tijera.classList.add("p2");
        p2papel.classList.remove("p2");
        if (tijera.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
        else if (papel.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.add("win");
        }
        else if (piedra.classList.contains("activo")){
            piedrawin.classList.add("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
    }
    piedra2.classList.remove("activo");
});
papel2.addEventListener("click", () => {
    papel2.classList.add("activo");
    if(papel2.classList.contains("activo")) {
        p2piedra.classList.remove("p2");
        p2tijera.classList.remove("p2");
        p2papel.classList.add("p2");
        if (tijera.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.add("win");
            tijerawin.classList.remove("win");
        }
        else if (papel.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.remove("win");
            tijerawin.classList.remove("win");
        }
        else if (piedra.classList.contains("activo")){
            piedrawin.classList.remove("win");
            papelwin.classList.add("win");
            tijerawin.classList.remove("win");
        }
    }
    tijera2.classList.remove("activo");
    piedra2.classList.remove("activo");
});
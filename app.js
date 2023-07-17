const plusInicio = document.getElementById("plus-inicio"),
      minusInicio = document.getElementById("minus-inicio"),
      numInicio = document.getElementById("inicio"),
      plusDestino = document.getElementById("plus-destino"),
      minusDestino = document.getElementById("minus-destino"),
      numDestino = document.getElementById("destino");

let a1 = 1, a2 = 1;

plusInicio.addEventListener("click", () => {
    if(a1 > 0 && a1 < 14){
        a1++;
    }
    numInicio.innerText = a1;

    if(a1 === a2){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})

minusInicio.addEventListener("click", () => {
    if(a1 > 1){
        a1--;
    }
    numInicio.innerText = a1;

    if(a1 === a2){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})

plusDestino.addEventListener("click", () => {
    if(a2 > 0 && a2 < 14){
        a2++;
    }
    numDestino.innerText = a2;

    if(a1 === a2){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})

minusDestino.addEventListener("click", () => {
    if(a2 > 1){
        a2--;
    }
    numDestino.innerText = a2;

    if(a1 === a2){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})
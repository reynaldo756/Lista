const matrix = document.querySelector("#send4");

    matrix.addEventListener("click", function(){
    
    const at4 = document.querySelector("#at4").value;
    resultado = [];
    var matriz = at4.split(';');

    for (i = 0; i < matriz.length; i++) {
        resultado = (matriz[i]);
    }

    console.log(resultado);
    })


 
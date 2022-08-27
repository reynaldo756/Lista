const cont = document.querySelector("#send3");

cont.addEventListener("click", function(){
        
        const at3 = document.querySelector("#at3").value;
        var frases = at3.toUpperCase();
        var palavras = frases.split(" ");

        function countItems(palavras) {
                const countMap = Object.create(null);
        
                for (const element of palavras) {
                if (!countMap[element]) {
                countMap[element] = 1;
                } else {
                countMap[element] += 1;
                }
                }
                
                return countMap;
        }

        resultado = (countItems(palavras));
        let r_json = JSON.stringify(resultado);

        (r_json);
        
      
})


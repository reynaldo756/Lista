        var frases = "Faça chuva ou faça sol".toUpperCase();
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

      console.log(countItems(palavras));
      



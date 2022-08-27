const cord = document.querySelector("#send2");

                cord.addEventListener("click", function(){

                    const x1 = document.querySelector("#x1").value;
                    const x2 = document.querySelector("#x2").value;
                    const y1 = document.querySelector("#y1").value;
                    const y2 = document.querySelector("#y2").value;


                    var x3 = Math.pow(x2 - x1, 2);
                    var y3 = Math.pow(y2 - y1, 2);

                    let distancia = Math.sqrt(x3 + y3);

                    alert(distancia);
                })
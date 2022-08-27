const fibo = document.querySelector("#send5");

                fibo.addEventListener("click", function(){
                const at5 = document.querySelector("#at5").value;

                var fibonacci = [];
                fibonacci[0] = 0;
                fibonacci[1] = 1;
                for (var i = 2; i < at5; i++) {
                    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }

                alert(fibonacci);

                })
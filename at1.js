const num = document.querySelector("#send1");

                num.addEventListener("click", function(){
                    
                    const at1 = document.querySelector("#at1");
                    
                    const value = at1.value;
                    var result;
                    var result_1 = 0;
                    var passo;

                    for (passo = 1; passo < value; passo++  ){
                        if(value % passo === 0){
                            result = passo;
                            result_1 = result_1 + result;
                        }
                    }

                    alert(result_1);
                })
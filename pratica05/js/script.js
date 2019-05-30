

var idade = prompt("Informe sua idade");
var input = document.getElementById("resul");
var resultado;
var idade = parseInt(idade);

  
        if(idade > 0 && idade < 15)
        {
            resultado="Criança" ;
        }
        else if(idade >= 15 && idade < 30)
        {
            resultado ="Jovem" ;
        }
        else if(idade >= 30 && idade < 60)
        {
            resultado ="Adulto" ;
        }
        else if(idade >= 60)
        {
            resultado ="Idoso" ;
        }


    switch(resultado)
    {
       case resultado = "Criança":
            input.value ="Criança" ;
       break;
       
       case resultado = "Jovem":
            input.value ="Jovem" ;
           break;

        case resultado = "Adulto":
             input.value ="Adulto" ;
          break;
        
        case resulado = "Idoso":
             input.value ="Idoso" ;
        break;
        
    }




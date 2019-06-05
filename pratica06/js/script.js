
var nome = prompt("Informe seu Nome");
var altura = prompt("Informe sua Altura");
var peso = prompt("Informe seu Peso");
var input = document.getElementById("resul");

var resultado;
var altura = parseFloat(altura);
var peso = parseFloat(peso);

function imc(_altura , _peso)
{
    _altura;
    var m = _peso / (_altura * _altura);
    return m.toFixed(2);
}

if(imc(altura,peso) < 16)
{
    resultado = "BAIXO PESO MUITO GRAVE";
}
else if(imc(altura,peso) >= 16 && imc(altura,peso) <= 16.99 )
{
    resultado = "BAIXO PESO GRAVE";
}
else if(imc(altura,peso) >= 17 && imc(altura,peso) <= 18.49 )
{
    resultado = "BAIXO PESO";
}
else if(imc(altura,peso) >= 18,50 && imc(altura,peso) <= 24.99 )
{
    resultado = "PESO NORMAL";
}
else if(imc(altura,peso) >= 25 && imc(altura,peso) <= 29.99 )
{
    resultado = "SOBRE PESO";
}
else if(imc(altura,peso) >= 30 && imc(altura,peso) <= 34.99 )
{
    resultado = "OBSIDADE GRAU I";
}
else if(imc(altura,peso) >= 35 && imc(altura,peso) <= 39.99 )
{
    resultado = "OBSIDADE GRAU II";
}
else if(imc(altura,peso) >= 40 )
{
    resultado = "OBSIDADE GRAU III";
}

input.value = nome +" "+ imc(altura,peso)+" " + resultado;

        
  



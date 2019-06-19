
const calcular = (tipo,valor) => {
   
    if(tipo === 'acao')
    {
        if(valor === 'c')
        {
            document.getElementById('resultado').value='';
        }

        if(valor === '+'|| valor === '-'||valor === '*'||valor === '/'||valor === '.')
        {
            document.getElementById('resultado').value+=valor
        }

        if(valor === '=')
        {
            var valor_campos = document.getElementById('resultado').value
            console.log(eval(valor_campos));
            document.getElementById('resultado').value=eval(valor_campos);
            
        }
    }
        else if(tipo === 'valor')
        {
            document.getElementById('resultado').value+=valor
        }
   
    // return console.log(tipo,valor)
}

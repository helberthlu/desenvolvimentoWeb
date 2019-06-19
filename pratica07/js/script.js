function distribuiCarater()
{
    var  caracter = document.getElementById('entrada').value
    var  caracter = document.getElementById('entrada').value = '';


    switch(caracter)
    {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':   
        case '9':
        case '10':
            document.getElementById('numero').value += caracter
        break;
        
        default:
            document.getElementById('letras').value += caracter
        break;
    }

}
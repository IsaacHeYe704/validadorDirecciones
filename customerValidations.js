function validateLength(id)
{
    var caller = document.getElementById(id);
    var texField = document.getElementById(id + 'Text');


    if (id == 'phone')
    {
        if (texField.value.length ==0)
        {
            caller.className = 'formSubgroup';
        }else if (isNaN(texField.value)) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById('phoneError').innerHTML = "Este campo debe ser un número";
        }else if((texField.value.length != 7) && (texField.value.length != 10)) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById('phoneError').innerHTML = "Este campo debe ser de 7<small> (celular)</small> o 10 <small> (fijo)</small> caracteres";
        }else
        {
            caller.className = 'formSubgroup success';
        }
    } else
    {
        if (texField.value.length == 0)
        {
            caller.className = 'formSubgroup';
        } else if (texField.value.length > 30) {
            caller.className = 'formSubgroup errorCustomer';
        } else
        {
            caller.className = 'formSubgroup success';
        }
    }
}










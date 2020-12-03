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
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
            document.getElementById(id+"TextLable").innerHTML = texField.value;
        }else if((texField.value.length != 7) && (texField.value.length != 10)) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById('phoneError').innerHTML = "Este campo debe ser de 7<small> (celular)</small> o 10 <small> (fijo)</small> caracteres";
            document.getElementById(id+"TextLable").innerHTML = texField.value;
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
        }else
        {
            caller.className = 'formSubgroup success';
           if(texField.value.length == 7)
           {
               document.getElementById(id+"TextLable").innerHTML = "571"+texField.value;
           }else
           {
               document.getElementById(id+"TextLable").innerHTML = texField.value;
           }
            document.getElementById(id+"Lable").className = "formatSubgroup success";
        }
    } else
    {
        if (texField.value.length == 0)
        {
            caller.className = 'formSubgroup';
        } else if (texField.value.length > 30) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
        } else
        {
            caller.className = 'formSubgroup success';
            document.getElementById(id+"Lable").className = "formatSubgroup success";
        }
        document.getElementById(id+"TextLable").innerHTML = texField.value;
    }
    
}










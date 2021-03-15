
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
            document.getElementById(id+"TextLable").innerHTML = texField.value.split('+')[1];
        }else if((texField.value.length != 10) && (texField.value.length != 13)) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById('phoneError').innerHTML = "Este campo debe ser de 7(fijo) o 10(celular) caracteres";
            document.getElementById(id+"TextLable").innerHTML = texField.value.split('+')[1];
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
        }else
        {
            caller.className = 'formSubgroup success';
        //    if(texField.value.length == 7)
        //    {
        //        document.getElementById(id+"TextLable").innerHTML = "571"+texField.value;
        //    }else
        //    {
               document.getElementById(id+"TextLable").innerHTML = texField.value.split('+')[1];
        //    }
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
function  validateIsEmail(id){
    var caller = document.getElementById(id);
    var email = document.getElementById('eMail');
    var texField = document.getElementById(id + 'Text');
    var hasAt = texField.value.split("@");
    
    var hasDot =0;
    
    if(hasAt.length !=1)
        hasDot = hasAt[1].split(".");
        
    if (texField.value.length == 0)
        {
            caller.className = 'formSubgroup';
        } else if (texField.value.length > 30) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
        } else
        {
            if(hasAt.length === 2 && hasDot.length >= 2)
            {
                caller.className = 'formSubgroup success';
                document.getElementById(id+"Lable").className = "formatSubgroup success";
            }else
            {
                caller.className = 'formSubgroup errorCustomer';
                document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
            }  
        }
        document.getElementById(id+"TextLable").innerHTML = texField.value;    
}
function directionLableUpdate()
{
    document.getElementById("enteredDireccionLable").innerHTML = document.getElementById("autocomplete").value.split(",")[0];
    document.getElementById("cityLable").innerHTML = document.getElementById('autocomplete').value.split(",")[1];
    
}









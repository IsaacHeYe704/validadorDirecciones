
function validateLength(id)
{
    var caller = document.getElementById(id);
    var texField = document.getElementById(id + 'Text');


    if (id == 'phone')
    {
        var prefix = document.querySelector("#phonePrefix");
        if (texField.value.length ==0)
        {
            caller.className = 'formSubgroup';
        }else if (isNaN(texField.value)) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById('phoneError').innerHTML = "This fild must be numeric";
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
        }else if((texField.value.length != 10) && (texField.value.length !=7)) {
            caller.className = 'formSubgroup errorCustomer';
            document.getElementById('phoneError').innerHTML = "this field must be 7  or 10  digits";
            
            document.getElementById(id+"Lable").className = "formatSubgroup errorFormat";
        }else
        {
            caller.className = 'formSubgroup success';
        //    if(texField.value.length == 7)
        //    {
        //        document.getElementById(id+"TextLable").innerHTML = "571"+texField.value;
        //    }else
        //    {
        //    }
            document.getElementById(id+"Lable").className = "formatSubgroup success";
        }
        document.getElementById(id+"TextLable").innerHTML = prefix.value.split('+')[1] +" "+texField.value;
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









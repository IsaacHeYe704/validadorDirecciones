var xhttp = new XMLHttpRequest();
var xhttp2 = new XMLHttpRequest();

var direction = "mi dirección: ";
var responceAddress="";


function copy()
{
    var NameTextLable = document.getElementById("customerNameTextLable").textContent;
    var pocTextLable = document.getElementById("pocTextLable").textContent;
    var emailTextLable = document.getElementById("eMailTextLable").textContent;
    var enteredDireccionLable = document.getElementById('enteredDireccionLable').textContent.split(",")[0];
    var cityEntered = document.getElementById('autocomplete').value.split(",")[1];
    var complementLable = document.getElementById("complementText").value;
    var phoneTextLable = document.getElementById("phoneTextLable").textContent;
    var dummyContent = NameTextLable + "\n"+pocTextLable+ "\n"+ enteredDireccionLable+ "\n" + cityEntered+ "\n"+phoneTextLable+"\n"+complementLable+"\n"+ emailTextLable ;
    if ( pocTextLable == "" || enteredDireccionLable == ""  || phoneTextLable == "")
    {
        alert("message copied but you havent entered all info, please check it");
    }
    var dummy = $('<textarea>').val(dummyContent).appendTo('body').select();
    document.execCommand('copy');
    $(dummy).remove();
}
function chekIfCompanyOrCustomer() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var companyLable = document.getElementById("companyLable");
  var customerLable = document.getElementById("customerLable");
  var companyInfoDiv = document.getElementById("customerName");
  
  
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    companyLable.style.display = "inline-block";
    customerLable.style.display = "none";
    companyInfoDiv.style.display = "block";
  } else {
    companyLable.style.display = "none";
    customerLable.style.display = "inline-block";
    companyInfoDiv.style.display = "none";
    document.getElementById("customerNameText").value = "";
    document.getElementById("customerNameTextLable").textContent = "";
  }
}

















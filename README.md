# My address validator

My address validator is a web application winner at *Dell Global Operations innovation Olympics 2021*, 

It is looking to accomplish:  

1. Input validation of customers information based on internal standards. 

2. Innovation in DELL Colombia. 

3. Mexico, Peru implementation during 2022. 

## USAGE



![Screenshot](https://raw.githubusercontent.com/IsaacHeYe704/validadorDirecciones/94d1a3d3e95297e57e8fd9d716f879495b45bcd7/img/instructions.png)
### landing page:
when you select a country implementation you might land on the following landing page, here you can: 
1. Read the instructions. 
2. Go to the template.
3. Copy to clipboard the template information.
4. Send via email the template information.
![Screenshot](img/myAddressLnading.png)


### template
the tamplate section of the page is where you can add all the customer information and validate it,
validations are:
1. Company name must be less than 30 digits long.
2. Contact name must be less than 30 digits long.
3. Email must be less than  30 digits long and contain ".","@"
4. phone number must be less than 30 digits long and numeric type of input.
5. address input is an autocomplete field.

![Screenshot](img/template.png)



## IMPLEMENTATION
My address validator is built on a  free css template and pure JavaScript, during 2022 we are looking to migrate into  Reactjs but the priority is growing functionality. 
address input and validation is made by using google places api, map generator is possible thanks to google maps api.

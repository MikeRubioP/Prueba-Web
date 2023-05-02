$.validator.setDefaults( {
    submitHandler: function () {
       alert( "Datos ingresados correctamente!" );
    }
 });
 
 
 $(document).ready(function(){
    $('#formulario').validate({
       rules: {
          rut: {
            required: true,
            minlength: 8
          },
          pasaporte:{
            minlength: 8,
            maxlength:12
          },
          nombre: {
             required: true,
             minlength: 3
          },
          apellido: {
             required: true,
             minlength: 3
          },
          telefono: {
            required: true,
            minlength: 9,
            maxlength: 11
          },
          correo: {
            required: true,
            email: true
          }
          
       },
       messages: {     
          rut:{
             required: "Por favor ingrese un rut vàlido",
             minlength: "Su rut debe tener un minimo de 8 caracteres"
          },
          pasaporte:{
            minlength: "Ingrese mas de 8 digitos",
            maxlength: "Ingrese menos de 12 digitos"
          },
          nombre: {
             required: "Por favor ingresa tu nombre",
             minlength: "Tu nombre debe ser de no menos de 3 caracteres"
          },
          apellido: {
            required: "Por favor ingresa tus apellidos",
            minlength: "Tu nombre debe ser de no menos de 6 caracteres"
          },
          telefono:{
            required: "Por favor ingrese su numero de telefono",
            minlength: "Tu numero de telefono debe tener un minimo de 9 numeros",
            maxlength: "Ingrese menos de 11 digitos"
          },
          correo: "Por favor ingresa un correo válido",
       },
       errorElement: "em",
       errorPlacement: function (error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");
 
          if (element.prop( "type" ) === "checkbox") {
             error.insertAfter(element.parent("label") );
          } else {
             error.insertAfter(element);
          }
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
 });


 
 

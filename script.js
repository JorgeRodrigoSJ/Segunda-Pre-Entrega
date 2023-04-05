//ACTIVIDAD//
/* cajero automatico
1-mostrar mensaje de bienvenida.
2-permitir hasta 3 intentos de ingreso con pin del ciente
 2a-si ingresa correctamente dar mensaje de bienvenida y mostrar las opciones del punto 3
 2b-terminados los intentos informar al cliente qie se comunique con el banco.
3-En la pantalle mostrar las siguientes opciones:
 a-Saldo
 b-Retiro
 c-Deposito
 d-Salir
4-Al finalizar mostrar el mensaje.*/

const PIN=1234;
let ingreso = false;

alert("Bienvenido al Banco");

for(i=2;i>=0;i--){
  let contraseña = parseFloat(prompt("Ingresa tu PIN tienes " + (i+1) +" oportunidades"))
  console.log(i+1);
 if(PIN === contraseña){
  alert("Bienvenido puedes ingresar a tu cuenta para operar")
  ingreso=true
  break
 } else{
alert("Error, comuniquese con el banco o ella quizas te ayude tambien")
 }
}
//cuando sea true se va a ejecutar el codigo dentro del if
if(ingreso){

  let saldo=20000;
  let opcion=prompt(
    "elegi una opcion: \n1-Saldo. \n2-Retiro de dinero. \n3-deposíto. \nPresiona X para finalizar."
  );
// aca le tengo que poner el or || para porner X mayuscula
  while (opcion != "x") {
    if(opcion == "1"){
      alert("tu saldo es $" + saldo);

    }else if(opcion == "2"){
      let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
      if(saldo<retiro){
        alert("fondos insuficientes")
      }else{
        saldo=saldo-retiro;
        alert("Retiro exitoso, tu saldo es $" + saldo)
      }
      

    }else if(opcion == "3"){
     let deposito = parseFloat(prompt("Ingresa el monto a depositar")); 
     saldo=saldo+deposito;
     alert("Deposito exitoso, tu saldo actual es $" + saldo);

    }else {
      alert("Opcion no valida")
    }
    opcion=prompt(
      "elegi una opcion -estoy en el while-: \n1-Saldo. \n2-Retiro de dinero. \n3-deposíto. \nPresiona X para finalizar.")
  }

} else{
  alert("Error de ingreso \nRetendremos tu tarjeta por chanta")
}



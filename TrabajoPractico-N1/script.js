//ACTIVIDAD//

/* Consigna:

 Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:


 Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?


 Armar la estructura HTML del proyecto.


 Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.


 Utilizar funciones para realizar esas operaciones.



---------------------------------------------------------------------------------

CONSIGNAS PARA EL TRABAJO A ENTREGAR:

Ejemplos:

Calcular costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.


COTIZADOR DE SEGUROS DE AUTO

-Elije entre 3 o mas marcas de auto (americano, europeo o asiatico) siendo el asiatico el mas barato y el europeo el mas caro
-ingresar el modelo del auto (solamente a autos de hasta 30 años)
-el algoritmo tiene que: cada año menos que tenga el auto sale un 3% menos del nominal segun su procedencia
-se selecciona la covertura del seguro entre basica y completa


valor nominal seguro: 4500$

valor auto Europeo: $4500*1.5 =

valor auto Americano: $4500*1.3 =

valor auto Asiatico: $4500*1.1 =


cada año decrementa 3% del nominal:

2023=valor nominal del auto segun procedencia-(valor nominal*0.03(2023-año del vehiculo))
2022=valor nominal del auto segun procedencia-(valor nominal*0.03(2023-2022))
2021=valor nominal del auto segun procedencia-(valor nominal*0.03*(2023-2021))
.
.
.
1993=valor nominal del auto segun procedencia-(valor nominal*0.03*(2023-1993))



*/

//RESOLUCION

//intereses
const interesAmericano = 1.3;
const interesEuropeo = 1.5;
const interesAsiatico = 1.1;

//valor nominal del seguro
const seguro = 6000;


//Valor segun procedencia
const ValorAmericano = 1.3*seguro;
const ValorEuropeo = 1.5*seguro;
const ValorAsiatico = 1.1*seguro;


alert("Bienvenido al cotizador de seguros");

//Defino funciones:
let año;
let Auto;

function pediraño() {

  let año = parseInt(prompt("escribe el año de tu vehiculo en formato de 4 digitos"));
  console.log("el año del vehiculo es "+año);

  if (año>=1993 && año<=2023) {

    if (opcion==1) {

      let CostoSeguro = ValorAmericano-(ValorAmericano*0.03*(2023-año));
      let covertura=prompt("elije tu covertura: \n1-Basica. \n2-Completa. \nPresiona X para finalizar.")

      while (covertura != "x") {

        if (covertura == "1") {
          alert("tu seguro basico cuesta: "+CostoSeguro+"$");
          break;
        }else if (covertura == "2"){
          alert("tu seguro completo cuesta: "+CostoSeguro*1.3+"$");
          break;
        }else{
           alert("Opcion no valida");
           break;
      }
    }

    }else if (opcion==2) {

      let CostoSeguro = ValorEuropeo-(ValorEuropeo*0.03*(2023-año));
      let covertura=prompt("elije tu covertura: \n1-Basica. \n2-Completa. \nPresiona X para finalizar.")

      while (covertura != "x") {
        if (covertura == "1") {
          alert("tu seguro basico cuesta: "+CostoSeguro+"$");
          break;
        }else if (covertura == "2"){
          alert("tu seguro completo cuesta: "+CostoSeguro*1.3+"$");
          break;
        }else{
           alert("Opcion no valida");
           break;
      }
    }
      


    }else if (opcion==3){
      
      let CostoSeguro = ValorAsiatico-(ValorAsiatico*0.03*(2023-año));
      let covertura=prompt("elije tu covertura: \n1-Basica. \n2-Completa. \nPresiona X para finalizar.");

      while (covertura != "x") {
        if (covertura == "1") {
          alert("tu seguro basico cuesta: "+CostoSeguro+"$");
          break;
        }else if (covertura == "2"){
          alert("tu seguro completo cuesta: "+CostoSeguro*1.3+"$");
          break;
        }else{
           alert("Opcion no valida");
           break;
      }
    }

    }
  } else if (año < 1993){

    alert("No podemos asegurar tu vehiculo por tener mas de 30 años")
    
  } else {

    alert("ingrese el año correctamente")
    pediraño();

  }

}

function cotizador() {

  opcion = prompt("Selecciona tu vehiculo opcion: \n1-Americano. \n2-Europeo. \n3-Asiatico. \nPresiona X para finalizar.");
  console.log("eligio opcion "+opcion);
  
  while (opcion != "x") {

    if (opcion == "1") {
  
      let Auto = prompt("Selecciona la marca tu vehiculo: \n1-Chevrolet. \n2-Ford. \n3-Doodge. \nPresiona X para finalizar.");
      
      while (Auto != "x") {
  
        if (Auto == "1") {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Chevrolet " + nombre)
  
          pediraño();
  
          
  
        } else if (Auto == "2") {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Ford " + nombre)
  
          pediraño();
  
          break;
  
  
        } else if ((Auto == "3")) {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Doodge " + nombre)
  
          pediraño();
  
          break;
  
  
        } else {
  
          alert("Opcion no valida");
      
          break;
  
        }
        
      }
  
      break;
  
    }else if (opcion == "2") {
  
      let Auto = prompt("Selecciona la marca tu vehiculo: \n1-Renault. \n2-Fiat. \n3-Volskwagen. \nPresiona X para finalizar.");

      while (Auto != "x") {
  
        if (Auto == "1") {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Renault " + nombre)
  
          pediraño();
  
          break;
  
        } else if (Auto == "2") {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Fiat " + nombre)
  
          pediraño();
  
          break;
  
  
        } else if ((Auto == "3")) {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Volskwagen " + nombre)
  
          pediraño();
  
          break;
  
  
        } else {
  
          alert("Opcion no valida");
      
          break;
  
        }
        
      }
  
      break;
    }else if (opcion == "3") {
  
      let Auto = prompt("Selecciona la marca tu vehiculo: \n1-Toyota. \n2-Daewood. \n3-Nissan. \nPresiona X para finalizar.");

      while (Auto != "x") {
  
        if (Auto == "1") {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Toyota " + nombre)
  
          pediraño();
  
          break;
  
        } else if (Auto == "2") {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Daewood " + nombre)
  
          pediraño();
  
          break;
  
  
        } else if ((Auto == "3")) {
  
          let nombre = prompt("escribe el modelo de tu auto")
  
          alert("Seleccionaste un Nissan " + nombre)
  
          pediraño();
  
          break;
  
  
        } else {
  
          alert("Opcion no valida")
      
          break;
  
        }
        
      }
  
      break;
  
    }else {
  
      alert("Opcion no valida en la funcion");
      console.log("eligio opcion "+opcion);
      cotizador();
      
    }
  
  
  }
}


let opcion = prompt("Selecciona tu vehiculo opcion: \n1-Americano. \n2-Europeo. \n3-Asiatico. \nPresiona X para finalizar.");

console.log("eligio opcion "+opcion);
console.log("el modelo es "+Auto);


while (opcion != "x") {

  if (opcion == "1") {

    let Auto = prompt("Selecciona la marca tu vehiculo: \n1-Chevrolet. \n2-Ford. \n3-Doodge. \nPresiona X para finalizar.");

    while (Auto != "x") {

      if (Auto == "1") {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Chevrolet " + nombre)

        pediraño();

        

      } else if (Auto == "2") {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Ford " + nombre)

        pediraño();

        break;


      } else if ((Auto == "3")) {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Doodge " + nombre)

        pediraño();

        break;


      } else {

        alert("Opcion no valida");
        break;

      }
      
    }

    break;

  }else if (opcion == "2") {

    let Auto = prompt("Selecciona la marca tu vehiculo: \n1-Renault. \n2-Fiat. \n3-Volskwagen. \nPresiona X para finalizar.");

    while (Auto != "x") {

      if (Auto == "1") {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Renault " + nombre)

        pediraño();

        break;

      } else if (Auto == "2") {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Fiat " + nombre)

        pediraño();

        break;


      } else if ((Auto == "3")) {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Volskwagen " + nombre)

        pediraño();

        break;


      } else {

        alert("Opcion no valida");
    
        break;

      }
      
    }

    break;
  }else if (opcion == "3") {

    let Auto = prompt("Selecciona la marca tu vehiculo: \n1-Toyota. \n2-Daewood. \n3-Nissan. \nPresiona X para finalizar.");

    while (Auto != "x") {

      if (Auto == "1") {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Toyota " + nombre)

        pediraño();

        break;

      } else if (Auto == "2") {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Daewood " + nombre)

        pediraño();

        break;


      } else if ((Auto == "3")) {

        let nombre = prompt("escribe el modelo de tu auto")

        alert("Seleccionaste un Nissan " + nombre)

        pediraño();

        break;


      } else {

        alert("Opcion no valida")
    
        break;

      }
      
    }

    break;

  }else {

    alert("Opcion no valida");
    cotizador();
    
  }

}

alert("Hasta luego, gracias por elegirnos");





















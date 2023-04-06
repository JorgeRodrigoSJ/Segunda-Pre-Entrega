//ACTIVIDAD//

/* Consigna:

 Objetivos específicos

Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().

Se debe entregar

Estructura HTML del proyecto. 
Variables de JS necesarias. 
Funciones esenciales del proceso a simular.
Objetos de JS.
Arrays.
Métodos de búsqueda y filtrado sobre el Array.


--------------------------------------------------------------------------------
*/

//SELECTOR DE REGALOS


const regalos = [
    { id: 1, nombre: "mate", precio: 1200, img: "mate.jpg" },
    { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
    { id: 3, nombre: "remera", precio: 2800, img: "remera.jpg" },
    { id: 4, nombre: "campera", precio: 1500, img: "campera.webp" },
    { id: 5, nombre: "viaje por el pais", precio: 1100, img: "viaje.webp" },
    { id: 6, nombre: "mochila", precio: 1900, img: "mochila.jpeg" },
    { id: 7, nombre: "gorra", precio: 5800, img: "gorra.png" },
   
  ];


let maximo = prompt("Selecciona cuanto es lo maximo que desea gastar en su regalo:");

console.log("eligio el rango hasta $"+maximo);

//funcion de filtrado
function filtrarPorPrecio(arr, filtro){
    return arr.filter((el)=>{
      return el.precio <= filtro
    })
  }

const filtrados = filtrarPorPrecio(regalos, maximo)

console.log(filtrados);


  

//FUNCION CONSTRUCTOR
function regalo(nombre, precio, img) {
    this.id = regalos.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    //valido si recibo imagen
    if (!img) {
      this.img = "https://via.placeholder.com/300";
    } else {
      this.img = img;
    }
  }


//esto es para agregar regalos  
regalos.push (new regalo("camisa",5000));



/*aca pueo hacer que sume iva

sumaIva() {
    this.precio = this.precio*1.21;
}

//sumar iva a los regalos

for (const regalo of regalos)
regalos.sumaIva():

console.log(regalos);
   
 
*/



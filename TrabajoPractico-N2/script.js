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



const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

function Servicio(nombre, precio, img) {
  this.id = servicios.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  //valido si recibo imagen
  if (!img) {
    this.img = "https://via.placeholder.com/300";
  } else {
    this.img = img;
  }
}


const newServicio=new Servicio("depilacion", 5000)
servicios.push(newServicio)


//metodos busqueda
//arr.find((el)=>{ return el.nombre == "arroz"})
const findService=(arr,filtro)=>{
    const encontrado=arr.find((el)=>{//servicios
        //return el.nombre == filtro 
        return el.nombre.includes(filtro)
    })
    return encontrado;
}

const servEncontrado= findService(servicios, "cutis")
console.log(servEncontrado);


function filtrarPorPrecio(arr, filtro){
  return arr.filter((el)=>{
    return el.precio <= filtro
  })
}

const baratos = filtrarPorPrecio(servicios, 2400)

console.log(baratos);
const masBaratos= filtrarPorPrecio(baratos,1200)
console.log(masBaratos);

const servBarato= findService(masBaratos,"uñ")

console.log(servBarato);

const carrito= []
carrito.push(servBarato)
console.log(carrito);
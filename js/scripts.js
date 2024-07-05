// eventos de javascript
const datos = {
    nombre: '',
    celular: '',
    correo: '',
    mensaje: '',
}

// eventos de los input
// metodo queryselector,devuelve el primer elemento de document que coinsida con el selector
let nombre = document.querySelector('#nombre');
let celular = document.querySelector('#celular');
let correo = document.querySelector('#correo');
let mensaje = document.querySelector('#mensaje');

//console.log(nombre)
//console.log(celular)
//console.log(correo)
//console.log(mensaje)

//metodo addEventlistener, escucha un elemento indicado y ejecuta una funcion
//nombre.addEventListener('input', funcionPrueba);
//function funcionPrueba(){
//    alert('Hola');
//}

nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
  // console.log(evento);
  datos[evento.target.id] = evento.target.value;
  //console.log(datos);
}

const formulario = document.querySelector('.formulario');
 console.log(formulario);
 formulario.addEventListener('submit', function(evento){
     evento.preventDefault();
     const { nombre, celular, correo, mensaje } = datos;
    // console.log(nombre)
    // console.log(celular)
    // console.log(correo)
    // console.log(mensaje)
    
    if (nombre === '' || celular === '' || correo === '' || mensaje === '') {
        //console.log('nombre esta vacio');
        mostrarError('todos los cambios son obligatorios');
        return;    // el devuelve algo o para la ejecucion del programa
        }
       mostrarMensaje("enviando datos correctamente");
     //console.log('procesando formulario');

 });

 function mostrarError(mensaje){
     //console.log(mensaje);
     let error = document.createElement('p');  // crea un elemento de HTML para enviar un mensaje 
     error.textContent = mensaje;
     error.classList.add('error');  // cuando les agregamos class podemos llevarlo por su clase a los estilos 
     formulario.appendChild(error); // me muestra un mensaje en el navegador 
     setTimeout(()  => {            // con este script le damos un periodo de duracion al mensaje 
          error.remove();
     }, 5000);
     //console.log(error);
 }

 
 function mostrarMensaje(mensaje){
     let alerta = document.createElement('p');  // crea un elemento de HTML para enviar un mensaje 
     alerta.textContent = mensaje;
     alerta.classList.add('correcto');  // cuando les agregamos class podemos llevarlo por su clase a los estilos 
     formulario.appendChild(alerta); // me muestra un mensaje en el navegador 
     setTimeout(()  => {            // con este script le damos un periodo de duracion al mensaje 
          alerta.remove();
     }, 3000);
    }

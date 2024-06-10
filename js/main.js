/*let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;
  
  }*/

  let loaded = () => {
    
    console.log('El DOM está completamente cargado.');
  };
  
  window.addEventListener("DOMContentLoaded", loaded);
  

const formulario = document.getElementById('miFormulario');

// Agregamos el evento 'submit'
formulario.addEventListener('submit', (eventSubmit) => {
    // Detenemos el comportamiento predeterminado del formulario
    eventSubmit.preventDefault();

    // Aquí puedes agregar el código para manejar los datos del formulario
    // Por ejemplo, podrías recoger los valores de los campos del formulario
    // y hacer algo con ellos, como enviarlos a un servidor o validarlos
});

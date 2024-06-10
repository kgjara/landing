let loaded = (eventLoaded) => {

  /*  window.alert("landing page loaded");
    console.log(eventLoaded);*/

    /*loaded
    
    */
  let myform = document.getElementById('comic-form');
  myform.addEventListener('submit', (eventSubmit) => {
    eventSubmit.preventDefault();

    let nombreValue = nombre.value;

    if (nombreValue.length == 0) {

      nombre.focus()

      alert('Ingrese un texto válido')

      return;
    }
    let emailValue = email.value;

    if (emailValue.length == 0) {

      email.focus()

      alert('Ingrese un texto válido')

      return;
    }
    let recomendacionValue = recomendacion.value;

    if (recomendacionValue.length == 0) {

      recomendacion.focus()

      alert('Ingrese un texto válido')

      return;
    }
// lo siguiente encapsularla en una funcion submit
//tiene que ser con el evento submit no con el click
//La recomendacion debe ser un select
/*submitValues=()=>{
  const datos{

  }
}

let loadVotes() =async()=>{};

*/
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const recomendacion = document.getElementById('recomendacion').value;
      const datos = {
        nombre: nombre,
        email: email,
        recomendacion: recomendacion
      };
      fetch('https://deep-clock-284401-default-rtdb.firebaseio.com/coleccion.json', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(respuesta => respuesta.json())
        .then(datos => {
          console.log(datos);
          alert("respuesta enviada")
          servidor
        })
        .catch(error => console.error(error));
    });

  })

  let template = `
		<tr>
			<td>${recomendacion}</td>
			<td>${conteo}</td>
		</tr>
	`
}
window.addEventListener("DOMContentLoaded", loaded);

async function obtenerDatos() {
  const url = "https://www.ejemplo.com/"; // Reemplaza con la URL real de la API o recurso
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
  console.error("Error:", respuesta.status);
  return;
  }
  const datos = await respuesta.json();
  console.log(datos); // Procesar o mostrar los datos obtenidos
  }

  obtenerDatos();



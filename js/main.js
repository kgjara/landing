let loaded = (eventLoaded) => {
  const myform = document.getElementById('comic-form');

  myform.addEventListener('submit', (eventSubmit) => {
    eventSubmit.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const favorito = document.getElementById('favorito').value;

    if (nombre.length == 0) {
      alert("Ingrese su nombre");
      nombre.focus()
      return;
    }

    if (email.length == 0) {
      alert("Ingrese su email")
      email.focus()
      return;
    }

    const datos = {
      nombre: nombre,
      email: email,
      favorito: favorito
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
        alert("Enviado correctamente")
      })
      .catch(error => console.error(error));
  })
}
window.addEventListener("DOMContentLoaded", loaded);

async function obtenerDatos() {
  const url = "https://deep-clock-284401-default-rtdb.firebaseio.com/coleccion.json";
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    console.error("Error:", respuesta.status);
    return;
  }
  const datos = await respuesta.json();
  let favoritoTotales = new Map();
  for (var key in datos) {
    let elementos = datos[key];
    let favorito = elementos["favorito"];
    let conteo = favoritoTotales.has(favorito) ? favoritoTotales.get(favorito) + 1 : 1;
    favoritoTotales.set(favorito, conteo);
  }
  console.log(datos); // Procesar o mostrar los datos obtenidos


  const tablebody = document.getElementById('tablebody');
  tablebody.innerHTML = '';  // Limpiar el contenido existente

  favoritoTotales.forEach((conteo, favorito) => {
    const template = `
                    <tr>
                        <td>${favorito}</td>
                        <td>${conteo}</td>
                    </tr>
                `;
    tablebody.innerHTML += template;
  });
}
obtenerDatos();

// lo siguiente encapsularla en una funcion submit
//tiene que ser con el evento submit no con el click
/*submitValues=()=>{
  const datos{

  }
}
*/

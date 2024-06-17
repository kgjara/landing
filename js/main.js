let loaded = (eventLoaded) => {
  const myform = document.getElementById('comic-form');

  myform.addEventListener('submit', (eventSubmit) => {
    eventSubmit.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const favorito = document.getElementById('favorito').value;

    if (nombre.length == 0) {

      nombre.focus()
      alert('Ingrese un texto válido')

      return;
    }

    if (email.length == 0) {

      email.focus()

      alert('Ingrese un texto válido')

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

  const resultadosDiv = document.getElementById('resultados-votos');
  resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
  favoritoTotales.forEach((conteo, personaje) => {
    resultadosDiv.innerHTML += `<p>Personaje Favorito: ${personaje}, Votos: ${conteo}</p>`;
  });
}
obtenerDatos();

// lo siguiente encapsularla en una funcion submit
//tiene que ser con el evento submit no con el click
/*submitValues=()=>{
  const datos{

  }
}

let loadVotes() =async()=>{};


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
*/

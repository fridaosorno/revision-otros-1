const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //se pone async
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); // se usa fetch para solicitar cambios a GitHub
    const data = await response.json(); // convierte la respuesta a JSON
    console.log(data);
    // se añaden backticks en la intepolación
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);

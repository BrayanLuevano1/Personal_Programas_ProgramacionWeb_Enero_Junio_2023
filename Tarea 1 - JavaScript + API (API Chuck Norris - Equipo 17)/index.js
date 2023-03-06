//Luevano Gómez Brayan Alberto - 19210931
//Hernandez Hernandez Sebastian - 19210507

//Variable para Identificar el Botón
const Boton1 = document.querySelector('button');

//Esto es para Mostrar la Frase de la API en la Página
const Parrafo = document.querySelector('h2');
Boton1.addEventListener('click', getData)

//Esta es una Función Asíncrona
async function getData()
{
	//Un Try - Catch, en caso de que se presente un Error.
	try 
	{
		//Aquí es donde se llama a la API de Chuck Norris
		const data = await fetch('https://api.chucknorris.io/jokes/random');
		const json = await data.json();
		
		//Muestra los Mensajes También en la Consola del Navegador
		console.log(json);
		console.log(json.value);

		//Aquí Muestra la Frase de la API de Chuck Norris
		Parrafo.textContent = json.value;
	}
	catch(e) 
	{
		console.error(e);
	}
}
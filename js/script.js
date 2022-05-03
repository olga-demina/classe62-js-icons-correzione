const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}, 
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'computer',
		family: 'fas',
		color: 'blue'
	}
];

const iconsContainer = document.getElementById("icons-container");
const typeSelect = document.getElementById("type-filter");

// stampo in modo dinamico le options del select
generateSelectOption(icons, typeSelect);

// Stampo le icone
printIcons(iconsContainer, icons);

// filtro le icone al select
typeSelect.addEventListener("change", function() {
	// prevera la value selezionata
	const selectedValue = this.value;
	// se la value è "all"
		// stampo tutto quanto
	// altrimenti
		// stampo soltanto gli elementi che hanno "type" === value del select
	if (selectedValue === "all") {
		printIcons(iconsContainer, icons);
	} else {
		// seleziono dall'array originale soltanto quei elemnti che hanno il type corrispondente a selectedValue e li salvo nell'array filtrato
		const filteredIcons = icons.filter(element => element.type === selectedValue);
		printIcons(iconsContainer, filteredIcons);
	}
});
	


// FUNCTIONS 
/**
 * Description Per ogni elemento dell'array di oggetti crea un elemento nel DOM e lo appende al container
 * @param {any} container -> il contenitore nel DOM dove appendere ogni elemnto DOM creato
 * @param {any} objectsArray -> array di elemnti in base alle quali creaiamo gli elemnti DOM 
 */
function printIcons(container, objectsArray) {
	// ripulire il DOM
	container.innerHTML = "";
	objectsArray.forEach( (element) => {
		const newDomElement = createDomElement(element);
		container.append(newDomElement);
	});
}


/**
 * Description crea un elementodel DOM (div) in base all'oggetto passato
 * @param {Object} -> oggetto in base al quale viene creato l'elemnto nel DOM
 * @returns {any} -> elemnto del DOM creato
 */
function createDomElement(item) {
	const domElement = document.createElement("div");
	domElement.classList.add("box");
	domElement.innerHTML = `
		<i class="${item.family} ${item.prefix}${item.name}" style="color: ${item.color}"></i>
		<div class="title">${item.name.toUpperCase()}</div>
	`;
	return domElement
}

/**
 * Description La funzione che individua i tipi di icone e li appende al select 
 * @param {Array} iconsArray -> l'array base dal quale dobbiamo ottnere l'array di tipologie
 * @param {any} selectElement -> l'elemento DOM al quale appendere le options
 * @returns {any} 
 */
function generateSelectOption(iconsArray, selectElement) {
	// 1. creo un'array di tipi delle icone
	// popolo questo array. Scorro tutte le icone
	// per ogni icona se il tipo della icona non è contenuto nell'array di tipi
	// lo pusho
	const typesArray = []; 
	iconsArray.forEach( element => {
		const currentType = element.type;
		if ( !typesArray.includes(currentType) ) {
			typesArray.push(currentType);
		}
	});

	// 2. inserire all'interno del select le options in base all'array di tipi
	typesArray.forEach( type => {
		const option = `<option value="${type}">${type}</option>`;
		selectElement.innerHTML += option;
	});
}
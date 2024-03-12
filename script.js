/**
 * Il y a 3 étapes clé :
 *
 * 1. Récupérer l'élément HTML dans le Js (document.getElements / document.querySelector)
 * 2. Ajouter un écouté d'événement (xxxx.addEventListener('type', callback);) | Callback = function dans une fonction
 * 3. Modifier l'HTML
 */

// 1. Récuperer
const h1 = document.querySelector("h1");
/**
 * Liste de document.
 * - getElementByID
 * - getElementsByClassName
 * - getElementsByTagName
 * - ...
 */

/**
 * - querySelector : Récupère 1 seul élement
 * - querySelectorAll : Récupère tous les éléments trouvés
 */

// 2. Ajouter un listener
h1.addEventListener("click", function () {
	const minuscule = h1.textContent.toLowerCase();

	// 3. Modifier l'HTML
	/**
	 * - innerHTML : prends en compte les balises HTML
	 * - innerText : ne prends pas en compte les balises HTML
	 * - textContent :
	 * - ...
	 *
	 * Pour comprendre la différence entre innerText vs textContent :
	 * Doc : https://developer.mozilla.org/fr/docs/Web/API/Node/textContent
	 *
	 */
	// h1.innerHTML = "<em>" + minuscule + "</em>";
	// h1.innerText = "<em>" + minuscule + "</em>";
	h1.textContent = minuscule;
});

/**
 * Ajout d'un paragraphe en JS dans notre page
 */

const paragraphe = document.createElement("p");
paragraphe.classList.add("important");
paragraphe.textContent = "Vous êtes une bande de BEAU GOSSE !";

const body = document.querySelector("body");

body.appendChild(paragraphe);

/**
 * Il y a 3 étapes clés :
 *
 * 1. Récupérer l'élement HTML dans le Js (document.getElements / document.querySelector)
 * 2. Ajouter un écouter d'évenement (xxxx.addEventListener('type', callback);) | Callback = function dans une function
 * 3. Modifier l'HTML
 */

// 1. Récuperer
const h1 = document.querySelector("h1");
/**
 * Liste de document
 * - getElementByID
 * - getElementsByClassName
 * - getElementsByTagName
 * - ...
 */

/**
 * - querySelector : Récupere 1 seul élement
 * - querySelectorAll : Récupere tous les éléments trouvé
 */

// 2. Ajouter un listener
h1.addEventListener("click", function () {
	const minuscule = h1.textContent.toLowerCase();

	// 3. Modifier l'HTML
	/**
	 * - innerHTML : prend en compte les balises HTML
	 * - innerText : ne prend pas en compte les balises HTML
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

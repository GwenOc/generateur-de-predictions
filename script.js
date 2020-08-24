//Tableaux d'objets prédictions
const PREDICTIONSG = {
	
	mot1 : ["Ajourd'hui,","Un jour,","Peut-être,","Dans 1000 ans,","La prochaine année bisextile,","L'année du singe"],
	mot2 : ["les fourmis","les sages","les poissons","les rats","la lune","les enfants","les crapauds","les atlantes"],
	mot3 : ["respecteront","déniegreront","aspireront","détruieront","balayeront","payeront"],
	mot4 : ["les villes","les meilleurs restaurants","Athènes","Paris","mon quartier","openclassrooms","les champs Elysées"],
	mot5 : ["et ce sera super!","quel dommage!","la fin est proche!","mon cauchemard personnel!","méditons la dessus","tous aux abris!"]
		
};	

const PREDICTIONSP = {
	mot1 : ["Ajourd'hui,","Demain,","Dans 5 minutes,","Pour le reste de la vie,","A tout jamais,","Pour l'éternité"],
	mot2 : ["tu vas","tout va","","ton être exeptionnel va","ton voisin","ta soeur"],
	mot3 : ["s'envoler","tout déchirer","trouver l'inspiration","mettre de l'ordre"],
	mot4 : ["dans ta vie","pour l'avenir","pour sublimer","dans un contexte de dingue"],
	mot5 : ["et ce sera super!",",wahou !","l'avenir t'appartiens!","tous tes rêves se réalisent!"]

};

//on récupère le type de citation
function getType() {
	return document.querySelector('input[name="type"]:checked').value;	
}
//on récupère le nombre de citations
function getNumber() {
	return document.querySelector('input[name="number"]:checked').value;	
}
//fonction de selection d'un mot au hasard dans l'objet
function randomMot(mot){
  return Math.floor(Math.random()*mot.length);
}


//variable de la zone de citation
let place = document.getElementById('quote');

function display() {
	//vide la div
	place.innerHTML = "";

	//conditions sur type
	if(getType() === "general") {	
		//initialisation boucle do while
		let x = 0;
		do {
			x+=1;			
			//variable qui va contenir le résultat de l'itération
			let conteneur =[];  
			//on parcourt les propriétés de l'objet et on extrait un mot de chaque tableau
			for(let mot in PREDICTIONSG) {  
  				conteneur.push(`${PREDICTIONSG[mot][randomMot(mot)]}`);   
			}
			//on construit la citation,transformation en chaine et on la place dans la zone
			let citation = conteneur.join(" ");
			let divElt = document.createElement('div');
			divElt.style.backgroundColor="#e88432";
			divElt.style.margin = "15px";
			divElt.style.padding = "10px";			
			let pElt = document.createElement('p');
			pElt.textContent = citation;

			divElt.appendChild(pElt);
			place.appendChild(divElt);
		} while(x < getNumber());
	}

	else if(getType() === "personnel") {
		let x = 0;
		do {
			x+=1;
			let conteneur =[];

			for(let mot in PREDICTIONSP) { 
  				conteneur.push(`${PREDICTIONSP[mot][randomMot(mot)]}`);   
			}
			
			//on construit la citation,transformation en chaine
			let citation = conteneur.join(" ");
			let divElt = document.createElement('div');
			divElt.style.backgroundColor="#e88432";
			divElt.style.margin = "15px";
			divElt.style.padding = "10px";			
			let pElt = document.createElement('p');

			pElt.textContent = citation;
			divElt.appendChild(pElt);
			place.appendChild(divElt);
		}	while(x < getNumber());
	}
}




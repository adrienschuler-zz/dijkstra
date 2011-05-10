function tableau() {
	clean();

	var nb_arretes=document.forms["dijkstra"].elements["nb_arretes"].value;
	var form = document.getElementById("dijkstra");
	// Création du tableau
	var tab = document.createElement("table");
	tab.setAttribute('border', '1');
	tab.setAttribute('id', 'tab');
	//Titres du tableau
	var tr1= document.createElement("tr");
	var th=document.createElement("TH");
	th=document.createTextNode("N° Arrêtes");
	var th1=document.createElement("TH");
	th1=document.createTextNode("SOMMETS");
	var th2=document.createElement("TH");
	th2=document.createTextNode("POIDS");
	tr1.appendChild(th);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tab.appendChild(tr1);
	form.appendChild(tab);

	// Création dynamiques des lignes du tableau(=nb_arretes)
	for(i=1;i<=nb_arretes;i++) {
		tr = document.createElement("tr");
		td1 = document.createElement("td");
		td1.setAttribute('id', 'arrete');
		td_text1 = document.createTextNode(i);
		td1.appendChild(td_text1);
		tr.appendChild(td1);
		td2 = document.createElement("td");
		input= document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('id', 'sommet');
		input.setAttribute('name', 'sommet');
		input.setAttribute('maxlength', '2');
		input.setAttribute('onChange', 'checkSommet(this.value)');
		td2.appendChild(input);
		tr.appendChild(td2);

		td3 = document.createElement("td");
		input3= document.createElement('input');
		input3.setAttribute('type', 'text');
		input3.setAttribute('id', 'poid');
		input3.setAttribute('name', 'poid');
		input3.setAttribute('onChange', 'checkPoid(this.value)');
		td3.appendChild(input3);
		tr.appendChild(td3);
		tab.appendChild(tr);
	}
	// Création des boutons "Calculer" et "Reinitialiser"
	var tr4 = document.createElement("tr");
	var reset=document.createElement('input');
	var submit=	document.createElement('input');
	submit.setAttribute('type', 'submit');
	submit.setAttribute('value' ,'Calculer');
	submit.setAttribute('onclick' ,'check()');
	reset.setAttribute('type', 'reset');
	reset.setAttribute('value' ,'Reinitialiser');
	tr4.appendChild(reset);
	tr4.appendChild(submit);
	tab.appendChild(tr4);
	form.appendChild(tab);
}

function checkSommet(value) {
	if(value.length!=2)
		alert("Veuillez saisir deux sommets. Exemple : AB");
	return false;
}

function checkPoid(value) {
	for(i=0;i<value.length;++i)
		if(value.charAt(i) < "0" || value.charAt(i) > "9")
			alert ("Le poid doit être un chiffre. Exemple : 7");
	return false;
}

function clean() {

	var testTab=document.getElementById("tab");

	if (testTab) {

		while ( testTab.childNodes.length >= 1 ) {
			testTab.removeChild( testTab.firstChild );
		}

	}

}
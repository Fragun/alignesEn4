const tour = document.querySelector('#tour');
const alerteFinDeJeu = document.querySelector(".finDeJeu");
const j1 = document.querySelector('#j1');
const j2 = document.querySelector('#j2');

let joueurEnCours = 1;
let finDuJeu = false;
let isIaOn = false;


let pointJ1 = 0;
let pointJ2 = 0;

initialisationTableau();

function startIA() {
    isIaOn = !isIaOn;
}

function jouer(colonne) {
    jouerCase(colonne);
    if (isIaOn) {
        let colonneIA = IA.choixColonne();
        jouerCase(colonneIA);
    }
}

/**
 * fonction permettant à un joueur de jouer une case
 * retourne true si le joueur à gagné
 * @param {Number} joueur 
 * @returns 
 */
function jouerCase(colonne){
    if (!finDuJeu) {
        let ligneVide = jeu.trouverLigneVideSelonColonneSaisie(colonne);
        if (ligneVide !== -1) {
            jeu.jouerCase(joueurEnCours, ligneVide, colonne);
            jeu.afficherAlignesEn4();
            if(jeu.verificationFinDeJeu(joueurEnCours) === true) {
            gererFinDuJeu();
            }
            if (joueurEnCours === 1) {
                joueurEnCours = 2;
                tour.innerHTML = "Joueur 2, à vous.";
            }else {
                joueurEnCours = 1;
                tour.innerHTML="Joueur 1, à vous.";
            }
        }
    }
}

function initialisationTableau() {
    finDuJeu = false;
    joueurEnCours = 1;
    alerteFinDeJeu.classList.add("d-none");
    let contentJ1 = "<img src='./asset/img/J1jeton.png'/><br>";
    contentJ1 += pointJ1;
    j1.innerHTML = contentJ1;

    let contentJ2 = "<img src='./asset/img/J2jeton.png'/><br>";
    contentJ2 += pointJ2;
    j2.innerHTML = contentJ2;

    jeu.initialisation();
    jeu.afficherAlignesEn4();
}

function gererFinDuJeu() {
    finDuJeu = true;
    var contentAlert = "Partie terminée, le gagnant est : " + joueurEnCours + "<br />";
    contentAlert += '<button type="button" class="btn btn-secondary" onClick = initialisationTableau()>Recommencer</button>';
    alerteFinDeJeu.innerHTML = contentAlert;
    alerteFinDeJeu.classList.remove("d-none");
    if(joueurEnCours===1){
        pointJ1++;
    } else {
        pointJ2++;
    }
}




/*function joueurVainqueur(joueur) {
    alerteFinDeJeu.innerHTML = Swal.fire({
        title: 'Bravo',
        text: 'Le joueur ' + joueur + ' a gagné.',
        imageUrl: 'asset/img/emojiBravo.png',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Recommencer'
      }).then((result) => {
        if (result.isConfirmed) {
            initialisationTableau()
        }
      })
};*/

/*var toolbox = require('./toolbox.js');
var jeu = require('./jeu.js');*/

//introduction();
/*jeu.joueur1 = choixCaractere(1);
jeu.joueur2 = choixCaractere(2);*/

/*while (true) {
    if (jouer(1)) {
        console.log("Joueur 1 a gagné");
        return;
    }
    if (jouer(2)) {
        console.log("Joueur 2 a gagné");
        return;
    }
}*/
/*
function introduction () {
    let txt = "------------------------------------------------------------------------------------------\n";
    txt += "-------------------------------Bienvenue dans alignes En 4.-------------------------------\n";
    txt += "------------------------------------------------------------------------------------------";
    console.log(txt);
}
function choixCaractere(joueur) {
    var txt = "Veuillez choisir le caractere que vous voulez pour le joueur " + joueur + " : ";
    return toolbox.saisieString(txt);
}
*/


    /*let ligneVide = -1;
    let colonne = -1;
    while (ligneVide === -1 ||colonne <=0 || colonne >7) {
        console.log("Choisir une colonne vide.");
        colonne = jeu.saisirColonne();
        ligneVide = jeu.trouverLigneVideSelonColonneSaisie(colonne);
    }
    jeu.jouerCase(joueur, ligneVide, colonne);
    jeu.afficherAlignesEn4();
    return jeu.verificationFinDeJeu(joueur);*/







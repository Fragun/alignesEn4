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
    let contentJ1 = "<img src='./asset/img/J1jeton.png' alt='button J1' class='jetonSize'><br>";
    contentJ1 += pointJ1;
    j1.innerHTML = contentJ1;

    let contentJ2 = "<img src='./asset/img/J2jeton.png' alt='button j2' class='jetonSize'><br>";
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

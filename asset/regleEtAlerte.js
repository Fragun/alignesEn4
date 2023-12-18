//FONCTION POUR LE BOUTON REGLE DU JEU 
let boutonRegle = document.getElementById("boutonRegle");
let regleDuJeu = document.getElementById("regleJeu");
boutonRegle.addEventListener("click", activeRegle, false);



function activeRegle() {
    regleDuJeu.innerHTML = Swal.fire({
        title: 'Règle du jeu :',
        text: "Le but est d'aligner quatre pions de la même couleur sur la grille. L'alignement peut se faire horizontalement,verticalement ou en diagonale. Jouez chacun votre tour en appuyant sur une colonne",
        imageUrl: 'asset/img/.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
    });
}


//on crée une alerte au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    Swal.fire({
        title: "Bienvenue dans 4 alignés, un jeu pour Léon.",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
    })
        ;
});

var IA = {
    choixColonne() {
        var tabColonne = this.getTableauCellulesPossibles();
        return tabColonne[0];
    },

    getTableauCellulesPossibles: function () {
        var tabColonne = [];
        for (var i = 1; i < jeu.nombreColonne; i++) {
            tabColonne.push(this.getPoidsCellule(jeu.trouverLigneVideSelonColonneSaisie(i), i));
        }
        return tabColonne;
    },

    getPoidsCellule: function (ligne, colonne) {
        if (ligne === -1) return 0; //la colonne est pleine --> le poids à renvoyer sera de 0

        if (this.verifGagner(ligne, colonne)) return 100;

        return 1;

        // vérifier si on peut gagner (IA) --> on retourne un poids de 100
        // vérifier si on peut perdre (le joueur 1 peut gagner) --> on retourne un poids de 99

        //autres cas 
        //Eviter de faire un coup perdant
        //defendre (2 jetons adverse à coté --> le bloquer)
        //attaquer (2 jetons de l'IA à coté)
        //additionner les poids

    },

    verifGagner: function (ligne, colonne) {
        if (this.verifGagnerEnLigne(ligne, colonne, joueur)) return true;
        if (this.verifGagnerEnColonne(ligne, colonne, joueur)) return true;
        if (this.verifGagnerEnDiagonale(ligne, colonne, joueur)) return true;
    },

    verifGagnerEnLigne: function (ligne, colonne, joueur) {
        var cpt = 1; //correspond au jeton qu'on veux placer dans la colonne
        if (jeu.alignesEn4[ligne][colonne + 1]===joueur) {
            cpt++;
            if (jeu.alignesEn4[ligne][colonne + 2]===joueur) {
                cpt++;
                if (jeu.alignesEn4[ligne][colonne + 2]===joueur){
                    
                }
            }
        }
    },
    verifGagnerEnColonne(ligne, colonne, joueur) {

    },
    verifGagnerEnDiagonale(ligne, colonne, joueur) {

    }
}
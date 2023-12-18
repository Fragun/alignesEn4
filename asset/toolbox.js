/*déclarer le module utilisé pour activer la saisie
var readline = require('readline-sync');
*/
var toolbox = {/*
    saisieString: function(txt) {
        return readline.question(txt);
    },*/
/**
 * permet d'initialiser un tableau multidimentionnelle en fonction du nombre de ligne ou colonne passé en parametre
 * @param {*} nombreLigne 
 * @param {*} nombreColonne 
 * @param {*} vide 
 * @returns 
 */
    creationTableau: function(nombreLigne, nombreColonne, vide = '')  {
        let tableau = [];
        for (let i=0; i<nombreLigne ; i++) {
            let ligne = [];
            for (let j=0; j<nombreColonne; j++) {
                ligne.push(vide); 
            }
            tableau.push(ligne);   
        }
        return tableau;
    }
}


/*module.exports = toolbox;*/
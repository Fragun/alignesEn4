//var toolbox = require('./toolbox.js');
//On crée l'objet jeu 
var jeu = {
    //on choisit le nombre de ligne ou colonne du tableau ici
    nombreLigne : 6,
    nombreColonne : 7,
    joueur1 : 'x',
    joueur2 : 'o',
    alignesEn4 : [],
    initialisation : function() {
        this.alignesEn4 = toolbox.creationTableau(this.nombreLigne, this.nombreColonne, 0);
    },
    /**
     * permet d'afficher un tableau de puissance 4
     */
    afficherAlignesEn4 : function() {
        const jeu = document.querySelector('#jeu');
        console.log(jeu);
        jeu.innerHTML = '';

        let content = "<table class='justify-content-center bg-black'>";
            for(let i=0; i < this.nombreLigne;i++){
                content += "<tr>";
                for(let j=0; j< this.nombreColonne;j++){
                    content += "<td class='border text-center' style='width:100px; height:100px'>";
                    if(this.alignesEn4[i][j]=== 0){
                        content += "";
                    }else if(this.alignesEn4[i][j]=== 1){
                        content += "<img src='./asset/img/J1.png'/>";
                    }else if(this.alignesEn4[i][j]=== 2){
                        content += "<img src='./asset/img/J2.png'/>";
                    }
                    content += "</td>";
                }
                content += "</tr>";
            } 
            content += "<tr>";
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(1)">Colonne 1</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(2)">Colonne 2</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(3)">Colonne 3</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(4)">Colonne 4</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(5)">Colonne 5</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(6)">Colonne 6</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onClick="jouer(7)">Colonne 7</button></td>';
            content += "</tr>";
        content += "</table>";
        jeu.innerHTML = content;
        /*for (let i = 0; i < this.alignesEn4.length; i++) {
            let ligne = "";
            for (let j = 0; j < this.alignesEn4[i].length; j++) {
                ligne += "| ";
                if (this.alignesEn4[i][j] === "vide") {
                    ligne += "_";
                } else if(this.alignesEn4[i][j] === 1){
                    ligne += this.joueur1;
                } else if(this.alignesEn4[i][j] === 2){
                    ligne += this.joueur2;
                }  
                ligne += " |";       
            }
        console.log(ligne);   
        }*/
    },

    jouerCase : function(joueur, ligne, colonne){
        this.alignesEn4[ligne][colonne-1] = joueur;
    },

    /**
    * fonction permettant de retourner la premiere case vide d'une colonne
    * @param {number} colonne return -1 si la colonne est pleine
    * @returns 
    */
    trouverLigneVideSelonColonneSaisie: function (colonne){
        for(var i=this.nombreLigne-1; i>=0; i--){
            if(this.verifCaseVide(i, colonne)) return i;
        }
        return -1;
    },
    /**
     * Fonction permettant de retourner si une cellule est vide (retourne true/false)
     * @param {Number} ligne 
     * @param {Number} colonne 
     * @returns 
     */
    verifCaseVide: function (ligne, colonne) {
        return this.alignesEn4[ligne][colonne-1] === 0;
    },

    //parseInt permet de transformer la chaine de caratere de la fonction question en Entier ()
    /**
     * Fonction permettant de saisir une colonne 
     * @returns 
     */
    saisirColonne: function () {
        return parseInt(toolbox.saisieString("Quelle colonne ?"));
    },

    /**
     * Fonction permettant de verifier si un joueur à gagné
     * @param {Number} joueur 
     * @returns 
     */
    verificationFinDeJeu: function(joueur){
        if (this.verificationFinJeuLigne(joueur) || this.verificationFinJeuColonne(joueur) || this.verificationFinJeuDiagonale(joueur)) {
            return true;
        }
        return false;
    },
    /**
     * Fonction permettant de verifier si un joueur à gagner sur une ligne
     * @param {Number} joueur 
     * @returns 
     */
    verificationFinJeuLigne: function (joueur) {
        for (let index = this.nombreLigne-1; index>=0; index--){
            for (let j=0;j<this.nombreColonne-3; j++){
                if( this.alignesEn4[index][j] === joueur &&
                    this.alignesEn4[index][j+1] === joueur &&
                    this.alignesEn4[index][j+2] === joueur &&
                    this.alignesEn4[index][j+3] === joueur 
                    ) {
                    return true;
                }
            }        
        }
        return false
    },
    /**
     * Fonction permettant de verifier si un joueur à gagner sur une colonne
     * @param {Number} joueur 
     * @returns 
     */
    verificationFinJeuColonne: function (joueur){
        for (let index=0;index<this.nombreColonne; index++ ){
            for (let j = this.nombreLigne-4; j>=0; j--){
                if( this.alignesEn4[j][index] === joueur &&
                    this.alignesEn4[j+1][index] === joueur &&
                    this.alignesEn4[j+2][index] === joueur &&
                    this.alignesEn4[j+3][index] === joueur 
                    ) {
                    return true;
                }
            }        
        }
        return false
    },
    /**
     * Fonction permettant de verifier si un joueur à gagner sur une diagonale
     * @param {Number} joueur 
     * @returns 
     */
    verificationFinJeuDiagonale: function (joueur) {
        for (let index = this.nombreLigne-1; index>=3; index--){
            for (let j=0;j<this.nombreColonne; j++){
                if( this.alignesEn4[index][j] === joueur &&
                    this.alignesEn4[index-1][j+1] === joueur &&
                    this.alignesEn4[index-2][j+2] === joueur &&
                    this.alignesEn4[index-3][j+3] === joueur)
                    return true;
                else if(this.alignesEn4[index][j] === joueur &&
                        this.alignesEn4[index-1][j-1] === joueur &&
                        this.alignesEn4[index-2][j-2] === joueur &&
                        this.alignesEn4[index-3][j-3] === joueur)
                        return true;
                }
            }        
        return false;
    }
}
//module.exports = jeu;
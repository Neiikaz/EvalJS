// Je récupère mes éléments qui sont dans mon DOM avec des getElementById
let mail = document.getElementById('email');
let mdp = document.getElementById('password');
let generMdp = document.getElementById('genererPassword');
let seeMdp = document.getElementById('voirPassword');
let repeatMdp = document.getElementById('password2');
let color = document.getElementById('couleur');
let mailLog = document.getElementById('email_login');
let mdpLog = document.getElementById('password_login');

//Je créer mon tableau contenant mes lettre minuscules
//Mes 26 lettres de l'alphabet
let tabLettre = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Je créer mon tableau contenant mes lettres MAJUSCULES
let tabLettreMaj = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'E'];
//Je créer mon tableau contenant mes caractères spéciaux
let tabCaracSpe = ["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];
// Je créer mon tableau contenant mes chiffres de 0 à 9
let tabChiffre = [1,2,3,4,5,6,7,8,9,0];
console.log(tabLettre);
console.log(tabLettreMaj);
console.log(tabCaracSpe);
console.log(tabChiffre);

// Je regroupe mes tableau en un seul avec la méthode Concat()
let regroupeTab = tabLettre.concat(tabLettreMaj,tabCaracSpe,tabChiffre);
console.log(regroupeTab);

// J'initialise une variable "Aléatoire" vide pour pouvoir mettre mon MDP dedans
let aleatoire ='';
let lettre ='';
let maj ='';
let carac ='';
let num ='';

// Je crée une boucle afin de générer un MDP aléatoirement
    for (let i=0; i<7 || i<15; i++){
    aleatoire += regroupeTab[Math.floor(Math.random() * regroupeTab.length)];
}
console.log(aleatoire);
//Test génération et regroupement pour 16 caractère 2 Maj/3 Spé/2 carac/ 9 Min
    for(let l=0; l<9; l++){
        lettre += tabLettre[Math.floor(Math.random() * tabLettre.length)];
    }
console.log(lettre);
    for(let m=0; m<2; m++){
        maj += tabLettreMaj[Math.floor(Math.random() * tabLettreMaj.length)];
}
console.log(maj);
    for(let l=0; l<3; l++){
        carac += tabCaracSpe[Math.floor(Math.random() * tabCaracSpe.length)];
}
console.log(carac);
    for(let l=0; l<2; l++){
        num += tabChiffre[Math.floor(Math.random() * tabChiffre.length)];
}
console.log(num);
// Si je clique sur générer alors j'affiche dans mon champs la valeur de la génération de mot de passe et si générer alors je peux cliquer sur Voir pour voir le mdp générer
// function cliqueGen(){
//     for (let i=0; i<7 && i<15; i++){
//         aleatoire += regroupeTab[Math.floor(Math.random() * regroupeTab.length)];
//     }
//         mdp= aleatoire;
// }
o=true;
function voir(){
    if(o){
        document.getElementById("password").setAttribute("type", "text");
        mdp=false;
    }
}

// //J'ajoute un évenement à mon button générer mdp
generMdp.addEventListener('click', cliqueGen);
// //J'ajoute un événement à bouton voir
seeMdp.addEventListener('click',voir);

/**
 * @author:konate mamadou
 * @Title-projet: Mini Projet #1 - Jeu De Coloriage
 */

/**  selectionner des deux div */

//divLeft est la div du cote gauche
const divLeft = document.getElementById('leftbar')

//divRight est la div du cote droite
const divRight = document.getElementById('rightbar')
/** fin selection*/

/** les propietes css du divLeft */

divLeft.style.display='grid'
divLeft.style.gap = '5px'
divLeft.style.gridTemplateColumns = 'repeat(3,1fr)'
divLeft.style.gridTemplateRows = 'repeat(8,1fr)'
divLeft.style.height = '100vh'
divLeft.style.width = '20%'
divLeft.style.float = 'left'
divLeft.style.padding = '5px'
divLeft.style.backgroundColor = '#c8d6e5'

/** fin des proprietes css du divLeft */

/** les propietes css du divRight */

divRight.style.display = 'grid'
divRight.style.gridTemplateColumns = 'repeat(60,1fr)'
divRight.style.height = '100vh'
divRight.style.padding = '5px 5px 5px 0'

/** fin des propietes css du divLeft */

/** creation des elements de la balise de leftbar */

    // creation du bonton effacer
        const btn = document.createElement('button')
        btn.innerHTML = 'Effacer'
        divLeft.appendChild(btn)
        // application du code css sur le bouton

        btn.style.gridColumn = '1/4'
        btn.style.backgroundColor = 'whitesmoke'
        btn.style.border = 'none'
        btn.style.borderRadius = '8px'
        btn.style.color = 'black'
        btn.style.padding = '5px'
        btn.style.textAlign = 'center'
        btn.style.textDecoration = 'none'
        btn.style.display = 'inline-block'
        btn.style.fontSize = '22px'
        btn.style.margin = '4px 2px'
        btn.style.cursor = 'pointer'
        //fin css du boutton
    // fin de la creation du bouton

    //creation des div 's pour le choix des couleurs
        //creations des couleurs
            
            const colors = ['red','orangered','orange','yellow','yellowgreen','lightgreen','green','#eb3b5a','cyan','lightskyblue','dodgerblue','blue','darkblue','indigo','darkmagenta','violet','lightpink','lightgray','gray','white','black']
        
        //fin de la creation des couleurs

        //creation des div en fonction des couleurs que nous allons utilisé dans notre programme
            
            // je fais une boucle qui va parcourire les couleurs que j'ai et va creer les differents div's

                for(let colore of colors){
                    let divchilddivfelt = document.createElement('div')
                    divLeft.appendChild(divchilddivfelt)
                    divchilddivfelt.style.backgroundColor = colore
                }
            
            // fin de la boucle pour la creation des div's en fonction des couleurs
        
            //fin de la creation des div's
    
    // fin de la creation des div's de couleurs

/** fin creation des elements du div de leftright*/

/** cretion des elements du div rightbar */
    // declaration du nombre de div que j'ai besoin

    let nbchildDivRight = 1380

    for( let childiv = 0; childiv < nbchildDivRight; childiv++){
        let childDivRight = document.createElement('div')// creation des div enfants
        childDivRight.classList.add('item_childDivRight') // creation de la class des div enfants
        childDivRight.style.backgroundColor = 'white'
        childDivRight.style.width='20px'
        childDivRight.style.height = '30px'
        divRight.appendChild(childDivRight)

    }

/** fin de la cretion des elements du div rightbar */

/**
 * @author: Konate Mamadou
 */

// Déclaration et initialisation des variables color et mousedown
let color = null;
let mousedown = false;

// Sélection des éléments du DOM
let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#leftbar > *");
let fill_blocks = document.querySelectorAll("#rightbar > *");
let clear_button = document.getElementsByTagName("button")[0];

// Ajout d'un écouteur d'évènement sur le bouton "clear" pour effacer les blocs de couleur lorsque l'utilisateur clique dessus
clear_button.addEventListener("click", function(){
    for (let fill_block of fill_blocks){
        fill_block.style.backgroundColor = "white";
    }
});

// Ajout d'un écouteur d'évènement sur le corps du document pour mettre à jour la variable mousedown lorsque l'utilisateur appuie sur le bouton de la souris
body.addEventListener("mousedown", function(){
    mousedown = true;
})

// Ajout d'un écouteur d'évènement sur le corps du document pour mettre à jour la variable mousedown lorsque l'utilisateur relâche le bouton de la souris
body.addEventListener("mouseup", function(){
    mousedown = false;
})

// Boucle sur les blocs de couleur et ajout d'un écouteur d'évènement pour mettre à jour la variable color lorsque l'utilisateur clique sur un bloc de couleur
for (let color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

// Boucle sur les blocs de remplissage et ajout d'écouteurs d'évènement pour remplir les blocs de couleur lorsque l'utilisateur clique ou glisse la souris sur eux
for (let fill_block of fill_blocks){
    fill_block.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color; 
        
        console.log(color)
    });
    fill_block.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}



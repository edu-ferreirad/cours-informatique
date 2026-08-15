var moncanvas = document.getElementById("dessin");
var ctx = moncanvas.getContext("2d");
var b;
var c;
var de;

// Redimensionnement automatique du canvas et de l'affichage
function resizeCanvas() {
    moncanvas.width = window.innerWidth;
    moncanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Fonction pour ajouter les boutons de fin de partie
function addNavigationButtons() {
    // Supprime d'abord les boutons s'ils existent déjà pour éviter les doublons
    var existingContainer = document.getElementById("end-buttons-container");
    if (existingContainer) {
        existingContainer.remove();
    }

    // Création du conteneur des boutons
    var container = document.createElement("div");
    container.id = "end-buttons-container";
    container.style.position = "fixed";
    container.style.bottom = "10%";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.zIndex = "1000";
    container.style.textAlign = "center";

    // Style commun des boutons
    var buttonStyle = "padding: 12px 24px; margin: 0 10px; font-size: 16px; font-weight: bold; cursor: pointer; border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: background 0.2s;";

    // Bouton Recommencer
    var btnRestart = document.createElement("button");
    btnRestart.innerText = "Recommencer";
    btnRestart.style.cssText = buttonStyle + " background-color: #4CAF50; color: white;";
    btnRestart.onclick = function() {
        window.location.href = "PD/Debut_enfant.html";
    };

    // Bouton Accueil / Index
    var btnIndex = document.createElement("button");
    btnIndex.innerText = "Accueil";
    btnIndex.style.cssText = buttonStyle + " background-color: #2196F3; color: white;";
    btnIndex.onclick = function() {
        window.location.href = "PD/index.html";
    };

    container.appendChild(btnRestart);
    container.appendChild(btnIndex);
    document.body.appendChild(container);
}

// Fin négative 1 -> perdu1.jpg
function scene_M1(){
    document.body.style.backgroundImage = "url('perdu1.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    window.alert("Afin d'éviter tout conflit, ne prends pas d'initiative dans le dos de tes parents. Privilégie toujours le dialogue. Pour plus de conseils, regarde la brochure avec tes parents.");
    addNavigationButtons();
}

// Fin négative 2 -> perdu2.jpg
function scene_M2(){
    document.body.style.backgroundImage = "url('perdu2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    window.alert("Il ne s'agit ici pas d'une erreur en tant que telle, car tu peux avoir ton jardin secret. Néanmoins, un dialogue sincère est toujours préférable à des cachotteries. Pour plus de conseils, regarde la brochure et refais le jeu avec tes parents !");
    addNavigationButtons();
}

// Fin négative 3 -> perdu3.jpg
function scene_M3(){
    document.body.style.backgroundImage = "url('perdu3.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    window.alert("Comme tu t'es connecté au réseau d'un inconnu, tu as laissé le hasard décider à ta place, ce qui comporte certains risques (par exemple, de donner des informations personnelles à des personnes malveillantes...). Un dialogue sincère est toujours préférable à des cachotteries. Pour plus de conseils, regarde la brochure et refais le jeu avec tes parents !");
    addNavigationButtons();
}

// Scène du début 
function scene_1(){
    document.body.style.backgroundImage = "url('maison1.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        do{
            b = window.prompt("Tu viens de recevoir ton smartphone, mais tu n'as pas accès à internet. Toi, tu souhaites la connexion pour pouvoir t'inscrire sur les réseaux. Tu décides de demander un abonnement 5G à tes parents. Est-ce que tu leur donnes les vraies raisons?\n\nDis-tu la vérité ? (o/n)");
            if (b !== null) b = b.trim().toLowerCase();
            
            if (b === "n"){
                scene_M1();
            } else if (b === "o"){
                scene_2();
            }
        }while(b !== "o" && b !== "n");
    }, 3000);
}

function scene_2(){
    document.body.style.backgroundImage = "url('chambre.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        do{
            c = window.prompt("Une fois ton abonnement conclu, tu décides de t'inscrire sur les réseaux et de suivre tes copains. L'un d'entre eux te dit que, pour être tranquille avec tes parents, tu devrais créer un autre compte où rien ne se passe.\n\nSuis-tu le conseil de ton ami ? (o/n)");
            if (c !== null) c = c.trim().toLowerCase();
            
            if (c === "n"){
                scene_3();
            } else if(c === "o"){
                scene_M2();
            }
        }while(c !== "o" && c !== "n");
    }, 3000);
}

function scene_3(){
    document.body.style.backgroundImage = "url('maison2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        do{
            c = window.prompt("Après des semaines d'utilisation, la fréquence des notifications sur ton smartphone devient de plus en plus importante. Tes parents décident dans la hâte de mettre un contrôle parental. Énervé, tu décides de scanner le réseau et tu constates qu'il y a un WiFi gratuit. Ne sachant pas à qui il appartient, tu ne maîtrises donc pas les événements.\n\nEst-ce que tu te connectes? (o/n)");
            if (c !== null) c = c.trim().toLowerCase();
            
            if (c === "o"){
                De_attaque();
            } else if(c === "n"){
                De_fuite();
            }
        }while(c !== "o" && c !== "n");
    }, 3000);
}

// Victoire 1 -> victoire_1.jpg
function scene_4(){
    document.body.style.backgroundImage = "url('victoire_1.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("Bien que tu aies laissé le hasard intervenir, tu as eu de la chance que le Wifi auquel t'es connecté ne soit pas malveillant. N'oublie pas que tes parents sont là pour t'accompagner quoi qu'il arrive; n'hésite donc pas à parler avec eux. Pour plus de conseils, regarde la brochure et refais le jeu avec tes parents !");
        document.body.style.backgroundImage = "url('the_end.jpg')";
        addNavigationButtons();
    }, 3000);
}

function scene_5(){
    document.body.style.backgroundImage = "url('maison3.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        do{
            c = window.prompt("Tu as donc décidé de ne pas te connecter. Tu laisses le temps passer mais tu constates que tes parents ne cèdent pas. Tu es donc de plus en plus irritable. Malgré ta colère, souhaites-tu entamer le dialogue afin de défendre ton point de vue ?\n\nEntames-tu le dialogue, malgré ta colère ? (o/n)");
            if (c !== null) c = c.trim().toLowerCase();
            
            if (c === "o"){
                De_combat_roi();
            } else if(c === "n"){
                scene_cachot();
            }
        }while(c !== "o" && c !== "n");
    }, 3000);
}

// Perdu 4 -> perdu4.jpg
function scene_cachot(){
    document.body.style.backgroundImage = "url('perdu4.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("Le dialogue est fondamental. Tes parents sont là pour t'accompagner quoi qu'il arrive, n'hésite donc pas à parler avec eux. Pour plus de conseils, regarde la brochure et refais le jeu avec tes parents !");
        addNavigationButtons();
    }, 3000);
}

// Perdu 5 -> perdu5.jpg
function scene_cachot1(){
    document.body.style.backgroundImage = "url('perdu5.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("Bien que le dialogue soit fondamental, ta colère a fait que t'es emporté et la communication est rompue. Ton intention était bonne, mais lorsque tu souhaites instaurer un dialogue, prends bien ton temps, regarde la brochure et refais le jeu avec tes parents !");
        addNavigationButtons();
    }, 3000);
}

// Victoire 2 -> victoire_2.jpg
function scene_7(){
    document.body.style.backgroundImage = "url('victoire_2.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("Bravo ! Malgré ta colère, ta capacité de dialogue a permis de désamorcer une situation tendue. N'oublie pas que tes parents sont là pour t'accompagner quoi qu'il arrive, n'hésite donc pas à parler avec eux. Pour plus de conseils, regarde la brochure et refais le jeu avec tes parents !"); 
        addNavigationButtons();
    }, 3000);
}

function De_attaque(){
    de = Math.floor(Math.random()*6+1);
    if(de < 5){
        scene_4();
    } else {
        scene_M3();
    }
}

function De_fuite(){
    de = Math.floor(Math.random()*6+1);
    if(de < 5){
        scene_5();
    } else {
        scene_M3();
    }
}

function De_combat_roi(){
    de = Math.floor(Math.random()*6+1);
    if(de < 6){
        scene_cachot1();
    } else {
        scene_7();
    }
}

// Lancement du jeu
scene_1();

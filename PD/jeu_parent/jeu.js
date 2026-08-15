var moncanvas = document.getElementById("dessin");
var ctx = moncanvas.getContext("2d");
var b;
var c;
var de;

// Redimensionnement automatique pour s'adapter à l'écran
function resizeCanvas() {
    moncanvas.width = window.innerWidth;
    moncanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Configuration CSS commune pour les scènes
function setBackground(url) {
    document.body.style.backgroundImage = "url('" + url + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

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
        window.location.href = "../Debut_parent.html";
    };

    // Bouton Accueil / Index
    var btnIndex = document.createElement("button");
    btnIndex.innerText = "Accueil";
    btnIndex.style.cssText = buttonStyle + " background-color: #2196F3; color: white;";
    btnIndex.onclick = function() {
        window.location.href = "../index.html";
    };

    container.appendChild(btnRestart);
    container.appendChild(btnIndex);
    document.body.appendChild(container);
}

// Fins négatives
function scene_M1(){
    setBackground("perdu1.jpg");
    window.alert("Afin d'éviter tout conflit, ne prenez pas d'initiative dans le dos de votre enfant. Privilégiez toujours le dialogue. Pour plus de conseils, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:");
    addNavigationButtons();
}

function scene_M2(){
    setBackground("perdu2.jpg");
    window.alert("Il ne s'agit ici pas d'une erreur, surtout si vous n'avez pas les moyens de payer un abonnement. Cependant, votre adolescent arrivera toujours à trouver une connexion (Wifi de la ville, partage d'un ami, ...). Avec un abonnement, vous pourrez donc au moins garder un certain contrôle. Afin d'avoir plus de conseils, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:");
    addNavigationButtons();
}

function scene_M3(){
    setBackground("perdu3.jpg");
    window.alert("N'ayant pas anticipé, vous avez laissé le hasard décider à votre place, ce qui comporte certains risques (harcèlement, addiction, ...). Afin de pouvoir anticiper un éventuel problème, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:");
    addNavigationButtons();
}

// Scène du début
function scene_1(){
    setBackground("smartphone1.jpg");
    setTimeout(function(){
        do{
            b = window.prompt("Vous êtes dans le magasin de smartphones et le vendeur vous informe que vous pouvez mettre un logiciel d'écoute sur le téléphone de votre fils si cela peut vous rassurer.\n\nAcceptez-vous? (o/n)");
            if (b !== null) b = b.trim().toLowerCase();
            
            if (b === "o"){
                scene_M1();
            } else if (b === "n"){
                scene_2();
            }
        } while(b !== "o" && b !== "n");
    }, 3000);
}

function scene_2(){
    setBackground("maison1.jpg");
    setTimeout(function(){
        do{
            c = window.prompt("Une fois rentré à la maison, vous donnez le smartphone à votre enfant qui vous supplie de lui acheter un abonnement 5G, pour que vous puissiez mieux le contacter, dit-il!\n\nAcceptez-vous de conclure cet abonnement ? (o/n)");
            if (c !== null) c = c.trim().toLowerCase();
            
            if (c === "o"){
                scene_3();
            } else if(c === "n"){
                scene_M2();
            }
        } while(c !== "o" && c !== "n");
    }, 3000);
}

function scene_3(){
    setBackground("maison2.jpg");
    setTimeout(function(){
        do{
            c = window.prompt("Après des semaines d'utilisation, vous constatez que la fréquence des notifications est importante. Vous constatez aussi que vous avez omis de mettre un contrôle parental. Vous ne maîtrisez donc pas les événements. Même si cela est un peu tardif, décidez-vous de l'installer, dans la hâte?\n\nConfigurez-vous le contrôle parental dans la hâte? (o/n)");
            if (c !== null) c = c.trim().toLowerCase();
            
            if (c === "o"){
                De_attaque();
            } else if(c === "n"){
                De_fuite();
            }
        } while(c !== "o" && c !== "n");
    }, 3000);
}

// Victoire 1
function scene_4(){
    setBackground("victoire_1.jpg");
    setTimeout(function(){
        window.alert("Bien que vous ayez laissé le hasard intervenir, vous avez su prendre les bonnes décisions, au bon moment. Anticipez, dialoguez et n'oubliez pas que vous êtes le modèle. Pour plus de conseils, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:");
        setBackground("the_end.jpg");
        addNavigationButtons();
    }, 3000);
}

function scene_5(){
    setBackground("maison3.jpg");
    setTimeout(function(){
        do{
            c = window.prompt("Vous avez donc décidé de ne pas installer de contrôle parental. Vous laissez le temps passer, mais vous constatez que votre enfant est de plus en plus irritable. Malgré une longue journée de travail, souhaitez-vous entamer le dialogue?\n\nEntamez-vous le dialogue, malgré la fatigue ? (o/n)");
            if (c !== null) c = c.trim().toLowerCase();
            
            if (c === "o"){
                De_combat_roi();
            } else if(c === "n"){
                scene_cachot();
            }
        } while(c !== "o" && c !== "n");
    }, 3000);
}

// Perdu 4
function scene_cachot(){
    setBackground("perdu4.jpg"); 
    setTimeout(function(){
        window.alert("Le dialogue est fondamental pour accompagner votre enfant : s'il ne peut pas se confier à vous, il risque de le faire sur les réseaux... Afin d'avoir plus de conseils, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:");
        addNavigationButtons();
    }, 3000);
}

// Perdu 5
function scene_cachot1(){
    setBackground("perdu5.jpg"); 
    setTimeout(function(){
        window.alert("Bien que le dialogue, fondamental pour accompagner votre enfant, ait été entamé, votre fatigue a fait que vous vous êtes emporté. La communication étant rompue, votre enfant pourrait ne plus se confier à vous et le faire sur les réseaux. Votre intention était bonne, mais lorsque vous souhaitez instaurer un dialogue, prenez bien votre temps. Afin d'avoir plus de conseils, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:");
        addNavigationButtons();
    }, 3000);
}

// Victoire 2
function scene_7(){
    setBackground("victoire_2.jpg"); 
    setTimeout(function(){
        window.alert("Bravo, malgré la fatigue, votre capacité de dialogue a permis de désamorcer la situation tendue. Anticipez, dialoguez et n'oubliez pas que vous êtes le modèle. Pour plus de conseils, référez-vous à la brochure !\n\nPour donner votre avis, veuillez scanner le QR code ci-dessous:"); 
        addNavigationButtons();
    }, 3000);
}

// Logique des dés
function De_attaque(){
    de = Math.floor(Math.random()*6+1);
    if(de < 5){ scene_4(); } else { scene_M3(); }
}
function De_fuite(){
    de = Math.floor(Math.random()*6+1);
    if(de < 5){ scene_5(); } else { scene_M3(); }
}
function De_combat_roi(){
    de = Math.floor(Math.random()*6+1);
    if(de < 6){ scene_cachot1(); } else { scene_7(); }
}

// Démarrage
scene_1();

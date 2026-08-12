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

//fin négatives
function scene_M1(){
    document.body.style.backgroundImage = "url('perdu1.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    window.alert("FIN: réessaie pour trouver les autres fins");
}
function scene_M2(){
    document.body.style.backgroundImage = "url('perdu2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    window.alert("FIN: réessaie pour trouver les autres fins");
}
function scene_M3(){
    document.body.style.backgroundImage = "url('perdu3.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    window.alert("FIN: réessaie pour trouver les autres fins");
}

//scene du debut 
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

function scene_4(){
    document.body.style.backgroundImage = "url('victoire_1.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("FIN: réessaie pour trouver les autres fins");
        document.body.style.backgroundImage = "url('the_end.jpg')";
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

function scene_cachot(){
    document.body.style.backgroundImage = "url('perdu4.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("FIN: réessaie pour trouver les autres fins");
    }, 3000);
}

function scene_cachot1(){
    document.body.style.backgroundImage = "url('perdu5.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("FIN: réessaie pour trouver les autres fins");
    }, 3000);
}

function scene_7(){
    document.body.style.backgroundImage = "url('victoire_2.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    setTimeout(function(){
        window.alert("FIN: réessaie pour trouver les autres fins"); 
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

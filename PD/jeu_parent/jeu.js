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

// Fins négatives
function scene_M1(){
    setBackground("perdu1.jpg");
    window.alert("Afin d'éviter tout conflit, ne prenez pas d'initiative dans le dos de votre enfant. Privilégiez toujours le dialogue. Pour plus de conseils, référez-vous à la brochure !\n\n);
}
function scene_M2(){
    setBackground("perdu2.jpg");
    window.alert("Il ne s'agit ici pas d'une erreur, surtout si vous n'avez pas les moyens de payer un abonnement. Cependant, votre adolescent arrivera toujours à trouver une connexion (Wifi de la ville, partage d'un ami, ...). Avec un abonnement, vous pourrez donc au moins garder un certain contrôle. Afin d'avoir plus de conseils, référez-vous à la brochure !\n\n);
}
function scene_M3(){
    setBackground("perdu3.jpg");
    window.alert("N'ayant pas anticipé, vous avez laissé le hasard décider à votre place, ce qui comporte certains risques (harcèlement, addiction, ...). Afin de pouvoir anticiper un éventuel problème, référez-vous à la brochure !\n\n);
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

function scene_4(){
    setBackground("victoire_1.jpg");
    setTimeout(function(){
        window.alert("Bien que vous ayez laissé le hasard intervenir, vous avez su prendre les bonnes décisions, au bon moment. Anticipez, dialoguez et n'oubliez pas que vous êtes le modèle. Pour plus de conseils, référez-vous à la brochure !\n\n);
        setBackground("the_end.jpg");
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

function scene_cachot(){
    setBackground("perdu4.jpg"); 
    setTimeout(function(){
        window.alert("Le dialogue est fondamental pour accompagner votre enfant : s'il ne peut pas se confier à vous, il risque de le faire sur les réseaux... Afin d'avoir plus de conseils, référez-vous à la brochure !\n\n);
    }, 3000);
}

function scene_cachot1(){
    setBackground("perdu5.jpg"); 
    setTimeout(function(){
        window.alert("Bien que le dialogue, fondamental pour accompagner votre enfant, ait été entamé, votre fatigue a fait que vous vous êtes emporté. La communication étant rompue, votre enfant pourrait ne plus se confier à vous et le faire sur les réseaux. Votre intention était bonne, mais lorsque vous souhaitez instaurer un dialogue, prenez bien votre temps. Afin d'avoir plus de conseils, référez-vous à la brochure !\n\n);
    }, 3000);
}

function scene_7(){
    setBackground("victoire_2.jpg"); 
    setTimeout(function(){
        window.alert("Bravo, malgré la fatigue, votre capacité de dialogue a permis de désamorcer la situation tendue. Anticipez, dialoguez et n'oubliez pas que vous êtes le modèle. Pour plus de conseils, référez-vous à la brochure !\n\n); 
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

var moncanvas = document.getElementById("dessin");
var ctx = moncanvas.getContext("2d");
var a;
var b
var de;
//fin négatives
function scene_M1(){
    document.body.style.backgroundImage = "url(perdu1.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
	window.alert("FIN: réessayez pour trouver les autres fins");
	
}
function scene_M2(){
    document.body.style.backgroundImage = "url(perdu2.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
	window.alert("FIN: réessayez pour trouver les autres fins");
}
function scene_M3(){
    document.body.style.backgroundImage = "url(perdu3.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
	window.alert("FIN: réessayez pour trouver les autres fins");
}
//scene du debut 
function scene_1(){
    document.body.style.backgroundImage = "url(smartphone1.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    //seTimeout-> fonction pour attendre avant de poser la question
    setTimeout(function(){
        //question
        window.alert("Vous êtes dans le magasin de smartphones et le vendeur vous informe que vous pouvez mettre un logiciel d'écoute sur le téléphone de votre fils si cela peut vous rassurer.");
//boucle demander jusqu'a obtenir o ou n 
       do{

            b = window.prompt(' Acceptez-vous? ');
            if (b=="o"){
				scene_M1();
            }
            if (b=="n"){
                scene_2();
            }

        }while(b!="o" && b!="n");

    
    }, 3000);
}


function scene_2(){
    document.body.style.backgroundImage = "url(maison1.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("Une fois rentré à la maison, vous donnez le smartphone à votre enfant qui vous supplie de lui acheter un abonnement 5G, pour que vous puissiez mieux le contacter, dit-il!");
       
        do{
            c = window.prompt('Acceptez-vous de conclure cet abonnement ?');
            if (c=="o"){
                scene_3();
            }
            if(c == "n"){
                scene_M2();
            }
        }while(c!="o" && c!="n")
        
    }, 3000);

}

function scene_3(){
    document.body.style.backgroundImage = "url(maison2.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("Après des semaines d'utilisation, vous constatez que la fréquence des notifications est importante. Vous constatez aussi que vous avez omis de mettre un contrôle parental. Vous ne maîtrisez donc pas les événements. Même si cela est un peu tardif, décidez-vous de l'installer, dans la hâte?");
       
        do{
            c = window.prompt('Configurez-vous le contrôle parental dans la hâte?');
            if (c=="o"){
                De_attaque();
            }
            if(c == "n"){
                De_fuite();
            }
        }while(c!="o" && c!="n")
        
    }, 3000);
}

function scene_4(){

    document.body.style.backgroundImage = "url(victoire_1.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("FIN: réessayez pour trouver les autres fins");
        document.body.style.backgroundImage="url(the_end.jpg)"
            
    }, 3000);
}

function scene_5(){

    document.body.style.backgroundImage = "url(maison3.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("Vous avez donc décidé de ne pas installer de contrôle parental. Vous laissez le temps passer, mais vous constatez que votre enfant est de plus en plus irritable. Malgré une longue journée de travail, souhaitez-vous entamer le dialogue? ");
           
        do{
            c = window.prompt('Entamez-vous le dialogue, malgré la fatigue ?');
            if (c=="o"){
                De_combat_roi();
            }
            if(c == "n"){
                scene_cachot();
            }
        }while(c!="o" && c!="n")
            
    }, 3000);
}

function scene_cachot(){
    
    document.body.style.backgroundImage = "url(perdu4.jpg)"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("FIN: réessayez pour trouver les autres fins");
    }, 3000);
}

function scene_cachot1(){
    
    document.body.style.backgroundImage = "url(perdu5.jpg)"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("FIN: réessayez pour trouver les autres fins");
    }, 3000);
}


function scene_7(){

    document.body.style.backgroundImage = "url(victoire_2.jpg)"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setTimeout(function(){
        window.alert("FIN: réessayez pour trouver les autres fins"); 
    }, 3000);
    document.body.style.backgroundImage = "url(victoire_2.jpg))";
}
function De_attaque(){

	de = Math.floor(Math.random()*6+1);
	
	if(de < 5){
		scene_4();
	}else{
        scene_M3();
    }
        
}
function De_fuite(){

	de = Math.floor(Math.random()*6+1);
	
	if(de < 5){
		scene_5();
	}else{
        scene_M3();
    }
        
}
function De_combat_roi(){

	de = Math.floor(Math.random()*6+1);
	
	if(de < 6){
		scene_cachot1();
	}else{
        scene_7();
    }
        
}
scene_1();




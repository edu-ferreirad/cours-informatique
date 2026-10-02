(function () {
  var W = {
    enfant: {
      s1: ["Expliquer ses raisons ouvre la discussion : tes parents comprennent ce qui motive ta demande et vous pouvez trouver ensemble des règles qui conviennent à chacun.",
           "Ne pas tout dire est courant. La brochure rappelle que parler de ce que l'on vit sur Internet avec quelqu'un d'ouvert reste le meilleur moyen de dissiper les zones d'ombre."],
      s2: ["Avoir un espace à soi est normal. Un compte que personne ne connaît est aussi un compte dont personne ne peut t'aider si un problème survient. En parler reste possible à tout moment.",
           "Un seul compte, c'est plus simple à gérer. En parler en famille permet de s'accorder sur ce qui est visible, et par qui."],
      s3: ["Un WiFi inconnu peut être surveillé : messages et mots de passe n'y sont pas forcément protégés. Dans le doute, ta propre connexion est plus sûre.",
           "Utiliser sa propre connexion évite ce risque. Les règles se discutent : la brochure conseille des limites claires plutôt qu'une interdiction."],
      s5: ["Ouvrir la discussion n'est pas toujours facile quand on est énervé. Le choix du moment compte autant que ce que l'on dit.",
           "Bouder est une réaction humaine. La discussion reste possible plus tard, quand chacun est plus posé."],
      s6: ["Prendre quelques minutes pour retrouver son calme aide souvent à mieux s'écouter, des deux côtés.",
           "Dire ce qu'on a sur le cœur sur le moment est naturel. Le résultat dépend aussi de l'état de chacun ce soir-là : fatigue, humeur, journée."]
    },
    parent: {
      p1: ["Des outils existent. La brochure recommande plutôt de coupler les appareils en expliquant pourquoi on le fait : la transparence garde le dialogue ouvert.",
           "Contrôler plutôt qu'interdire : la brochure propose des limites claires et des réglages de contrôle parental, présentés à l'enfant."],
      p2: ["Un abonnement offre de la souplesse et permet de convenir ensemble de règles : durée, moment, usages.",
           "Chaque famille a ses moyens et ses priorités. Un adolescent peut utiliser d'autres connexions (WiFi publics, amis) : en parler aide à rester au courant."],
      p3: ["Il n'est jamais trop tard : les réglages se mettent en place à tout moment, idéalement en expliquant à l'enfant pourquoi et comment.",
           "Le contrôle parental n'est qu'un outil parmi d'autres. Selon la brochure, le plus important est de parler de ce que l'enfant vit en ligne et de s'y intéresser."],
      p5: ["Après une longue journée, ouvrir la discussion demande de l'énergie. Le moment choisi compte autant que les mots.",
           "La fatigue est une raison valable. La discussion peut avoir lieu à un autre moment, quand chacun est disponible."],
      p6: ["Prendre quelques minutes pour retrouver son calme aide souvent à mieux s'écouter, des deux côtés.",
           "Dire ce qu'on a à dire sur le moment est naturel. Le résultat dépend aussi de l'état de chacun ce soir-là : fatigue, humeur, journée."]
    }
  };
  var R = {
    enfant: {
      r1: ["Le hasard décide (4 ou moins : tout se passe bien).", "Le réseau n'était pas malveillant. Cette fois, tout s'est bien passé.", "Le réseau n'était pas fiable. Cela arrive plus souvent qu'on ne le pense."],
      r2: ["Chacun a son état du moment, et le hasard le représente (4 ou moins).", "Ce soir-là, chacun était disponible pour s'écouter.", "Ce soir-là, la journée avait été longue pour tout le monde."],
      r3: ["Quand on parle sous le coup de l'énervement, c'est moins évident (1 seulement).", "Exceptionnellement, les mots ont été bien reçus.", "Ce soir-là, la journée avait été longue pour tout le monde."]
    },
    parent: {
      r1: ["Le hasard décide (4 ou moins : tout se passe bien).", "Les réglages étaient en place à temps.", "Un incident est survenu avant que tout soit prêt."],
      r4: ["Le hasard décide (4 ou moins : tout se passe bien).", "Rien de particulier n'est arrivé cette fois.", "Un incident est survenu avant que tout soit prêt."],
      r2: ["Chacun a son état du moment, et le hasard le représente (4 ou moins).", "Ce soir-là, chacun était disponible pour s'écouter.", "Ce soir-là, la fatigue était présente des deux côtés."],
      r3: ["Quand on parle sous le coup de la fatigue, c'est moins évident (1 seulement).", "Exceptionnellement, les mots ont été bien reçus.", "Ce soir-là, la fatigue était présente des deux côtés."]
    }
  };
  Object.keys(W).forEach(function (r) {
    var S = GAMES[r].scenes;
    Object.keys(W[r]).forEach(function (id) { W[r][id].forEach(function (t, i) { S[id].a[i].why = t; }); });
    Object.keys(R[r]).forEach(function (id) { var x = R[r][id], ro = S[id].roll; ro.hint = x[0]; ro.okt = x[1]; ro.kot = x[2]; });
  });

  var B = {
    enfant: {
      flyer: "../Ju_M_Flyer_Bildrecht_Jugendliche_A5_FR_UA_dff8929f4b.pdf",
      end: "Photos, mots de passe, messages, achats : il y a rarement une seule bonne réponse, mais en parler avec quelqu'un de confiance aide presque toujours.",
      sc: [
        ["chambre", 72, 26, "À la récré, vous prenez une photo de groupe. Un copain veut la publier sur son compte, avec toi dessus. Il ne t'a pas demandé ton avis.",
          ["Je lui dis que je préfère qu'il demande avant", "Tu as demandé à être consulté avant la publication", { data: 10, conf: 5 }, "Chacun peut demander à être consulté avant la publication d'une photo où il apparaît. Le flyer « Que montres-tu ? » propose 10 questions à se poser avant de publier, dont : toutes les personnes étaient-elles d'accord ?"],
          ["Je le laisse faire", "Tu as laissé la photo être publiée", { data: -10 }, "Ça arrive, et c'est parfois sans importance. Si une photo te gêne, tu peux toujours en parler après coup et demander qu'elle soit retirée : en parler avec la personne ou un adulte de confiance est un bon début."]],
        ["smartphone1", 48, 46, "Un ami te demande ton mot de passe de jeu « pour dépanner » : il veut te faire gagner quelques niveaux.",
          ["Je préfère le garder pour moi", "Tu as gardé ton mot de passe", { data: 10 }, "Un mot de passe personnel ouvre l'accès à tes informations et à tes achats. Le garder est un réflexe courant, et on peut proposer de jouer ensemble à la place."],
          ["Je le lui donne, c'est un ami", "Tu as donné ton mot de passe", { data: -10, conf: 5 }, "Faire confiance à un ami est naturel. Si l'amitié change, le mot de passe reste connu : le modifier est simple. Autre bonne habitude : un mot de passe différent pour chaque service."]],
        ["maison3", 52, 38, "Dans le groupe de classe, des messages moqueurs visent un camarade. Certains réagissent avec des emojis rigolos.",
          ["Je n'y participe pas et j'en parle à quelqu'un de confiance", "Tu n'as pas participé et tu en as parlé", { conf: 10, calme: 5 }, "Ne pas relayer, garder des captures d'écran et en parler à une personne de confiance sont de premiers réflexes. Le 147 (Pro Juventute) offre une écoute gratuite et anonyme, 24 h sur 24."],
          ["Je ne dis rien, je regarde", "Tu es resté en retrait", { calme: -5 }, "Rester en retrait est courant : on ne sait pas toujours quoi faire. Un simple message privé au camarade concerné peut déjà faire du bien, et le 147 reste joignable à tout moment."]],
        ["maison2", 50, 62, "Dans un jeu, un objet rare coûte 4.90 CHF. Le moyen de paiement enregistré est celui de ta famille.",
          ["J'en parle avant d'acheter", "Tu as parlé de l'achat avant de le faire", { conf: 10, data: 5 }, "En parler avant permet de s'accorder sur un budget. Beaucoup de téléphones permettent aussi de demander un mot de passe à chaque achat."],
          ["J'achète vite, ce sera plus simple", "Tu as fait l'achat directement", { conf: -5 }, "Les petits achats s'additionnent vite. Si cela arrive, en parler ensuite permet de trouver une solution ensemble et de convenir d'une règle pour la suite."]]
      ]
    },
    parent: {
      flyer: "../Ju_M_Flyer_Bildrecht_Eltern_A5_FR_UA_020891a40e.pdf",
      end: "Photos, mots de passe, messages, achats : il y a rarement une seule bonne réponse, mais en parler avec son enfant aide presque toujours.",
      sc: [
        ["chambre", 72, 26, "Vous avez pris de belles photos de l'anniversaire de votre enfant avec ses amis. Vous pensez les publier.",
          ["Je demande l'accord de mon enfant et des autres familles", "Vous avez demandé l'accord avant de publier", { conf: 10, secu: 10 }, "Chaque personne photographiée a un droit à l'image, enfants compris. Le flyer « Que montres-tu ? » propose 10 questions à se poser avant de publier, dont : toutes les personnes étaient-elles d'accord ?"],
          ["Je publie, c'est une jolie photo", "Vous avez publié la photo", { secu: -10 }, "C'est une habitude répandue. Une photo peut être retirée à tout moment si votre enfant ou une autre famille le souhaite. Les paramètres de confidentialité aident aussi : qui pourra la voir ?"]],
        ["smartphone1", 48, 46, "Vous remarquez que votre enfant utilise le même mot de passe pour tous ses comptes.",
          ["On en choisit de nouveaux ensemble", "Vous avez choisi de nouveaux mots de passe ensemble", { conf: 10, secu: 15 }, "Un mot de passe différent par service limite les dégâts si l'un d'eux est découvert. Les choisir ensemble ouvre aussi la discussion sur ce qu'il protège."],
          ["Je laisse comme ça pour l'instant", "Vous avez laissé les mots de passe tels quels", { secu: -10, calme: 5 }, "Chacun avance à son rythme. Reprendre le sujet plus tard, quand l'occasion se présente, fonctionne aussi."]],
        ["maison3", 52, 38, "Votre enfant vous montre un message blessant reçu dans un groupe de classe.",
          ["J'écoute d'abord et on garde des captures d'écran", "Vous avez écouté, puis gardé des captures d'écran", { conf: 15, calme: 5 }, "Écouter avant de réagir aide l'enfant à se confier. Les captures d'écran permettent ensuite de montrer ce qui s'est passé à l'école si besoin. Le 147 (Pro Juventute) écoute les jeunes, et Elternnotruf soutient les parents."],
          ["Je réponds tout de suite dans le groupe", "Vous avez répondu directement dans le groupe", { calme: -10, conf: -5 }, "Réagir à chaud est naturel quand on veut protéger son enfant. Un échange direct dans le groupe peut toutefois amplifier la situation : quelques minutes de recul, puis en parler avec votre enfant et l'école, laissent plus d'options."]],
        ["maison2", 50, 62, "Une notification vous informe d'un achat de 4.90 CHF dans un jeu, avec le moyen de paiement de la famille.",
          ["On en parle et on règle les achats ensemble", "Vous avez parlé des achats avec votre enfant", { conf: 10, secu: 10 }, "Un mot de passe à chaque achat et un budget convenu à l'avance évitent les surprises. La brochure rappelle aussi de vérifier la limite d'âge, qui peut changer avec des extensions."],
          ["Je supprime le jeu", "Vous avez supprimé le jeu", { conf: -10, calme: 5 }, "C'est une solution rapide. La brochure recommande plutôt de contrôler que d'interdire : un jeu supprimé peut se retrouver chez des copains. En parler garde le lien."]]
      ]
    }
  };
  Object.keys(B).forEach(function (r) {
    var g = GAMES[r], b = B[r], n = b.sc.length;
    g.flyer = b.flyer;
    g.bonus = "b1";
    b.sc.forEach(function (c, i) {
      var next = i + 1 < n ? "b" + (i + 2) : "bX";
      g.scenes["b" + (i + 1)] = {
        img: c[0], fx: c[1], sp: c[2], text: c[3], q: "Que fais-tu ?",
        a: [c[4], c[5]].map(function (o) { return { l: o[0], log: o[1], fx: o[2], why: o[3], next: next }; })
      };
      if (r === "parent") g.scenes["b" + (i + 1)].q = "Que faites-vous ?";
    });
    g.scenes.bX = { bend: 1, msg: b.end };
  });
  GAMES.parent.stats.conf[1] = "Confiance mutuelle";
  GAMES.enfant.secret = "Tu as découvert toutes les fins du jeu. Selon les jours (fatigué, énervé ou bien reposé), on ne réagit pas toujours de la même façon, et c'est normal. Ce qui revient à chaque fois : en parler, au bon moment, aide à se comprendre.";
  GAMES.parent.secret = "Vous avez découvert toutes les fins du jeu. Selon les jours (fatigué, énervé ou bien reposé), on ne réagit pas toujours de la même façon, et c'est normal. Ce qui revient à chaque fois : en parler, au bon moment, aide à se comprendre.";
})();

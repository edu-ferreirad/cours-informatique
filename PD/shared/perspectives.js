(function () {
  var O = {
    enfant: {
      s1: ["Tes parents apprécient la franchise : ils comprennent mieux ta demande et peuvent y répondre plutôt que deviner.", "Tes parents ne savent pas ce qui motive ta demande : faute d'informations, ils peuvent s'inquiéter ou imaginer le pire."],
      s2: ["Tes parents ne savent pas que ce compte existe. S'ils le découvrent, ils pourraient se sentir mis à l'écart ou inquiets.", "Tes parents voient que tu joues la transparence, ce qui les rassure et facilite les prochaines discussions."],
      s3: ["Tes parents ont mis le contrôle parental pour te protéger. Ils ne pensent pas à un WiFi inconnu : la situation leur échappe.", "Tes parents voient que tu respectes leur décision, même si elle t'énerve. Ils seront peut-être plus ouverts à en rediscuter."],
      s5: ["Tes parents sont peut-être fatigués eux aussi, mais ils sont contents que tu viennes leur parler.", "Tes parents voient que tu boudes sans savoir ce qui se passe : ils hésitent à venir te parler de peur d'aggraver les choses."],
      s6: ["Tes parents sentent ton effort pour te calmer et sont plus disposés à t'écouter.", "Tes parents reçoivent beaucoup de mots d'un coup : ils peuvent se sentir attaqués et répondre sous le coup de l'émotion."],
      b1: ["Ton copain n'avait pas pensé que cela pouvait te gêner : il apprécie souvent qu'on lui en parle franchement.", "Ton copain publie sans se douter que tu aurais préféré être consulté."],
      b2: ["Ton ami est peut-être un peu déçu, mais il comprend généralement qu'un mot de passe, ça se garde.", "Ton ami est content de ton aide ; il n'imagine pas forcément ce que le mot de passe ouvre d'autre."],
      b3: ["Le camarade visé se sent moins seul quand quelqu'un ne rit pas avec les autres.", "Le camarade visé voit les messages s'accumuler et se sent peut-être très seul."],
      b4: ["Tes parents apprécient d'être prévenus avant : ils peuvent t'aider à fixer un budget.", "Tes parents découvrent l'achat sur une notification, sans avoir pu en discuter avant."],
      b5: ["Ton ami comprend que tu répondes le lendemain : beaucoup d'autres font pareil.", "Ton ami est content de ta réponse rapide, sans voir que ta nuit raccourcit."],
      b6: ["L'inconnu passe à autre chose : un joueur bien intentionné n'a pas besoin de ces informations.", "L'inconnu en sait plus sur toi, sans que tu saches qui il est vraiment."],
      b7: ["Tes amis profitent de ta vérification : ils reçoivent une information plus fiable.", "Tes amis revoient la vidéo de plus en plus souvent, ce qui la rend plus crédible à leurs yeux."]
    },
    parent: {
      p1: ["Votre enfant ne sait pas que son téléphone est écouté. S'il le découvre, il pourrait se sentir surveillé et moins enclin à se confier.", "Votre enfant sent que vous lui faites confiance, ce qui peut l'encourager à venir vous parler en cas de souci."],
      p2: ["Votre enfant est content et se sent écouté. Il a l'occasion de montrer qu'il peut respecter des règles.", "Votre enfant peut être déçu ou se sentir exclu de son groupe d'amis, et chercher une connexion ailleurs."],
      p3: ["Votre enfant remarque le changement. Si on lui explique pourquoi, il le comprend mieux ; sinon, il peut le vivre comme une sanction.", "Votre enfant garde sa liberté, mais peut rester seul face à certaines situations s'il n'en parle pas."],
      p5: ["Votre enfant voit que vous faites un effort malgré votre fatigue, ce qui compte pour lui.", "Votre enfant peut penser que vous n'avez pas le temps pour lui et hésiter à revenir vers vous."],
      p6: ["Votre enfant perçoit votre calme et se sent plus à l'aise pour s'exprimer.", "Votre enfant reçoit beaucoup de mots d'un coup : il peut se sentir attaqué ou se fermer."],
      b1: ["Votre enfant est content d'être consulté et se sent respecté dans sa vie sociale.", "Votre enfant découvre la photo en ligne et peut être gêné devant ses amis, sans l'avoir choisi."],
      b2: ["Votre enfant apprécie de choisir avec vous : il comprend mieux pourquoi cela compte.", "Votre enfant ne voit pas de raison de changer ses habitudes et continue comme avant."],
      b3: ["Votre enfant se sent écouté et soutenu, sans avoir à gérer seul la situation.", "Votre enfant peut craindre que votre message aggrave les choses avec ses camarades."],
      b4: ["Votre enfant comprend la règle, car il a pu s'exprimer sur ses envies.", "Votre enfant perd son jeu et son temps de jeu avec ses amis, sans toujours comprendre pourquoi."],
      b5: ["Votre enfant n'est pas pris au dépourvu et peut proposer lui-même une règle.", "Votre enfant peut se sentir surveillé la nuit et le vivre comme un manque de confiance."],
      b6: ["Votre enfant est rassuré d'avoir bien fait de vous en parler.", "Votre enfant risque de ne plus oser vous parler d'incidents futurs, par peur de perdre son jeu."],
      b7: ["Votre enfant apprend à vérifier et se sent partenaire plutôt qu'élève.", "Votre enfant retient que vous savez, mais pas comment vous le savez."]
    }
  };
  Object.keys(O).forEach(function (r) {
    var S = GAMES[r].scenes;
    Object.keys(O[r]).forEach(function (id) {
      O[r][id].forEach(function (t, i) { S[id].a[i].oth = t; });
    });
    ["r2", "r3"].forEach(function (id) { S[id].roll.mood = 1; });
  });
})();

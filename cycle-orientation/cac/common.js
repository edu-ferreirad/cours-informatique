
const P10="10eme/",P11="11eme/";
const L={
fr:{gate:"Espace 10ème et 11ème",pw:"Entrez le mot de passe",ok:"Valider",bad:"Mot de passe incorrect",home:"⬅ Retour à l’accueil général",lang:"Langue",title:"Cours d’informatique – 10ème et 11ème",m_cours:"Cours",m_ex:"Examens",m_cl:"Classeur",m_je:"Jeux",note:"Le texte des cours s’affiche dans ta langue sous chaque image. Certains cours utilisent la traduction automatique (Google).",lv:"Niveau 10ème = plus simple. Niveau 11ème = va plus loin.",all:"Tous niveaux",n10:"Niveau 10ème",n11:"Niveau 11ème",open:"Ouvrir",exn:"Les examens s’ouvrent avec le mot de passe donné par ton enseignant. Leur texte est traduit automatiquement (Google) dans ta langue."},
en:{gate:"10th and 11th grade area",pw:"Enter the password",ok:"Submit",bad:"Wrong password",home:"⬅ Back to main home",lang:"Language",title:"Computer science courses – 10th and 11th",m_cours:"Courses",m_ex:"Exams",m_cl:"Workbook",m_je:"Games",note:"Course text appears in your language under each image. Some courses use automatic translation (Google).",lv:"10th level = easier. 11th level = goes further.",all:"All levels",n10:"10th level",n11:"11th level",open:"Open",exn:"Exams open with the password given by your teacher. Their text is translated automatically (Google) into your language."},
pt:{gate:"Espaço 10.º e 11.º ano",pw:"Introduza a palavra-passe",ok:"Validar",bad:"Palavra-passe incorreta",home:"⬅ Voltar ao início geral",lang:"Idioma",title:"Aulas de informática – 10.º e 11.º ano",m_cours:"Aulas",m_ex:"Exames",m_cl:"Dossier",m_je:"Jogos",note:"O texto das aulas aparece na tua língua por baixo de cada imagem. Algumas aulas usam tradução automática (Google).",lv:"Nível 10.º = mais simples. Nível 11.º = vai mais longe.",all:"Todos os níveis",n10:"Nível 10.º",n11:"Nível 11.º",open:"Abrir",exn:"Os exames abrem-se com a palavra-passe dada pelo teu professor. O texto é traduzido automaticamente (Google) para a tua língua."},
es:{gate:"Espacio 10.º y 11.º curso",pw:"Introduce la contraseña",ok:"Validar",bad:"Contraseña incorrecta",home:"⬅ Volver al inicio general",lang:"Idioma",title:"Clases de informática – 10.º y 11.º curso",m_cours:"Clases",m_ex:"Exámenes",m_cl:"Cuaderno",m_je:"Juegos",note:"El texto de las clases aparece en tu idioma debajo de cada imagen. Algunas clases usan traducción automática (Google).",lv:"Nivel 10.º = más sencillo. Nivel 11.º = llega más lejos.",all:"Todos los niveles",n10:"Nivel 10.º",n11:"Nivel 11.º",open:"Abrir",exn:"Los exámenes se abren con la contraseña que te da tu profesor. Su texto se traduce automáticamente (Google) a tu idioma."}
};
const G=[
{g:{fr:"Pour démarrer",en:"Getting started",pt:"Para começar",es:"Para empezar"},items:[
 {t:{fr:"Préambule",en:"Introduction",pt:"Preâmbulo",es:"Preámbulo"},f:[["all","lecon.html?id=prea"]]},
 {t:{fr:"Exercices de remise à niveau",en:"Review exercises",pt:"Exercícios de revisão",es:"Ejercicios de repaso"},f:[["10","lecon.html?id=10-2-cours-exercices-remise-a-niveau"],["11","lecon.html?id=11-2-cours-exercices-remise-a-niveau"]]},
 {t:{fr:"Corrections de la remise à niveau",en:"Review exercises: answers",pt:"Correções da revisão",es:"Correcciones del repaso"},f:[["10","lecon.html?id=10-3-cours-exercices-remise-a-niveau-corrections"],["11","lecon.html?id=11-3-cours-exercices-remise-a-niveau-corrections"]]},
 {t:{fr:"Piqûre de rappel",en:"Quick reminder",pt:"Lembrete rápido",es:"Recordatorio rápido"},f:[["all","lecon.html?id=rappel"]]}]},
{g:{fr:"Sécurité et société",en:"Safety and society",pt:"Segurança e sociedade",es:"Seguridad y sociedad"},items:[
 {t:{fr:"Prévention de base",en:"Basic online safety",pt:"Prevenção básica",es:"Prevención básica"},f:[["10","lecon.html?id=10-6-cours-de-prevention-de-base"],["11","lecon.html?id=11-6-cours-de-prevention-de-base"]]},
 {t:{fr:"Protection des données",en:"Data protection",pt:"Proteção de dados",es:"Protección de datos"},f:[["10","lecon.html?id=10-11-protection-des-donnees"],["11","lecon.html?id=11-9-protection-des-donnees"]]},
 {t:{fr:"Recherche sur Internet",en:"Searching the Internet",pt:"Pesquisa na Internet",es:"Búsqueda en Internet"},f:[["10","lecon.html?id=10-8-cours-de-recherche-internet"],["11","lecon.html?id=11-13-cours-de-recherche-internet"]]},
 {t:{fr:"Cryptologie",en:"Cryptology",pt:"Criptologia",es:"Criptología"},f:[["10","lecon.html?id=crypto"]]}]},
{g:{fr:"Algorithmique et programmation",en:"Algorithms and programming",pt:"Algoritmos e programação",es:"Algoritmos y programación"},items:[
 {t:{fr:"Introduction à l’algorithmique",en:"Introduction to algorithms",pt:"Introdução aos algoritmos",es:"Introducción a los algoritmos"},f:[["all","lecon.html?id=algo"]]},
 {t:{fr:"Introduction à la programmation",en:"Introduction to programming",pt:"Introdução à programação",es:"Introducción a la programación"},f:[["all","lecon.html?id=prog"]]}]},
{g:{fr:"Bureautique",en:"Office tools",pt:"Ferramentas de escritório",es:"Ofimática"},items:[
 {t:{fr:"Traitement de texte",en:"Word processing",pt:"Processamento de texto",es:"Procesador de textos"},f:[["10","lecon.html?id=texte"]]},
 {t:{fr:"Tableur",en:"Spreadsheet",pt:"Folha de cálculo",es:"Hoja de cálculo"},f:[["10","lecon.html?id=10-14-cours-de-tableur"],["11","lecon.html?id=11-14-cours-de-tableur"]]},
 {t:{fr:"Présentation",en:"Presentation",pt:"Apresentação",es:"Presentación"},f:[["10","lecon.html?id=10-15-cours-intro-presentation"],["11","lecon.html?id=11-10-cours-intro-presentation"]]}]},
{g:{fr:"Créatif",en:"Creative",pt:"Criativo",es:"Creativo"},items:[
 {t:{fr:"Retouche d’images (GIMP)",en:"Image editing (GIMP)",pt:"Edição de imagens (GIMP)",es:"Edición de imágenes (GIMP)"},f:[["all","lecon.html?id=gimp"]]},
 {t:{fr:"BrickLink Studio (LEGO)",en:"BrickLink Studio (LEGO)",pt:"BrickLink Studio (LEGO)",es:"BrickLink Studio (LEGO)"},f:[["all","lecon.html?id=brick"]]}]},
{g:{fr:"Préparer son avenir",en:"Preparing for the future",pt:"Preparar o futuro",es:"Preparar el futuro"},items:[
 {t:{fr:"Écrire son CV",en:"Writing your CV",pt:"Escrever o currículo",es:"Escribir tu currículum"},f:[["11","lecon.html?id=11-7-cours-de-cv"]]},
 {t:{fr:"Écrire une lettre de motivation",en:"Writing a cover letter",pt:"Escrever uma carta de motivação",es:"Escribir una carta de motivación"},f:[["11","lecon.html?id=11-8-cours-de-lettre"]]}]}
];
const Q=(fr,en,pt,es)=>({fr,en,pt,es});
const E=[
{t:Q("Traitement de texte","Word processing","Processamento de texto","Procesador de textos"),f:[["10",P10+"examen_texte.html"]]},
{t:Q("Tableur","Spreadsheet","Folha de cálculo","Hoja de cálculo"),f:[["10",P10+"examen_tableur.html"],["11",P11+"examen_tableur.html"]]},
{t:Q("Présentation","Presentation","Apresentação","Presentación"),f:[["10",P10+"examen_presentation.html"],["11",P11+"examen_presentation.html"]]},
{t:Q("Programmation (Scratch)","Programming (Scratch)","Programação (Scratch)","Programación (Scratch)"),f:[["10",P10+"examen_programmation.html"],["11",P11+"examen_programmation.html"]]},
{t:Q("Recherche sur Internet","Searching the Internet","Pesquisa na Internet","Búsqueda en Internet"),f:[["10",P10+"examen_recherches.html"],["11",P11+"examen_recherches.html"]]},
{t:Q("Traitement d’images","Image editing","Edição de imagens","Edición de imágenes"),f:[["10",P10+"examen_images.html"],["11",P11+"examen_images.html"]]},
{t:Q("LEGO","LEGO","LEGO","LEGO"),f:[["10",P10+"examen_lego.html"],["11",P11+"examen_lego.html"]]},
{t:Q("CV","CV","Currículo","Currículum"),f:[["11",P11+"examen_cv.html"]]},
{t:Q("Lettre de motivation","Cover letter","Carta de motivação","Carta de motivación"),f:[["11",P11+"examen_lettre.html"]]}];
const C=[{t:Q("Classeur","Workbook","Dossier","Cuaderno"),f:[["10","lecon.html?id=10-classeur-10eme"],["11","lecon.html?id=11-classeur-11eme"]]}];
const J=[["Mes jeux (LearningApps)","https://learningapps.org/watch?v=pde90hqct25"],["Educlasse","https://www.educlasse.ch/cycle-3/9e"],[Q("Chasse aux œufs","Egg hunt","Caça aos ovos","Búsqueda de huevos"),"https://opendata.geneve.ch/www/medias/chasse_aux_oeufs_virtuelle/"],[Q("Dactylo","Typing practice","Dactilografia","Mecanografía"),"https://www.dactylocours.com/test.php"],["Studio.org (Code.org)","https://studio.code.org/fr/courses/courseb-2025/units/1/lessons/4/levels/2?lang=fr-FR"],["Scratch","https://scratch.mit.edu/"]];
const T=u=>/^lecon\.html/.test(u)?"":' target="_blank" rel="noopener"';
const B=(lv,u,d)=>'<a class="btn"'+T(u)+' href="'+encodeURI(u)+'">'+(lv==="all"?d.all:lv==="10"?d.n10:d.n11)+"</a>";
const rows=(a,d)=>a.map(it=>'<div class="t"><span class="n">'+it.t[lang]+'</span><span class="l">'+it.f.map(([lv,u])=>B(lv,u,d)).join("")+"</span></div>").join("");
let lang="fr";
const $=id=>document.getElementById(id);
function h(s){let x=5381;for(const c of s)x=((x<<5)+x+c.charCodeAt(0))|0;return x}
function render(){
  const d=L[lang];
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i]").forEach(e=>{e.textContent=d[e.dataset.i]});
  if($("cours"))$("cours").innerHTML=G.map(s=>"<h2>"+s.g[lang]+"</h2>"+s.items.map(it=>
    '<div class="t"><span class="n">'+it.t[lang]+"</span><span class=\"l\">"+it.f.map(([lv,u])=>
      '<a class="btn"'+T(u)+' href="'+encodeURI(u)+'">'+(lv==="all"?d.all:lv==="10"?d.n10:d.n11)+"</a>").join("")+"</span></div>").join("")).join("");
  more(d);
  if(window.onLang)window.onLang(lang);
}
function more(d){
  if($("examens"))$("examens").innerHTML='<p class="note">'+d.exn+"</p>"+rows(E,d);
  if($("classeur"))$("classeur").innerHTML=rows(C,d);
  if($("jeux"))$("jeux").innerHTML=J.map(([n,u])=>'<div class="t"><span class="n">'+(n[lang]||n)+'</span><a class="btn" target="_blank" rel="noopener" href="'+u+'">'+d.open+"</a></div>").join("");
}
function setLang(v){
  lang=L[v]?v:"fr";$("langSel").value=lang;
  try{localStorage.setItem("lang",lang)}catch(e){}
  render();
}
function enter(){
  if(h($("pwd").value)===1698482661){
    try{sessionStorage.setItem("ok","1");localStorage.setItem("okt",String(Date.now()))}catch(e){}
    $("gate").hidden=true;$("app").hidden=false;
  }else{$("err").textContent=L[lang].bad}
}
if($("ok"))$("ok").onclick=enter;
if($("pwd"))$("pwd").addEventListener("keydown",e=>{if(e.key==="Enter")enter()});
$("langSel").onchange=e=>setLang(e.target.value);
let saved="fr";try{saved=localStorage.getItem("lang")||"fr"}catch(e){}
setLang(saved);
let authed=false;try{authed=sessionStorage.getItem("ok")==="1"||Date.now()-(+localStorage.getItem("okt")||0)<288e5}catch(e){}
if(authed){if($("gate"))$("gate").hidden=true;$("app").hidden=false}
else if(document.body.dataset.page!=="index")location.replace("index.html");
(function(){
  const c=$("matrix"),x=c.getContext("2d"),fs=16,ch="0123456789ABCDEF<>/{}[]*&=+",col=["#003366","#005588","#0088cc","#001122"];
  let dr=[];
  function rs(){c.width=innerWidth;c.height=innerHeight;dr=Array(Math.ceil(c.width/fs)).fill(1)}
  rs();addEventListener("resize",rs);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  setInterval(()=>{
    x.fillStyle="rgba(2,4,8,.08)";x.fillRect(0,0,c.width,c.height);x.font=fs+"px monospace";
    for(let i=0;i<dr.length;i++){
      x.fillStyle=col[Math.floor(Math.random()*col.length)];
      x.fillText(ch.charAt(Math.floor(Math.random()*ch.length)),i*fs,dr[i]*fs);
      if(dr[i]*fs>c.height&&Math.random()>.975)dr[i]=0;dr[i]++;
    }
  },50);
})();

L.fr.back="⬅ Retour au menu";L.en.back="⬅ Back to menu";L.pt.back="⬅ Voltar ao menu";L.es.back="⬅ Volver al menú";
L.fr.backc="⬅ Retour aux cours";L.en.backc="⬅ Back to courses";L.pt.backc="⬅ Voltar às aulas";L.es.backc="⬅ Volver a las clases";
L.fr.auto="Traduction automatique (Google) : peut contenir des erreurs.";L.en.auto="Automatic translation (Google): may contain errors.";L.pt.auto="Tradução automática (Google): pode conter erros.";L.es.auto="Traducción automática (Google): puede contener errores.";
render();

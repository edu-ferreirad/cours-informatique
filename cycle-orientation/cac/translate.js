(function(){
var code={en:"en",pt:"pt-PT",es:"es"},cur="fr",loaded=false;
try{cur=localStorage.getItem("lang")||"fr"}catch(e){}
function ck(v){document.cookie="googtrans="+v+"; path=/"}
window.gtLoad=function(l){
  if(!code[l]){ck("/fr/fr");if(loaded)location.reload();return}
  ck("/fr/"+code[l]);
  if(loaded){if(window.__gt!==l)location.reload();return}
  loaded=true;window.__gt=l;
  var d=document.createElement("div");d.id="gt";d.style.display="none";document.body.appendChild(d);
  window.gtInit=function(){new google.translate.TranslateElement({pageLanguage:"fr",includedLanguages:"en,pt-PT,es",autoDisplay:false},"gt")};
  var s=document.createElement("script");s.src="https://translate.google.com/translate_a/element.js?cb=gtInit";document.head.appendChild(s);
};
if(document.body.dataset.page===undefined){
  var w=document.createElement("label");w.setAttribute("translate","no");
  w.style.cssText="position:fixed;top:8px;right:8px;z-index:99;background:#001122;color:#fff;border:1px solid #005588;border-radius:6px;padding:4px 8px;font:14px Arial";
  w.innerHTML='\ud83c\udf10 <select style="background:#001122;color:#fff;border:1px solid #005588"><option value="fr">Français</option><option value="en">English</option><option value="pt">Português</option><option value="es">Español</option></select>';
  document.body.appendChild(w);var sel=w.querySelector("select");sel.value=cur;
  sel.onchange=function(){try{localStorage.setItem("lang",sel.value)}catch(e){}ck(code[sel.value]?"/fr/"+code[sel.value]:"/fr/fr");location.reload()};
  if(code[cur])gtLoad(cur);else ck("/fr/fr");
}
})();

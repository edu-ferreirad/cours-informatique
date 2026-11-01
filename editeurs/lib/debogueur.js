/* ============================================================================
   debogueur.js — Aide au débogage pour élèves débutants (Python et JavaScript)
   Deux niveaux :
     🔴 Erreurs   : syntaxe, indentation, parenthèses, noms inconnus… (avec ligne et correction)
     🟡 Conseils  : variable/fonction jamais utilisée, fonction définie deux fois, etc.
   Aucune dépendance, sauf acorn (acorn.min.js) pour analyser le JavaScript.
   Utilisation : Debogueur.attach({lang:"python"|"js", textarea:…, anchor:…, …})
   ============================================================================ */
(function(root){
"use strict";
var D={version:"1.0"};

/* ---------- utilitaires ---------- */
function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function lev(a,b){var m=a.length,n=b.length,i,j,d=[],c;if(!m)return n;if(!n)return m;
 for(i=0;i<=m;i++){d[i]=[i];}for(j=0;j<=n;j++)d[0][j]=j;
 for(i=1;i<=m;i++)for(j=1;j<=n;j++){c=a.charAt(i-1)===b.charAt(j-1)?0:1;
  d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c);
  if(i>1&&j>1&&a.charAt(i-1)===b.charAt(j-2)&&a.charAt(i-2)===b.charAt(j-1))d[i][j]=Math.min(d[i][j],d[i-2][j-2]+1);}
 return d[m][n];}
function suggere(nom,cands){var low=nom.toLowerCase(),best=null,bd=99,i,c,d,lim=nom.length<=3?1:(nom.length<=7?2:3);
 for(i=0;i<cands.length;i++){c=cands[i];if(c===nom||c.length<2)continue;if(c.toLowerCase()===low)return c;}
 if(nom.length<3)return null;
 for(i=0;i<cands.length;i++){c=cands[i];if(c===nom||c.length<2)continue;d=lev(low,c.toLowerCase());if(d<=lim&&d<bd){bd=d;best=c;}}
 return best;}
function uniq(a){var o={},r=[],i;for(i=0;i<a.length;i++)if(!o[a[i]]){o[a[i]]=1;r.push(a[i]);}return r;}
function mk(niveau,ligne,col,titre,texte,aide){return {niveau:niveau,ligne:ligne,col:col||0,titre:titre,texte:texte||"",aide:aide||""};}
function setOf(s){var o={},a=s.split(/\s+/),i;for(i=0;i<a.length;i++)if(a[i])o[a[i]]=1;return o;}
function has(o,k){return Object.prototype.hasOwnProperty.call(o,k);}
function lignesDe(src){return String(src).replace(/\r\n?/g,"\n").split("\n");}
function bt(s){return "`"+s+"`";}

/* =====================================================================
   PYTHON — analyse lexicale
   ===================================================================== */
var PY_KW=setOf("and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield");
var PY_COMPOUND=setOf("if elif else for while def class try except finally with");
var PY_BUILTINS=setOf("abs aiter all anext any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip __name__ __file__ __doc__ __import__ __builtins__ __package__ __spec__ Ellipsis NotImplemented True False None exit quit BaseException Exception ArithmeticError AssertionError AttributeError EOFError ImportError ModuleNotFoundError IndexError KeyError KeyboardInterrupt LookupError NameError NotImplementedError OSError FileNotFoundError OverflowError RecursionError RuntimeError StopIteration SyntaxError IndentationError TabError SystemExit TypeError UnboundLocalError ValueError ZeroDivisionError Warning");
var PY_STAR={
 turtle:"forward fd backward bk back right rt left lt goto setpos setposition setx sety setheading seth home circle dot stamp clearstamp clearstamps undo speed position pos towards xcor ycor heading distance degrees radians pendown pd down penup pu up pensize width pen isdown color pencolor fillcolor filling begin_fill end_fill reset clear write showturtle st hideturtle ht isvisible shape resizemode shapesize turtlesize shearfactor settiltangle tiltangle tilt shapetransform get_shapepoly begin_poly end_poly get_poly clone getturtle getpen getscreen setundobuffer undobufferentries bgcolor bgpic clearscreen resetscreen screensize setworldcoordinates delay tracer update listen onkey onkeypress onkeyrelease onscreenclick onclick ontimer onrelease ondrag mainloop done mode colormode getcanvas getshapes register_shape addshape turtles window_height window_width bye exitonclick setup title textinput numinput Turtle Screen RawTurtle RawPen Pen TurtleScreen Shape Vec2D Terminator ScrolledCanvas",
 math:"pi e tau inf nan sqrt sin cos tan asin acos atan atan2 sinh cosh tanh exp log log2 log10 pow floor ceil fabs factorial gcd degrees radians hypot isnan isinf isfinite trunc fmod copysign",
 random:"random randint randrange choice choices shuffle sample uniform seed gauss triangular getrandbits betavariate",
 time:"sleep time perf_counter monotonic strftime localtime gmtime ctime process_time"
};
var PY_JSHABIT={console:"En Python, on affiche avec print(...), pas console.log(...).",document:"document existe en JavaScript, pas en Python.",alert:"En Python, alert n'existe pas : utilise print(...).","var":"En Python on ne déclare pas avec var : écris directement nom = valeur.","let":"En Python on ne déclare pas avec let : écris directement nom = valeur.","const":"En Python on ne déclare pas avec const : écris directement nom = valeur.","function":"En Python, une fonction se définit avec def nom(): .","null":"En Python, « rien » s'écrit None.","undefined":"En Python, « rien » s'écrit None.","this":"En Python, le mot est self.","length":"En Python, la taille se calcule avec len(...).","Math":"En Python, utilise import math puis math.sqrt(...), ou les opérateurs ** et //."};

function isIdStart(c){return c==="_"||(c>="a"&&c<="z")||(c>="A"&&c<="Z")||(c>="\u00C0"&&c<="\u1FFF"&&c!=="\u00D7"&&c!=="\u00F7")||(c>="\u2C00"&&c<="\uD7FF");}
function isIdPart(c){return isIdStart(c)||(c>="0"&&c<="9");}
var PY_OPS3=["**=","//=",">>=","<<=","...","===","!=="];
var PY_OPS2=["->",":=","==","!=","<=",">=","+=","-=","*=","/=","%=","&=","|=","^=","@=","**","//","<<",">>","&&","||","++","--"];
var PY_OPEN={"(":")","[":"]","{":"}"},PY_CLOSE={")":"(","]":"[","}":"{"};
var PY_NOMBRES={"(":"parenthèse","[":"crochet","{":"accolade"};

/* extraction des expressions d'une f-string : "{x} et {y:.2f}" -> ["x","y"] */
function fstringExprs(body){var out=[],i=0,n=body.length,d,j,s,k,q,dd;
 while(i<n){var ch=body.charAt(i);
  if(ch==="{"){if(body.charAt(i+1)==="{"){i+=2;continue;}
   d=1;j=i+1;while(j<n&&d>0){var c=body.charAt(j);if(c==="{")d++;else if(c==="}")d--;j++;}
   s=body.slice(i+1,j-1);
   dd=0;q="";for(k=0;k<s.length;k++){var cc=s.charAt(k);
     if(q){if(cc===q)q="";continue;}
     if(cc==="'"||cc==='"'){q=cc;continue;}
     if("([{".indexOf(cc)>=0)dd++;else if(")]}".indexOf(cc)>=0)dd--;
     else if(dd===0&&(cc===":"||(cc==="!"&&s.charAt(k+1)!=="="))){s=s.slice(0,k);break;}}
   s=s.replace(/=\s*$/,"");out.push(s);i=j;continue;}
  i++;}
 return out;}
function namesInExpr(text){var t=text.replace(/(["'])(?:\\.|(?!\1).)*\1/g,'""'),re=/(^|[^.\w\u00C0-\uFFFF])([A-Za-z_\u00C0-\uFFFF][\w\u00C0-\uFFFF]*)/g,m,r=[];
 while((m=re.exec(t))){if(!has(PY_KW,m[2]))r.push(m[2]);re.lastIndex=m.index+m[0].length-0;}
 return r;}

function pyLex(src){
 var lines=[],errs=[],stack=[],cur=null,i=0,n=src.length,line=1,ls=0,atStart=true,cont=false,tabLine=0,spLine=0,brErr=false;
 function col(){return i-ls;}
 while(i<n){
  var ch=src.charAt(i);
  if(atStart&&stack.length===0&&!cont){
   var j=i,ind=0,s="";
   while(j<n&&(src.charAt(j)===" "||src.charAt(j)==="\t"||src.charAt(j)==="\f")){var cj=src.charAt(j);s+=cj;ind+=(cj==="\t")?(8-(ind%8)):1;j++;}
   if(j>=n){i=j;break;}
   var cj2=src.charAt(j);
   if(cj2==="\n"||cj2==="\r"||cj2==="#"){while(j<n&&src.charAt(j)!=="\n")j++;i=j;if(i<n){i++;line++;ls=i;}continue;}
   cur={n:line,indent:ind,indentStr:s,tokens:[]};lines.push(cur);atStart=false;
   if(s.indexOf("\t")>=0&&!tabLine)tabLine=line; if(s.indexOf(" ")>=0&&!spLine)spLine=line;
   i=j;continue;}
  if(ch==="\r"){i++;continue;}
  if(ch==="\n"){i++;line++;ls=i;if(stack.length===0&&!cont){atStart=true;}cont=false;continue;}
  if(ch===" "||ch==="\t"||ch==="\f"){i++;continue;}
  if(ch==="#"){while(i<n&&src.charAt(i)!=="\n")i++;continue;}
  if(ch==="\\"){var nx=src.charAt(i+1);if(nx==="\n"||(nx==="\r"&&src.charAt(i+2)==="\n")){cont=true;i++;continue;}
   errs.push(mk("err",line,col(),"Caractère « \\ » inattendu","Le caractère \\ n'est permis qu'à la toute fin d'une ligne, pour la continuer sur la suivante.","Supprime-le."));i++;continue;}
  var sm=/^([rRbBuUfF]{1,2})(?=['"])/.exec(src.substr(i,3)),pref="";
  if((ch==="'"||ch==='"')||sm){
   var st=i,sline=line,scol=col();if(sm){pref=sm[1];i+=pref.length;}
   var q=src.charAt(i),triple=src.substr(i,3)===q+q+q;
   i+=triple?3:1;var bodyStart=i,closed=false;
   while(i<n){var c2=src.charAt(i);
    if(c2==="\\"){if(src.charAt(i+1)==="\n"){line++;ls=i+2;}i+=2;continue;}
    if(triple){if(src.substr(i,3)===q+q+q){closed=true;break;}if(c2==="\n"){line++;ls=i+1;}i++;continue;}
    if(c2===q){closed=true;break;}
    if(c2==="\n")break;
    i++;}
   var body=src.slice(bodyStart,Math.min(i,n));
   if(!closed){errs.push(mk("err",sline,scol,triple?"Texte entre triples guillemets non fermé":"Guillemet non fermé","Le texte commencé ligne "+sline+" n'est pas terminé : il manque le guillemet "+bt(q+(triple?q+q:""))+" à la fin.","Ajoute le même guillemet à la fin du texte, sur la même ligne."));brErr=brErr;}
   else i+=triple?3:1;
   cur.tokens.push({t:"str",v:src.slice(st,i),ln:sline,c:scol,f:/[fF]/.test(pref)?fstringExprs(body):null,body:body});
   continue;}
  if((ch>="0"&&ch<="9")||(ch==="."&&src.charAt(i+1)>="0"&&src.charAt(i+1)<="9")){
   var nm=/^(?:0[xX][0-9a-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|(?:\d[\d_]*(?:\.[\d_]*)?|\.\d[\d_]*)(?:[eE][+-]?\d+)?[jJ]?)/.exec(src.substr(i,60));
   cur.tokens.push({t:"num",v:nm[0],ln:line,c:col()});i+=nm[0].length;
   if(i<n&&isIdStart(src.charAt(i))){var wj=i;while(wj<n&&isIdPart(src.charAt(wj)))wj++;
    errs.push(mk("err",line,col(),"Nombre collé à des lettres",bt(nm[0]+src.slice(i,wj))+" n'est pas valide : un nombre ne peut pas être collé à des lettres.","Écris le nombre seul (sans unité comme px), ou sépare avec un opérateur : "+bt(nm[0]+" * "+src.slice(i,wj))+" si tu voulais multiplier."));i=wj;}
   continue;}
  if(isIdStart(ch)){var k=i;while(k<n&&isIdPart(src.charAt(k)))k++;var w=src.slice(i,k);
   cur.tokens.push({t:has(PY_KW,w)?"kw":"name",v:w,ln:line,c:col()});i=k;continue;}
  var o=null,s3=src.substr(i,3),s2=src.substr(i,2),a;
  for(a=0;a<PY_OPS3.length;a++)if(PY_OPS3[a]===s3){o=s3;break;}
  if(!o)for(a=0;a<PY_OPS2.length;a++)if(PY_OPS2[a]===s2){o=s2;break;}
  if(!o&&"+-*/%=<>!&|^~@.,:;".indexOf(ch)>=0)o=ch;
  if(o){cur.tokens.push({t:"op",v:o,ln:line,c:col()});i+=o.length;continue;}
  if(has(PY_OPEN,ch)){stack.push({ch:ch,ln:line,c:col()});cur.tokens.push({t:"op",v:ch,ln:line,c:col()});i++;continue;}
  if(has(PY_CLOSE,ch)){var top=stack.pop();
   if(!top){if(!brErr){errs.push(mk("err",line,col(),bt(ch)+" en trop","Il y a un "+bt(ch)+" fermant, mais aucun "+bt(PY_CLOSE[ch])+" ouvrant avant.",(ch==="}"?"En Python, on n'utilise pas d'accolades pour les blocs : on décale les lignes avec 4 espaces. ":"")+"Supprime ce caractère, ou ajoute le "+bt(PY_CLOSE[ch])+" qui manque."));brErr=true;}}
   else if(PY_OPEN[top.ch]!==ch){if(!brErr){errs.push(mk("err",line,col(),bt(ch)+" ne correspond pas à "+bt(top.ch),"Tu as ouvert une "+PY_NOMBRES[top.ch]+" "+bt(top.ch)+" ligne "+top.ln+", mais tu la fermes avec "+bt(ch)+".","Ferme-la avec "+bt(PY_OPEN[top.ch])+"."));brErr=true;}}
   cur.tokens.push({t:"op",v:ch,ln:line,c:col()});i++;continue;}
  var bad=ch,msg="Ce caractère n'existe pas en Python.",aide="Supprime-le ou remplace-le.";
  if(ch==="\u201C"||ch==="\u201D"||ch==="\u00AB"||ch==="\u00BB"){msg="Ce sont des guillemets « typographiques » (copiés depuis Word ou un site).";aide="Remplace-les par des guillemets droits \" ou '.";}
  else if(ch==="\u2018"||ch==="\u2019"){msg="C'est une apostrophe « typographique » (copiée depuis Word ou un site).";aide="Remplace-la par une apostrophe droite '.";}
  else if(ch==="\u00A0"||ch==="\u202F"){msg="C'est une espace insécable invisible (souvent copiée depuis un site ou Word).";aide="Supprime-la puis retape une vraie espace.";}
  else if(ch==="\u00D7"){msg="Le signe × n'existe pas en programmation.";aide="Pour multiplier, écris *.";}
  else if(ch==="\u00F7"){msg="Le signe ÷ n'existe pas en programmation.";aide="Pour diviser, écris / (ou // pour un résultat entier).";}
  else if(ch==="$"||ch==="?"||ch==="`"){msg="Le caractère "+bt(ch)+" n'a pas de sens ici en Python.";}
  errs.push(mk("err",line,col(),"Caractère inattendu : "+(ch==="\u00A0"?"espace insécable":ch),msg,aide));i++;
 }
 if(stack.length){var o2=stack[0];if(!brErr){errs.push(mk("err",o2.ln,o2.c,bt(o2.ch)+" jamais fermée"+(o2.ch==="{"?"":""),"La "+PY_NOMBRES[o2.ch]+" "+bt(o2.ch)+" ouverte ligne "+o2.ln+" n'est jamais refermée.","Ajoute "+bt(PY_OPEN[o2.ch])+" à la fin de l'instruction, avant de passer à la ligne suivante."));}}
 return {lines:lines,errs:errs,tabLine:tabLine,spLine:spLine};
}

/* =====================================================================
   PYTHON — structure : deux-points, indentation, opérateurs, oublis
   ===================================================================== */
function topColon(T){var d=0,lam=0,i,t;
 for(i=0;i<T.length;i++){t=T[i];
  if(t.t==="op"){
   if(has(PY_OPEN,t.v))d++;else if(has(PY_CLOSE,t.v))d--;
   else if(t.v===":"&&d===0){if(lam>0)lam--;else return i;}}
  else if(t.t==="kw"&&t.v==="lambda"&&d===0)lam++;}
 return -1;}
function pyStruct(lines,srcLines){
 var out=[],i,L,prev=null,stack=[0],indentDone=false;
 function lt(n){return (srcLines[n-1]||"").replace(/^\s+|\s+$/g,"");}
 function after(n,tok){var s=lt(n),p=s.indexOf(tok);return p>=0?s.slice(p+tok.length).replace(/^\s+/,""):"";}
 for(i=0;i<lines.length;i++){
  L=lines[i];var T=L.tokens;if(!T.length)continue;
  var t0=T[0],kw=(t0.t==="kw"&&has(PY_COMPOUND,t0.v))?t0.v:"";
  /* --- indentation --- */
  if(!indentDone){
   if(prev&&prev.opener&&(L.indent>prev.indent||!prev.soft)){
    if(L.indent<=prev.indent){out.push(mk("err",L.n,0,"Il manque le bloc décalé après la ligne "+prev.n,"La ligne "+prev.n+" ("+bt(lt(prev.n))+") se termine par "+bt(":")+", donc la ligne suivante doit être décalée vers la droite : c'est le contenu du bloc.","Ajoute 4 espaces (touche Tab) au début de la ligne "+L.n+", pour qu'elle soit plus à droite que la ligne "+prev.n+"."));indentDone=true;}
    stack.push(L.indent);
   }else{
    var top=stack[stack.length-1];
    if(L.indent>top){out.push(mk("err",L.n,0,"Ligne décalée sans raison","Cette ligne commence plus à droite que la précédente, alors qu'aucune ligne au-dessus ne se termine par "+bt(":")+".","Supprime les espaces au début pour l'aligner avec la ligne du dessus. (Si la ligne du dessus ouvre un bloc, elle doit se terminer par "+bt(":")+".)"));indentDone=true;stack.push(L.indent);}
    else if(L.indent<top){while(stack.length>1&&stack[stack.length-1]>L.indent)stack.pop();
     if(stack[stack.length-1]!==L.indent){out.push(mk("err",L.n,0,"Décalage incohérent","Cette ligne revient vers la gauche, mais à un endroit qui ne correspond à aucune ligne du dessus.","Aligne-la exactement sous une ligne précédente du même bloc (en général un multiple de 4 espaces)."));indentDone=true;stack.push(L.indent);}}
   }
  }
  /* --- en-têtes de blocs --- */
  L.kw=kw;L.opener=false;
  if(kw){
   var ci=topColon(T),skipColon=false;L.opener=(ci>=0&&ci===T.length-1);if(ci<0){L.opener=true;L.soft=true;}
   if(kw==="else"&&T[1]&&T[1].t==="kw"&&T[1].v==="if"){out.push(mk("err",L.n,t0.c,"En Python, « else if » s'écrit « elif »","Python n'a pas de " +bt("else if")+" : le mot est " +bt("elif")+".","Écris : "+bt("elif condition:")));skipColon=true;}
   if(!skipColon){
    if(ci<0){var lastT=T[T.length-1];
     out.push(mk("err",lastT.ln,lastT.c+String(lastT.v).length,"Il manque « : » à la fin de la ligne","Une ligne qui commence par "+bt(kw)+" doit se terminer par deux-points "+bt(":")+" : c'est ce qui annonce le bloc décalé qui suit.","Ajoute "+bt(":")+" à la fin de la ligne "+lastT.ln+" : "+bt(lt(lastT.ln)+":")));}
    else{
     if((kw==="else"||kw==="try"||kw==="finally")&&ci>1)out.push(mk("err",L.n,T[1].c,bt(kw)+" ne prend pas de condition","Après "+bt(kw)+" on met directement "+bt(":")+", sans condition.",kw==="else"?"Si tu veux tester une autre condition, écris "+bt("elif condition:")+".":"Écris simplement "+bt(kw+":")+"."));
     if(kw==="if"||kw==="elif"||kw==="while"){var d=0,k;for(k=1;k<ci;k++){var tk=T[k];if(tk.t==="op"){if(has(PY_OPEN,tk.v))d++;else if(has(PY_CLOSE,tk.v))d--;else if(tk.v==="="&&d===0){out.push(mk("err",tk.ln,tk.c,"Il faut « == » pour comparer, pas « = »",bt("=")+" sert à ranger une valeur dans une variable ; pour comparer deux valeurs dans une condition, on écrit "+bt("==")+".","Remplace "+bt("=")+" par "+bt("==")+" ligne "+tk.ln+"."));break;}}}}
     if(kw==="def"&&!(T[1]&&T[1].t==="name"&&T[2]&&T[2].v==="("))out.push(mk("err",L.n,t0.c,"Parenthèses manquantes après le nom de la fonction","Une fonction se définit avec des parenthèses, même si elle n'a pas de paramètres.","Écris : "+bt("def "+(T[1]&&T[1].t==="name"?T[1].v:"nom")+"():")));
     if(kw==="for"){var dd=0,hasIn=false,kk;for(kk=1;kk<ci;kk++){var tt=T[kk];if(tt.t==="op"){if(has(PY_OPEN,tt.v))dd++;else if(has(PY_CLOSE,tt.v))dd--;}else if(tt.t==="kw"&&tt.v==="in"&&dd===0){hasIn=true;break;}}
      if(T[1]&&T[1].t==="kw"&&T[1].v==="in")out.push(mk("err",L.n,T[1].c,"Il manque la variable après « for »","Une boucle for a besoin d'un nom de variable entre "+bt("for")+" et "+bt("in")+" : c'est elle qui prend chaque valeur à tour de rôle.","Écris par exemple : "+bt("for i in range(5):")));
      else if(!hasIn)out.push(mk("err",L.n,t0.c,"Boucle « for » mal écrite","En Python, une boucle for s'écrit "+bt("for variable in quelque_chose:")+" (pas avec des points-virgules comme en JavaScript).","Pour répéter 5 fois : "+bt("for i in range(5):")));}
    }
   }
  }
  if(!kw&&!(t0.t==="kw"&&(t0.v==="async"||t0.v==="lambda"))&&!(t0.t==="name"&&(t0.v==="match"||t0.v==="case"))&&T.length>1&&topColon(T)===T.length-1){
   var sg2=t0.t==="name"?suggere(t0.v,["if","elif","else","for","while","def","class","try","except","finally","with"]):null;
   out.push(mk("err",L.n,t0.c,sg2?"« "+t0.v+" » : tu voulais écrire « "+sg2+" » ?":"Cette ligne se termine par « : » sans ouvrir de bloc","Une ligne qui se termine par "+bt(":")+" doit commencer par un mot comme "+bt("if")+", "+bt("for")+", "+bt("while")+", "+bt("def")+", "+bt("else")+"…",sg2?"Corrige l'orthographe : "+bt(sg2)+" (puis un espace avant la condition).":"Supprime le "+bt(":")+" à la fin, ou vérifie l'orthographe du premier mot de la ligne."));
   L.opener=true;L.soft=true;}
  if(t0.t==="op"&&(t0.v==="."||t0.v===","||t0.v==="="||t0.v==="=="||t0.v==="!="||t0.v==="<"||t0.v===">"||t0.v==="<="||t0.v===">="||t0.v==="+="||t0.v==="-="||t0.v==="*="||t0.v==="/="||t0.v===":"||t0.v==="&&"||t0.v==="||"))
   out.push(mk("err",L.n,t0.c,"La ligne commence par « "+t0.v+" »","Une instruction ne peut pas commencer par "+bt(t0.v)+" : il manque probablement quelque chose juste avant (le nom d'un objet, une variable…), ou cette ligne devait continuer la précédente.","Vérifie le début de la ligne "+L.n+" et la fin de la ligne précédente."));
  if(kw==="elif"||kw==="else"||kw==="except"||kw==="finally"){
   var j=i-1,found=null;while(j>=0){if(lines[j].indent===L.indent){found=lines[j];break;}if(lines[j].indent<L.indent)break;j--;}
   var fk=(found&&found.tokens[0]&&found.tokens[0].t==="kw")?found.tokens[0].v:"";
   var ok=kw==="elif"?(fk==="if"||fk==="elif"):kw==="else"?(fk==="if"||fk==="elif"||fk==="for"||fk==="while"||fk==="try"||fk==="except"):kw==="except"?(fk==="try"||fk==="except"):(fk==="try"||fk==="except"||fk==="else");
   if(!ok&&!indentDone)out.push(mk("err",L.n,t0.c,bt(kw)+" sans « "+(kw==="elif"||kw==="else"?"if":"try")+" » correspondant","Une ligne "+bt(kw)+" doit être alignée exactement sous le "+bt(kw==="except"||kw==="finally"?"try":"if")+" qu'elle complète, juste après le bloc de celui-ci.","Vérifie qu'elle commence à la même colonne que le "+bt(kw==="except"||kw==="finally"?"try":"if")+" (même nombre d'espaces)."));
  }
  /* --- anomalies ligne par ligne --- */
  var seen={},m,t,a,b,adjDone=false,soft=(t0.t==="name"&&(t0.v==="match"||t0.v==="case"));
  for(m=0;m<T.length;m++){t=T[m];
   if(t.t==="op"){
    if(t.v==="&&"&&!seen.and){seen.and=1;out.push(mk("err",t.ln,t.c,"« && » n'existe pas en Python","En Python, le « ET » logique s'écrit "+bt("and")+".","Remplace "+bt("&&")+" par "+bt("and")+"."));}
    else if(t.v==="||"&&!seen.or){seen.or=1;out.push(mk("err",t.ln,t.c,"« || » n'existe pas en Python","En Python, le « OU » logique s'écrit "+bt("or")+".","Remplace "+bt("||")+" par "+bt("or")+"."));}
    else if((t.v==="==="||t.v==="!==")&&!seen.eq3){seen.eq3=1;out.push(mk("err",t.ln,t.c,bt(t.v)+" n'existe pas en Python","En Python, on compare avec "+bt(t.v==="==="?"==":"!=")+" (deux signes seulement).","Remplace "+bt(t.v)+" par "+bt(t.v==="==="?"==":"!=")+"."));}
    else if(t.v==="!"&&!seen.not){seen.not=1;out.push(mk("err",t.ln,t.c,"« ! » n'existe pas en Python","Pour dire « NON », Python utilise le mot "+bt("not")+".","Exemple : "+bt("if not fini:")));}
    else if((t.v==="++"||t.v==="--")&&m>0&&T[m-1].t==="name"&&(m===T.length-1||T[m+1].v===":"||T[m+1].v===")")&&!seen.pp){seen.pp=1;var vn=T[m-1].v;out.push(mk("err",t.ln,t.c,bt(vn+t.v)+" n'existe pas en Python","Python n'a pas d'opérateur "+bt(t.v)+".","Pour "+(t.v==="++"?"augmenter":"diminuer")+" de 1, écris : "+bt(vn+(t.v==="++"?" += 1":" -= 1"))));}
   }
   if(!adjDone&&!soft&&m>0){a=T[m-1];b=T[m];
    var aEnd=(a.t==="name"||a.t==="num"||a.t==="str"||(a.t==="op"&&(a.v===")"||a.v==="]"||a.v==="}")));
    var bSt=(b.t==="name"||b.t==="num"||b.t==="str");
    if(aEnd&&bSt&&!(a.t==="str"&&b.t==="str")){
     adjDone=true;var ti,te,ai;
     if(m===1&&(a.v==="var"||a.v==="let"||a.v==="const")&&b.t==="name"){ti="« "+a.v+" » n'existe pas en Python";te="En Python on ne déclare pas une variable avec "+bt(a.v)+" : on écrit directement son nom.";ai="Écris : "+bt(after(L.n,a.v));}
     else if(m===1&&a.v==="function"&&b.t==="name"){ti="« function » n'existe pas en Python";te="En Python, une fonction se définit avec "+bt("def")+".";ai="Écris : "+bt("def "+b.v+"(paramètres):");}
     else if(m===1&&a.v==="print"){ti="print s'écrit avec des parenthèses";te="En Python 3, "+bt("print")+" est une fonction : ce qu'on affiche va entre parenthèses.";ai="Écris : "+bt("print("+after(L.n,"print")+")");}
     else if(m===1&&a.t==="name"){ti="Il manque des parenthèses après « "+a.v+" »";te="Pour utiliser une commande ou une fonction, on écrit son nom puis la valeur entre parenthèses.";ai="Écris : "+bt(a.v+"("+after(L.n,a.v)+")");}
     else{ti="Il manque quelque chose entre « "+a.v+" » et « "+b.v+" »";te="Deux valeurs se suivent sans rien entre elles.";ai="Entre deux valeurs il faut un opérateur ("+bt("+")+", "+bt("*")+", "+bt("==")+"…), une virgule "+bt(",")+", ou des parenthèses. Si c'est du texte, vérifie les guillemets.";}
     out.push(mk("err",b.ln,b.c,ti,te,ai));}
   }
  }
  prev=L;
 }
 if(prev&&prev.opener&&!indentDone)out.push(mk("err",prev.n,0,"Il manque le bloc après cette ligne","La ligne "+prev.n+" se termine par "+bt(":")+" mais il n'y a rien après.","Ajoute en dessous, décalées de 4 espaces, les instructions du bloc (ou "+bt("pass")+" pour ne rien faire)."));
 return out;
}

/* =====================================================================
   PYTHON — analyse sémantique (noms, variables et fonctions inutilisées…)
   ===================================================================== */
var PY_AUG=setOf("+= -= *= /= //= %= **= >>= <<= &= |= ^= @=");
var PY_MODULES=setOf("random math time turtle pygame sys os asyncio json re string itertools collections datetime");
var PY_YIELDERS=setOf("flip update tick sleep input get wait delay mainloop ontimer textinput numinput done exitonclick show listen");
function PyScope(kind,parent,all){this.kind=kind;this.parent=parent;this.vars={};this.globals={};this.nonlocals={};this.reads=[];this.bodyIndent=undefined;all.push(this);}
function splitTop(T,sep){var out=[],cur=[],d=0,i,t;for(i=0;i<T.length;i++){t=T[i];
 if(t.t==="op"){if(has(PY_OPEN,t.v))d++;else if(has(PY_CLOSE,t.v))d--;else if(t.v===sep&&d===0){out.push(cur);cur=[];continue;}}
 cur.push(t);}
 out.push(cur);return out;}

function pySemantic(lines,srcLines,lx,opts){
 opts=opts||{};
 var issues=[],all=[],mod=new PyScope("module",null,all),calls=[],stmtNames=[],stack=[{scope:mod,indent:-1}],
     starNames={},starUnknown=false,globalDecl={};
 function moduleOf(s){while(s.parent)s=s.parent;return s;}
 function bind(sc,name,info){var target=sc;
  if(sc.globals[name])target=moduleOf(sc);
  else if(sc.nonlocals[name]){var s=sc.parent;while(s&&!has(s.vars,name))s=s.parent;if(s)target=s;}
  var v=has(target.vars,name)?target.vars[name]:null;
  if(!v){v=target.vars[name]={name:name,binds:[],uses:0,reads:0,kind:info.kind,scope:target};}
  v.binds.push(info);return v;}
 function pushRead(sc,name,tok,use,deferred){sc.reads.push({name:name,ln:tok.ln,c:tok.c,use:use,scope:sc,deferred:!!deferred});}
 function recordCall(T,i,sc,deferred){var j=i+2,d=1,cnt=0,n=0,kw=false,star=false,t,prev=T[i+1];
  for(;j<T.length;j++){t=T[j];
   if(t.t==="op"){
    if(has(PY_OPEN,t.v))d++;
    else if(has(PY_CLOSE,t.v)){d--;if(d===0)break;}
    else if(t.v===","&&d===1){if(cnt>0)n++;cnt=0;prev=t;continue;}
    else if((t.v==="*"||t.v==="**")&&d===1&&cnt===0)star=true;
    else if(t.v==="="&&d===1&&T[j-1].t==="name"&&(prev.v==="("||prev.v===","))kw=true;}
   cnt++;prev=t;}
  if(cnt>0)n++;
  calls.push({name:T[i].v,ln:T[i].ln,c:T[i].c,nargs:n,kw:kw,star:star,scope:sc,deferred:deferred});}
 /* lecture générique d'une expression */
 function reads(T,sc){var i,t,prev,next,depth=0,bst=[],lam=[],j,k;
  for(i=0;i<T.length;i++){t=T[i];prev=T[i-1];next=T[i+1];
   if(t.t==="op"){
    if(has(PY_OPEN,t.v)){bst.push(t.v);depth++;}
    else if(has(PY_CLOSE,t.v)){bst.pop();depth--;while(lam.length&&lam[lam.length-1]>depth)lam.pop();}
    else if(t.v===","){while(lam.length&&lam[lam.length-1]>=depth)lam.pop();}
    continue;}
   if(t.t==="str"){if(t.f){for(j=0;j<t.f.length;j++){var nn=namesInExpr(t.f[j]);for(k=0;k<nn.length;k++)pushRead(sc,nn[k],t,true,lam.length>0);}}continue;}
   if(t.t==="kw"){
    if(t.v==="lambda"){j=i+1;var rel=0,segStart=true;
     for(;j<T.length;j++){var u=T[j];
      if(u.t==="op"){if(has(PY_OPEN,u.v))rel++;else if(has(PY_CLOSE,u.v))rel--;else if(u.v===":"&&rel===0)break;else if(u.v===","&&rel===0){segStart=true;continue;}else if(u.v==="*"||u.v==="**")continue;}
      else if(u.t==="name"&&segStart&&rel===0){bind(sc,u.v,{kind:"param",ln:u.ln,c:u.c,indent:0});segStart=false;continue;}
      segStart=false;}
     i=j;lam.push(depth);continue;}
    if(t.v==="for"){j=i+1;
     for(;j<T.length;j++){var w=T[j];if(w.t==="kw"&&w.v==="in")break;if(w.t==="name"&&!(T[j-1].t==="op"&&T[j-1].v==="."))bind(sc,w.v,{kind:"loop",ln:w.ln,c:w.c,indent:0});}
     i=j;continue;}
    continue;}
   if(t.t==="name"){
    if(prev&&prev.t==="op"&&prev.v===".")continue;
    if(next&&next.t==="op"&&next.v==="="&&prev&&prev.t==="op"&&(prev.v==="("||prev.v===",")&&bst[bst.length-1]==="(")continue;
    if(next&&next.t==="op"&&next.v===":="){bind(sc,t.v,{kind:"var",ln:t.ln,c:t.c,indent:0});continue;}
    if(next&&next.t==="op"&&next.v==="(")recordCall(T,i,sc,lam.length>0);
    pushRead(sc,t.v,t,true,lam.length>0);}
  }}
 /* cibles d'une affectation / boucle for */
 function targets(seg,sc,L,kind,extra){var cur="T",st=[],i,t,prev,next;extra=extra||{};
  for(i=0;i<seg.length;i++){t=seg[i];prev=seg[i-1];next=seg[i+1];
   if(t.t==="op"){
    if(t.v==="("||t.v==="["){var trailer=i>0&&(prev.t==="name"||prev.t==="num"||prev.t==="str"||prev.v===")"||prev.v==="]"||prev.v==="}");st.push(cur);if(trailer)cur="E";}
    else if(t.v===")"||t.v==="]"){cur=st.pop()||"T";}
    continue;}
   if(t.t==="str"&&t.f){reads([t],sc);continue;}
   if(t.t!=="name")continue;
   if(prev&&prev.t==="op"&&prev.v===".")continue;
   if(cur==="E"||(next&&next.t==="op"&&(next.v==="."||next.v==="["||next.v==="("))){pushRead(sc,t.v,t,true,false);}
   else{bind(sc,t.v,{kind:kind,ln:t.ln,c:t.c,indent:L.indent,aug:!!extra.aug,selfRef:!!(extra.valueNames&&has(extra.valueNames,t.v))});
    if(extra.aug)pushRead(sc,t.v,t,false,false);}}
 }
 function parseParams(head,i0,sc){var res={params:[],req:0,max:0,star:false,kwstar:false},d=0,i,start=-1,end=-1;
  for(i=i0;i<head.length;i++){var t=head[i];if(t.t==="op"){if(t.v==="("){d++;if(d===1)start=i;}else if(t.v===")"){d--;if(d===0){end=i;break;}}}}
  if(start<0||end<0)return res;
  var segs=splitTop(head.slice(start+1,end),","),afterStar=false,s,seg;
  for(s=0;s<segs.length;s++){seg=segs[s];if(!seg.length)continue;
   var f=seg[0];
   if(f.t==="op"&&f.v==="*"){afterStar=true;if(seg[1]&&seg[1].t==="name"){res.star=true;res.params.push(seg[1].v);}continue;}
   if(f.t==="op"&&f.v==="**"){res.kwstar=true;if(seg[1]&&seg[1].t==="name")res.params.push(seg[1].v);continue;}
   if(f.t==="op"&&f.v==="/")continue;
   if(f.t!=="name")continue;
   res.params.push(f.v);
   var eq=-1,k,dd=0;for(k=1;k<seg.length;k++){var q=seg[k];if(q.t==="op"){if(has(PY_OPEN,q.v))dd++;else if(has(PY_CLOSE,q.v))dd--;else if(q.v==="="&&dd===0){eq=k;break;}}}
   if(seg.length>1)reads(seg.slice(1,eq>=0?eq:seg.length).filter(function(x){return !(x.t==="op"&&x.v===":");}),sc);
   if(eq>=0)reads(seg.slice(eq+1),sc);
   if(!afterStar){res.max++;if(eq<0)res.req++;}}
  res.end=end;return res;}
 function doImport(T,sc,L){var segs,i,seg,k,t;
  if(T[0].v==="import"){segs=splitTop(T.slice(1),",");
   for(i=0;i<segs.length;i++){seg=segs[i];if(!seg.length)continue;var as=-1;for(k=0;k<seg.length;k++)if(seg[k].t==="kw"&&seg[k].v==="as")as=k;
    var first=seg[0];if(first.t!=="name")continue;
    if(as>=0&&seg[as+1])bind(sc,seg[as+1].v,{kind:"import",ln:seg[as+1].ln,c:seg[as+1].c,indent:L.indent,mod:first.v});
    else bind(sc,first.v,{kind:"import",ln:first.ln,c:first.c,indent:L.indent,mod:first.v});}
   return;}
  var idx=-1;for(i=0;i<T.length;i++)if(T[i].t==="kw"&&T[i].v==="import"){idx=i;break;}
  if(idx<0)return;
  var mname="";for(i=1;i<idx;i++)mname+=T[i].v;
  var rest=T.slice(idx+1).filter(function(x){return !(x.t==="op"&&(x.v==="("||x.v===")"));});
  if(mname==="__future__")return;
  if(rest[0]&&rest[0].t==="op"&&rest[0].v==="*"){if(has(PY_STAR,mname)){var nl=PY_STAR[mname].split(" "),q;for(q=0;q<nl.length;q++)starNames[nl[q]]=1;}else starUnknown=true;return;}
  segs=splitTop(rest,",");
  for(i=0;i<segs.length;i++){seg=segs[i];if(!seg.length||seg[0].t!=="name")continue;
   var asn=-1;for(k=0;k<seg.length;k++)if(seg[k].t==="kw"&&seg[k].v==="as")asn=k;
   var nt=(asn>=0&&seg[asn+1])?seg[asn+1]:seg[0];
   bind(sc,nt.v,{kind:"import",ln:nt.ln,c:nt.c,indent:L.indent,mod:mname,from:true});}}
 function withAs(head,sc,L){var rest=[],i,t;
  for(i=0;i<head.length;i++){t=head[i];
   if(t.t==="kw"&&t.v==="as"&&head[i+1]&&head[i+1].t==="name"){bind(sc,head[i+1].v,{kind:"other",ln:head[i+1].ln,c:head[i+1].c,indent:L.indent});i++;continue;}
   rest.push(t);}
  reads(rest,sc);}
 function newScope(kind,sc,L,nameTok,head,body){
  var ns=new PyScope(kind,sc,all);ns.name=nameTok.v;ns.headerIndent=L.indent;return ns;}
 function stmt(T,sc,L){
  if(!T.length)return;
  var parts=splitTop(T,";");if(parts.length>1){var pi;for(pi=0;pi<parts.length;pi++)stmt(parts[pi],sc,L);return;}
  var t0=T[0],ci,head,body,i;
  if(t0.t==="op"&&t0.v==="@"){reads(T.slice(1),sc);return;}
  if(t0.t==="kw"){
   var v=t0.v;
   if(v==="async"){stmt(T.slice(1),sc,L);return;}
   if(v==="def"||v==="class"||v==="for"||v==="while"||v==="if"||v==="elif"||v==="else"||v==="try"||v==="finally"||v==="with"||v==="except"){
    ci=topColon(T);head=T.slice(0,ci<0?T.length:ci);body=ci<0?[]:T.slice(ci+1);
    if(v==="def"){var nt=head[1];if(!nt||nt.t!=="name"){reads(head.slice(1),sc);return;}
     var info=parseParams(head,2,sc);
     if(info.end!==undefined&&head.length>info.end+1)reads(head.slice(info.end+1).filter(function(x){return !(x.t==="op"&&x.v==="->");}),sc);
     var kind=sc.kind==="class"?"method":"func";
     var fs=newScope("func",sc,L,nt);
     bind(sc,nt.v,{kind:kind,ln:nt.ln,c:nt.c,indent:L.indent,def:true,finfo:info,fnScope:fs});
     var pn;for(pn=0;pn<info.params.length;pn++)bind(fs,info.params[pn],{kind:"param",ln:nt.ln,c:nt.c,indent:L.indent});
     if(body.length)stmt(body,fs,L);else stack.push({scope:fs,indent:L.indent});return;}
    if(v==="class"){var ct=head[1];if(!ct||ct.t!=="name"){return;}
     var cs=newScope("class",sc,L,ct);
     bind(sc,ct.v,{kind:"class",ln:ct.ln,c:ct.c,indent:L.indent,def:true,fnScope:cs});
     reads(head.slice(2),sc);
     if(body.length)stmt(body,cs,L);else stack.push({scope:cs,indent:L.indent});return;}
    if(v==="for"){var inIdx=-1,d=0;for(i=1;i<head.length;i++){var h=head[i];if(h.t==="op"){if(has(PY_OPEN,h.v))d++;else if(has(PY_CLOSE,h.v))d--;}else if(h.t==="kw"&&h.v==="in"&&d===0){inIdx=i;break;}}
     if(inIdx<0)reads(head.slice(1),sc);else{targets(head.slice(1,inIdx),sc,L,"loop");reads(head.slice(inIdx+1),sc);}
     if(body.length)stmt(body,sc,L);return;}
    if(v==="while"||v==="if"||v==="elif"){reads(head.slice(1),sc);if(body.length)stmt(body,sc,L);return;}
    if(v==="with"||v==="except"){withAs(head.slice(1),sc,L);if(body.length)stmt(body,sc,L);return;}
    if(body.length)stmt(body,sc,L);return;}
   if(v==="import"||v==="from"){doImport(T,sc,L);return;}
   if(v==="global"||v==="nonlocal"){for(i=1;i<T.length;i++)if(T[i].t==="name"){if(v==="global"){sc.globals[T[i].v]=true;globalDecl[T[i].v]=true;}else sc.nonlocals[T[i].v]=true;}return;}
   reads(T,sc);return;}
  /* affectations */
  var d0=0,eqs=[],augAt=-1,colonAt=-1;
  for(i=0;i<T.length;i++){var tk=T[i];if(tk.t!=="op")continue;
   if(has(PY_OPEN,tk.v))d0++;else if(has(PY_CLOSE,tk.v))d0--;
   else if(d0===0){if(tk.v==="="){eqs.push(i);}else if(has(PY_AUG,tk.v)&&augAt<0)augAt=i;else if(tk.v===":"&&colonAt<0)colonAt=i;}}
  function valNames(arr){var o={},k;for(k=0;k<arr.length;k++)if(arr[k].t==="name"&&!(arr[k-1]&&arr[k-1].v==="."))o[arr[k].v]=1;return o;}
  if(augAt>=0){var value=T.slice(augAt+1);reads(value,sc);targets(T.slice(0,augAt),sc,L,"var",{aug:true,valueNames:valNames(value)});return;}
  if(eqs.length){var segs=[],prevI=-1,e;for(e=0;e<eqs.length;e++){segs.push(T.slice(prevI+1,eqs[e]));prevI=eqs[e];}
   var val=T.slice(prevI+1);reads(val,sc);var vn=valNames(val);
   for(e=0;e<segs.length;e++){var sg=segs[e];
    if(sg.length>1&&sg[0].t==="name"&&sg[1].t==="op"&&sg[1].v===":"){reads(sg.slice(2),sc);sg=[sg[0]];}
    targets(sg,sc,L,"var",{valueNames:vn});}
   return;}
  if(colonAt===1&&t0.t==="name"){bind(sc,t0.v,{kind:"var",ln:t0.ln,c:t0.c,indent:L.indent});reads(T.slice(2),sc);return;}
  reads(T,sc);
  if(T.length===1&&t0.t==="name")stmtNames.push({name:t0.v,ln:t0.ln,c:t0.c,scope:sc});
 }
 /* --- parcours des lignes --- */
 var li,L;
 for(li=0;li<lines.length;li++){L=lines[li];if(!L.tokens.length)continue;
  while(stack.length>1&&L.indent<=stack[stack.length-1].indent)stack.pop();
  var sc=stack[stack.length-1].scope;if(sc.bodyIndent===undefined)sc.bodyIndent=L.indent;
  stmt(L.tokens,sc,L);}

 /* --- résolution des noms --- */
 function lookup(sc,name){var s=sc,first=true;if(sc.globals[name]){s=mod;first=false;}
  while(s){if(s.kind==="class"&&!first){s=s.parent;continue;}if(has(s.vars,name))return s.vars[name];first=false;s=s.parent;}return null;}
 function inside(S,v){var b,i;for(i=0;i<v.binds.length;i++){b=v.binds[i];if(b.fnScope){var s=S;while(s){if(s===b.fnScope)return true;s=s.parent;}}}return false;}
 var unboundNames={},undef={},undefOrder=[],orderIssues={},si,ri,S,r,v;
 var cands=[];for(si=0;si<all.length;si++)for(var nm in all[si].vars)if(has(all[si].vars,nm))cands.push(nm);
 cands=uniq(cands.concat(Object.keys(PY_BUILTINS),Object.keys(starNames)));
 var known=uniq(cands);
 for(si=0;si<all.length;si++){S=all[si];
  for(ri=0;ri<S.reads.length;ri++){r=S.reads[ri];v=lookup(S,r.name);
   if(v){v.reads++;
    if(r.use){var selfUse=(v.kind==="func"||v.kind==="method"||v.kind==="class")&&inside(S,v);if(!selfUse)v.uses++;}
    if(r.use&&v.scope===mod&&S===mod&&!r.deferred&&v.binds.length&&v.binds[0].ln>r.ln&&!has(orderIssues,r.name)){
     var firstBind=v.binds[0],minLn=firstBind.ln,b2;for(var q=0;q<v.binds.length;q++)if(v.binds[q].ln<minLn)minLn=v.binds[q].ln;
     if(minLn>r.ln)orderIssues[r.name]={r:r,v:v,bl:minLn};}
   }else if(!has(PY_BUILTINS,r.name)&&!has(starNames,r.name)&&!/^_{3,}$/.test(r.name)){
    if(!has(undef,r.name)){undef[r.name]=[];undefOrder.push(r.name);}undef[r.name].push(r.ln);}}}
 var ni,name,lns;
 if(!starUnknown){
  for(ni=0;ni<undefOrder.length;ni++){name=undefOrder[ni];lns=uniq(undef[name]);
   var sug=suggere(name,known),titre="Nom inconnu : « "+name+" »",texte="Python ne connaît pas le nom "+bt(name)+" (ligne"+(lns.length>1?"s ":" ")+lns.join(", ")+"). Il n'a pas été créé plus haut et ce n'est pas une commande connue.",aide;
   if(has(PY_JSHABIT,name)){titre="« "+name+" » n'existe pas en Python";texte=PY_JSHABIT[name];aide=sug?"Tu voulais peut-être écrire "+bt(sug)+" ?":"";if(name==="null"||name==="undefined")aide="Écris "+bt("None")+".";else if(name==="this")aide="Écris "+bt("self")+".";}
   else if(has(PY_MODULES,name))aide="Il manque probablement "+bt("import "+name)+" tout en haut du programme.";
   else if(sug)aide="Tu voulais peut-être écrire "+bt(sug)+" ? (Les majuscules et minuscules comptent, et une lettre de travers suffit pour que ça ne marche plus.)";
   else aide="Vérifie l'orthographe, ou crée d'abord la variable ("+bt(name+" = …")+") avant de l'utiliser, ou ajoute l'import qui manque (par exemple "+bt("import random")+").";
   issues.push(mk("err",lns[0],0,titre,texte,aide));}
 }
 for(var on in orderIssues)if(has(orderIssues,on)){var oi=orderIssues[on],isF=oi.v.kind==="func"||oi.v.kind==="class";
  issues.push(mk("err",oi.r.ln,oi.r.c,"« "+on+" » est utilisé avant d'être créé",bt(on)+" est utilisé ligne "+oi.r.ln+", mais il n'est créé que ligne "+oi.bl+". Python lit le programme de haut en bas : il ne connaît pas encore "+(isF?"cette fonction":"cette variable")+".",isF?"Place la définition "+bt("def "+on+"(…):")+" plus haut que la ligne "+oi.r.ln+".":"Donne d'abord une valeur à "+bt(on)+" ("+bt(on+" = …")+") avant la ligne "+oi.r.ln+"."));}

 /* variable locale utilisée avant d'avoir une valeur (oubli de « global ») */
 for(si=0;si<all.length;si++){S=all[si];if(S.kind!=="func")continue;
  for(var vn2 in S.vars){if(!has(S.vars,vn2))continue;var lv=S.vars[vn2];
   if(lv.kind!=="var"||S.globals[vn2]||S.nonlocals[vn2])continue;
   var fb=lv.binds[0],bad=false,badLn=fb.ln,k2;
   if(fb.aug||fb.selfRef)bad=true;
   else for(k2=0;k2<S.reads.length;k2++){var rr=S.reads[k2];if(rr.name===vn2&&rr.ln<fb.ln){bad=true;badLn=rr.ln;break;}}
   if(!bad)continue;
   unboundNames[vn2]=1;var outer=S.parent?lookup(S.parent,vn2):null;
   issues.push(mk("err",badLn,0,outer?"« "+vn2+" » doit être déclaré « global » dans la fonction":"« "+vn2+" » est utilisé avant d'avoir une valeur","Dans la fonction "+bt(S.name)+", "+bt(vn2)+" reçoit une valeur (ligne "+fb.ln+"), donc Python la prend pour une nouvelle variable locale — mais ligne "+badLn+" tu t'en sers avant qu'elle ait une valeur (erreur « UnboundLocalError »).",outer?"Ajoute "+bt("global "+vn2)+" tout au début de la fonction "+bt(S.name)+", pour dire que tu modifies la variable du programme principal.":"Donne-lui une valeur avant de la lire."));}}

 /* nombre de valeurs passées aux fonctions */
 var done={},ci2;
 for(ci2=0;ci2<calls.length;ci2++){var c=calls[ci2];if(c.kw||c.star)continue;
  var fv=lookup(c.scope,c.name);if(!fv||fv.kind!=="func"||fv.binds.length!==1)continue;var fi=fv.binds[0].finfo;if(!fi||fi.star||fi.kwstar)continue;
  if(c.nargs<fi.req||c.nargs>fi.max){var key=c.name+":"+c.ln;if(done[key])continue;done[key]=1;
   var attendu=fi.req===fi.max?String(fi.max):"entre "+fi.req+" et "+fi.max;
   issues.push(mk("err",c.ln,c.c,"Mauvais nombre de valeurs pour « "+c.name+" »","La fonction "+bt(c.name)+" (définie ligne "+fv.binds[0].ln+") attend "+attendu+" valeur"+(fi.max>1?"s":"")+", mais tu en donnes "+c.nargs+" ligne "+c.ln+".","Sa définition est "+bt("def "+c.name+"("+fi.params.join(", ")+"):")+" : l'appel doit avoir autant de valeurs entre parenthèses."));}}

 /* ---- CONSEILS ---- */
 var advice=[];
 for(si=0;si<all.length;si++){S=all[si];
  for(var vn3 in S.vars){if(!has(S.vars,vn3))continue;var vv=S.vars[vn3],b0=vv.binds[0];
   if(vn3.charAt(0)==="_"||S.globals[vn3]||has(unboundNames,vn3))continue;
   if(vv.kind==="var"&&vv.uses===0){
    advice.push(mk("adv",b0.ln,b0.c,"Variable « "+vn3+" » jamais utilisée","Tu crées "+bt(vn3)+" ligne "+b0.ln+(vv.reads>0?", tu changes sa valeur,":"")+" mais tu ne t'en sers nulle part ensuite.","Supprime cette ligne si elle est inutile, ou utilise "+bt(vn3)+" là où tu en as besoin. Si tu pensais l'utiliser, vérifie que tu l'as bien écrite pareil (une faute de frappe suffit)."));}
   else if(vv.kind==="func"&&vv.uses===0){
    advice.push(mk("adv",b0.ln,b0.c,"Fonction « "+vn3+" » jamais appelée","Tu définis la fonction "+bt(vn3)+" ligne "+b0.ln+", mais personne ne l'appelle : elle ne s'exécutera jamais.","Appelle-la quelque part avec "+bt(vn3+"()")+(vv.binds[0].finfo&&vv.binds[0].finfo.max>0?" (avec ses valeurs entre parenthèses)":"")+", ou supprime-la si elle ne sert plus."));}
   else if(vv.kind==="import"&&vv.uses===0){
    advice.push(mk("adv",b0.ln,b0.c,"Import inutile : « "+vn3+" »","Tu importes "+bt(vn3)+" ligne "+b0.ln+" mais tu ne t'en sers jamais.","Supprime cette ligne, ou utilise-le (par exemple "+bt(vn3+".quelque_chose(…)")+")."));}
   if((vv.kind==="func"||vv.kind==="class")&&vv.binds.length>1){
    var defs=[],z;for(z=0;z<vv.binds.length;z++)if(vv.binds[z].def&&vv.binds[z].indent===S.bodyIndent)defs.push(vv.binds[z]);
    if(defs.length>1)advice.push(mk("adv",defs[1].ln,defs[1].c,(vv.kind==="class"?"Classe":"Fonction")+" « "+vn3+" » définie deux fois",bt(vn3)+" est définie ligne "+defs[0].ln+" puis à nouveau ligne "+defs[1].ln+" : la deuxième version remplace la première, qui ne sert alors plus à rien.","Donne un nom différent à l'une des deux, ou supprime celle que tu n'utilises pas."));}}}
 /* nom tout seul sur une ligne */
 var sn;for(sn=0;sn<stmtNames.length;sn++){var s0=stmtNames[sn],sv=lookup(s0.scope,s0.name),callable=(sv&&(sv.kind==="func"||sv.kind==="method"))||has(starNames,s0.name)||(!sv&&has(PY_BUILTINS,s0.name));
  if(s0.name==="pass"||(!sv&&!has(PY_BUILTINS,s0.name)&&!has(starNames,s0.name)))continue;
  advice.push(mk("adv",s0.ln,s0.c,callable?"« "+s0.name+" » ne fait rien tout seul":"Cette ligne ne fait rien",callable?"Écrire seulement le nom d'une fonction ne l'exécute pas.":"Écrire seulement le nom d'une variable ne fait rien.",callable?"Pour l'exécuter, ajoute des parenthèses : "+bt(s0.name+"()")+".":"Si tu voulais l'afficher, écris "+bt("print("+s0.name+")")+"."));}
 /* boucles while */
 var wl;for(wl=0;wl<lines.length;wl++){var WL=lines[wl];if(!WL.tokens.length||WL.tokens[0].v!=="while"||WL.tokens[0].t!=="kw")continue;
  var wci=topColon(WL.tokens);if(wci<0)continue;
  var cond=WL.tokens.slice(1,wci),bodyT=WL.tokens.slice(wci+1),x;
  for(x=wl+1;x<lines.length&&lines[x].indent>WL.indent;x++)bodyT=bodyT.concat(lines[x].tokens);
  var exit=false,yields=false,assigned={},condNames={},complex=false,mutated={};
  for(x=0;x<bodyT.length;x++){var bt2=bodyT[x],bn=bodyT[x+1];
   if(bt2.t==="kw"&&(bt2.v==="break"||bt2.v==="return"||bt2.v==="raise"))exit=true;
   if(bt2.t==="name"&&(bt2.v==="exit"||bt2.v==="quit"))exit=true;
   if(bt2.t==="name"&&has(PY_YIELDERS,bt2.v))yields=true;
   if(bt2.t==="name"&&bn&&bn.t==="op"&&(bn.v==="="||has(PY_AUG,bn.v)||bn.v===":="))assigned[bt2.v]=1;
   if(bt2.t==="kw"&&bt2.v==="for"){var y=x+1;while(y<bodyT.length&&!(bodyT[y].t==="kw"&&bodyT[y].v==="in")){if(bodyT[y].t==="name")assigned[bodyT[y].v]=1;y++;}}
   if(bt2.t==="name"&&bn&&bn.v==="."&&bodyT[x+2]&&bodyT[x+2].t==="name")mutated[bt2.v]=1;
   if(bt2.t==="name"&&bn&&bn.t==="op"&&bn.v==="["&&false)mutated[bt2.v]=1;}
  for(x=0;x<cond.length;x++){var ct2=cond[x];if(ct2.t==="name")condNames[ct2.v]=1;if(ct2.t==="op"&&(ct2.v==="("||ct2.v==="."||ct2.v==="["))complex=true;}
  var constTrue=cond.length===1&&((cond[0].t==="name"&&cond[0].v==="True")||(cond[0].t==="num"&&Number(cond[0].v)!==0));
  if(constTrue&&!exit&&!yields)advice.push(mk("adv",WL.n,WL.tokens[0].c,"Boucle infinie","Cette boucle "+bt("while True:")+" ne contient ni "+bt("break")+", ni "+bt("return")+" : elle ne s'arrêtera jamais et le programme va se figer.","Ajoute une condition d'arrêt avec "+bt("break")+", ou utilise une vraie condition (par exemple "+bt("while compteur < 10:")+")."));
  else if(!constTrue&&!complex&&!exit&&!yields&&cond.length){var cn=Object.keys(condNames),any=false;for(x=0;x<cn.length;x++)if(has(assigned,cn[x])||has(mutated,cn[x])||has(globalDecl,cn[x]))any=true;
   if(cn.length&&!any)advice.push(mk("adv",WL.n,WL.tokens[0].c,"La condition du while ne change jamais","Dans la boucle de la ligne "+WL.n+", aucune des variables de la condition ("+cn.map(bt).join(", ")+") n'est modifiée : la boucle risque de ne jamais s'arrêter.","Modifie la variable dans la boucle (par exemple "+bt(cn[0]+" += 1")+")."));}}
 /* trous à remplir */
 var holes=[],hl;for(hl=0;hl<srcLines.length;hl++)if(/(^|[^_])_{3}([^_]|$)/.test(srcLines[hl]))holes.push(hl+1);
 if(holes.length)advice.push(mk("adv",holes[0],0,"Il reste des trous « ___ » à remplir","Les "+bt("___")+" (ligne"+(holes.length>1?"s ":" ")+holes.join(", ")+") sont des trous : remplace-les par la bonne valeur avant de tester.","Lis la consigne et l'exemple au-dessus, puis écris la valeur à la place de chaque "+bt("___")+"."));
 /* tabulations */
 if(lx.tabLine&&lx.spLine)advice.push(mk("adv",lx.tabLine,0,"Tabulations et espaces mélangés","Certaines lignes sont décalées avec des tabulations, d'autres avec des espaces : Python peut s'y perdre.","Utilise toujours 4 espaces pour décaler (la touche Tab de l'éditeur en écrit 4)."));
 return {issues:issues.concat(advice),names:known};
}

function analysePython(code,opts){
 opts=opts||{};var src=String(code).replace(/\r\n?/g,"\n"),srcLines=src.split("\n");
 if(!src.replace(/\s+/g,""))return {issues:[],names:[]};
 var lx=pyLex(src),errs=lx.errs.slice();
 if(!errs.length)errs=pyStruct(lx.lines,srcLines);
 if(errs.length){errs.sort(function(a,b){return a.ligne-b.ligne||a.col-b.col;});return {issues:errs,names:[],syntax:true};}
 var r=pySemantic(lx.lines,srcLines,lx,opts);
 r.issues.sort(function(a,b){return (a.niveau===b.niveau?0:(a.niveau==="err"?-1:1))||a.ligne-b.ligne;});
 return r;
}
D.analysePython=analysePython;

/* =====================================================================
   JAVASCRIPT — erreurs de syntaxe (acorn) et analyse de portée
   ===================================================================== */
var JS_GLOBALS=setOf("window document console Math JSON Date Array Object String Number Boolean Symbol BigInt RegExp Error TypeError RangeError SyntaxError ReferenceError EvalError URIError Promise Set Map WeakSet WeakMap parseInt parseFloat isNaN isFinite NaN Infinity undefined globalThis setTimeout setInterval clearTimeout clearInterval requestAnimationFrame cancelAnimationFrame alert prompt confirm Image Audio localStorage sessionStorage performance fetch Event KeyboardEvent MouseEvent TouchEvent PointerEvent navigator location history innerWidth innerHeight screen devicePixelRatio event arguments encodeURIComponent decodeURIComponent encodeURI decodeURI Intl Reflect Proxy ArrayBuffer Float32Array Float64Array Int8Array Int16Array Int32Array Uint8Array Uint8ClampedArray Uint16Array Uint32Array DataView Blob URL FileReader XMLHttpRequest FormData HTMLElement HTMLCanvasElement CanvasRenderingContext2D Path2D OffscreenCanvas AudioContext structuredClone queueMicrotask atob btoa self top parent frames name length crypto getComputedStyle matchMedia scrollTo scrollX scrollY open close focus blur requestIdleCallback addEventListener removeEventListener dispatchEvent onload onerror onkeydown onkeyup onmousemove onclick Option Worker WebSocket");
var CTX_LIST="canvas getContextAttributes save restore scale rotate translate transform setTransform getTransform resetTransform createLinearGradient createRadialGradient createConicGradient createPattern clearRect fillRect strokeRect beginPath fill stroke clip isPointInPath isPointInStroke fillText strokeText measureText drawImage createImageData getImageData putImageData setLineDash getLineDash closePath moveTo lineTo bezierCurveTo quadraticCurveTo arc arcTo ellipse rect roundRect drawFocusIfNeeded reset isContextLost fillStyle strokeStyle lineWidth lineCap lineJoin miterLimit lineDashOffset shadowBlur shadowColor shadowOffsetX shadowOffsetY globalAlpha globalCompositeOperation font textAlign textBaseline direction imageSmoothingEnabled imageSmoothingQuality filter fontKerning fontStretch fontVariantCaps letterSpacing textRendering wordSpacing hasOwnProperty toString valueOf constructor".split(" ");
var CTX_PROPS=setOf("canvas fillStyle strokeStyle lineWidth lineCap lineJoin miterLimit lineDashOffset shadowBlur shadowColor shadowOffsetX shadowOffsetY globalAlpha globalCompositeOperation font textAlign textBaseline direction imageSmoothingEnabled imageSmoothingQuality filter");
var CTX_SET=setOf(CTX_LIST.join(" "));
var MATH_LIST="abs acos acosh asin asinh atan atan2 atanh cbrt ceil clz32 cos cosh exp expm1 floor fround hypot imul log log10 log1p log2 max min pow random round sign sin sinh sqrt tan tanh trunc E LN10 LN2 LOG10E LOG2E PI SQRT1_2 SQRT2".split(" ");
var DOC_LIST="getElementById querySelector querySelectorAll getElementsByClassName getElementsByTagName getElementsByName createElement createTextNode createDocumentFragment addEventListener removeEventListener body head title documentElement cookie readyState hidden activeElement forms images links location write writeln open close hasFocus exitFullscreen fullscreenElement createEvent dispatchEvent defaultView domain referrer URL characterSet contentType styleSheets scripts all onkeydown onkeyup onclick onmousemove onmousedown onmouseup".split(" ");
var CONSOLE_LIST="log error warn info table clear dir assert count countReset time timeEnd timeLog group groupEnd groupCollapsed debug trace".split(" ");
var COMMON_PROPS="length push pop shift unshift splice slice indexOf includes forEach map filter join toString toFixed getContext addEventListener getElementById innerHTML textContent width height style classList setAttribute getAttribute querySelector toUpperCase toLowerCase substring charAt split replace trim clientWidth clientHeight offsetWidth offsetHeight keyCode preventDefault stopPropagation target currentTarget clientX clientY offsetX offsetY key code floor random".split(" ");
var JS_PYHABIT={True:"true",False:"false",None:"null",print:"console.log(…)",self:"this",len:".length (par exemple liste.length)",range:"une boucle for (let i = 0; i < n; i++)",input:"prompt(…)",def:"function",elif:"else if",pass:"rien (laisse le bloc vide)"};

function jsSyntaxIssue(code,err,brIssue){
 var loc=err.loc||{line:1,column:0},msg=String(err.message).replace(/\s*\(\d+:\d+\)\s*$/,""),pos=err.pos||0;
 if(brIssue&&(brIssue.eof||brIssue.ligne<=loc.line))return brIssue;
 var rest=code.slice(pos),m=/^[A-Za-z_$][\w$]*|^\d[\w.]*|^["'`]|^\S/.exec(rest),tok=m?m[0]:"",ln=loc.line,col=loc.column,before=code.slice(0,pos).replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|\s)+$/,""),pc=before.charAt(before.length-1);
 var mm;
 if(/Unterminated string/.test(msg))return mk("err",ln,col,"Guillemet non fermé","Le texte commencé ici n'est pas terminé : il manque le guillemet de fin (le même que celui du début), sur la même ligne.","Ajoute le guillemet manquant à la fin du texte.");
 if(/Unterminated template/.test(msg))return mk("err",ln,col,"Accent grave « ` » non fermé","Le texte entre accents graves commencé ici n'est jamais terminé.","Ajoute un accent grave à la fin du texte.");
 if(/Unterminated comment/.test(msg))return mk("err",ln,col,"Commentaire jamais fermé","Le commentaire /* commencé ici n'est jamais fermé par */.","Ajoute */ à la fin du commentaire.");
 if((mm=/Identifier '(.+)' has already been declared/.exec(msg)))return mk("err",ln,col,"« "+mm[1]+" » est déjà déclaré","Tu as déjà créé "+bt(mm[1])+" avec let ou const : on ne peut pas la déclarer deux fois.","Pour changer sa valeur, écris simplement "+bt(mm[1]+" = …")+" sans "+bt("let")+" ni "+bt("const")+". Sinon, choisis un autre nom.");
 if(/Unexpected character/.test(msg)){var ch=rest.charAt(0),ex="Ce caractère n'a pas de sens ici en JavaScript.",ai="Supprime-le ou remplace-le.";
  if(ch==="\u201C"||ch==="\u201D"||ch==="\u00AB"||ch==="\u00BB"){ex="Ce sont des guillemets « typographiques » (copiés depuis Word ou un site).";ai="Remplace-les par des guillemets droits \" ou '.";}
  else if(ch==="\u2018"||ch==="\u2019"){ex="C'est une apostrophe « typographique » (copiée depuis Word ou un site).";ai="Remplace-la par une apostrophe droite '.";}
  else if(ch==="\u00A0"){ex="C'est une espace insécable invisible (souvent copiée depuis un site).";ai="Supprime-la puis retape une vraie espace.";}
  return mk("err",ln,col,"Caractère inattendu : "+(ch==="\u00A0"?"espace insécable":ch),ex,ai);}
 if(/'return' outside of function/.test(msg))return mk("err",ln,col,"« return » en dehors d'une fonction","Le mot "+bt("return")+" ne peut s'utiliser que dans une fonction.","Mets ce "+bt("return")+" dans une fonction, ou supprime-le.");
 if(/Assigning to rvalue|Parenthesized pattern|Invalid left-hand side/.test(msg))return mk("err",ln,col,"On ne peut pas donner une valeur à cela","À gauche du signe "+bt("=")+" il faut un nom de variable (ou une propriété). Pour comparer deux valeurs, on écrit "+bt("==")+" ou "+bt("===")+".","Vérifie le signe "+bt("=")+" de la ligne "+ln+".");
 if(/import|export/.test(msg)&&/outside|module|sourceType/.test(msg))return mk("err",ln,col,"import/export non disponibles ici","Cet éditeur exécute un script simple : les mots "+bt("import")+" et "+bt("export")+" ne sont pas permis.","Supprime cette ligne : tout ton code doit tenir dans ce fichier.");
 if(pos>=code.replace(/\s+$/,"").length||tok==="")return mk("err",ln,col,"Le programme se termine trop tôt","Le code s'arrête alors qu'il manque encore quelque chose (souvent une fermeture "+bt("}")+", "+bt(")")+" ou "+bt("]")+").","Compte les ouvertures et les fermetures : chaque "+bt("{")+" doit avoir son "+bt("}")+", chaque "+bt("(")+" son "+bt(")")+".");
 if(tok===")"||tok==="]"||tok==="}")return mk("err",ln,col,bt(tok)+" inattendu","Le programme ne s'attendait pas à "+bt(tok)+" ici : il manque quelque chose juste avant (une valeur, une virgule), ou il y a une fermeture en trop.","Relis la ligne "+ln+" et celle d'avant : y a-t-il une valeur manquante ou un "+bt(tok)+" de trop ?");
 if(/[\w$)\]"'`]/.test(pc)&&/^[A-Za-z_$\d"'`]/.test(tok)&&before.split("\n").length===code.slice(0,pos).split("\n").length)return mk("err",ln,col,"Il manque quelque chose avant « "+tok+" »","Deux éléments se suivent sans rien entre eux. Il manque un point-virgule "+bt(";")+", une virgule "+bt(",")+", un opérateur ("+bt("+")+", "+bt("*")+"…) ou une parenthèse.","Regarde ce qu'il y a juste avant "+bt(tok)+" ligne "+ln+" et ajoute le caractère manquant.");
 if(/[\w$)\]"'`]/.test(pc)&&/^[A-Za-z_$\d"'`]/.test(tok))return mk("err",ln,col,"« "+tok+" » est inattendu","Le programme ne comprend pas "+bt(tok)+" ici. Souvent, c'est qu'il manque un point-virgule "+bt(";")+" ou une virgule "+bt(",")+" à la fin de la ligne d'avant, ou une parenthèse non fermée.","Regarde la fin de la ligne précédente ("+bt(before.split("\n").pop().trim().slice(-30))+") et la ligne "+ln+".");
 return mk("err",ln,col,"Le programme ne comprend pas « "+tok+" » ici","Il y a une erreur d'écriture à cet endroit ("+bt(tok)+").","Vérifie les parenthèses, les accolades, les guillemets et les virgules autour de la ligne "+ln+".");
}
/* repérage des parenthèses/accolades/guillemets (pour mieux expliquer une erreur de syntaxe) */
function jsBrackets(code){
 var st=[],i=0,n=code.length,line=1,ls=0,last="",c,OP={"(":")","[":"]","{":"}"},CL={")":"(","]":"[","}":"{"},NM={"(":"parenthèse","[":"crochet","{":"accolade"};
 function nl(seg){var k,p=0;for(k=0;k<seg.length;k++)if(seg.charAt(k)==="\n"){line++;p=k;}return p;}
 function tpl(){ /* i est après ` ou après } de ${…} : lit le texte du gabarit */
  while(i<n){var ch=code.charAt(i);
   if(ch==="\\"){i+=2;continue;}
   if(ch==="\n"){line++;ls=i+1;}
   if(ch==="`"){i++;return "end";}
   if(ch==="$"&&code.charAt(i+1)==="{"){st.push({ch:"${",ln:line,c:i-ls});i+=2;return "expr";}
   i++;}
  return "eof";}
 while(i<n){c=code.charAt(i);
  if(c==="\n"){line++;ls=i+1;i++;continue;}
  if(c==="/"&&code.charAt(i+1)==="/"){while(i<n&&code.charAt(i)!=="\n")i++;continue;}
  if(c==="/"&&code.charAt(i+1)==="*"){var e=code.indexOf("*/",i+2);if(e<0)return mk("err",line,i-ls,"Commentaire jamais fermé","Le commentaire /* commencé ligne "+line+" n'est jamais fermé.","Ajoute */ à la fin du commentaire.");var seg=code.slice(i,e+2),p=nl(seg);if(seg.indexOf("\n")>=0)ls=i+p+1;i=e+2;continue;}
  if(c==="'"||c==='"'){var sl=line,sc=i-ls;i++;while(i<n&&code.charAt(i)!==c&&code.charAt(i)!=="\n"){if(code.charAt(i)==="\\")i++;i++;}
   if(code.charAt(i)!==c){var r=mk("err",sl,sc,"Guillemet non fermé","Le texte commencé ligne "+sl+" n'est pas terminé : il manque le guillemet de fin "+bt(c)+" sur la même ligne.","Ajoute "+bt(c)+" à la fin du texte.");return r;}
   i++;last="s";continue;}
  if(c==="`"){i++;var sl2=line,sc2=i-1-ls,rs=tpl();if(rs==="eof")return mk("err",sl2,sc2,"Accent grave « ` » non fermé","Le texte entre accents graves commencé ligne "+sl2+" n'est jamais terminé.","Ajoute un accent grave à la fin du texte.");last="s";continue;}
  if(c==="/"&&(last===""||"(,=:[!&|?{};+-*%<>~^".indexOf(last)>=0)){var j=i+1,inCls=false,okr=false;
   while(j<n&&code.charAt(j)!=="\n"){var d=code.charAt(j);if(d==="\\")j++;else if(d==="[")inCls=true;else if(d==="]")inCls=false;else if(d==="/"&&!inCls){okr=true;break;}j++;}
   if(okr){i=j+1;while(i<n&&/[a-z]/.test(code.charAt(i)))i++;last="s";continue;}}
  if(OP[c]){st.push({ch:c,ln:line,c:i-ls});i++;last=c;continue;}
  if(CL[c]){var top=st.pop();
   if(c==="}"&&top&&top.ch==="${"){i++;var rs2=tpl();if(rs2==="eof")return mk("err",line,i-ls,"Accent grave « ` » non fermé","Un texte entre accents graves n'est jamais terminé.","Ajoute un accent grave.");last="s";continue;}
   if(!top)return mk("err",line,i-ls,bt(c)+" en trop","Il y a un "+bt(c)+" fermant, mais aucun "+bt(CL[c])+" ouvrant avant.","Supprime ce "+bt(c)+", ou ajoute le "+bt(CL[c])+" qui manque plus haut.");
   if(OP[top.ch]!==c)return mk("err",line,i-ls,bt(c)+" ne correspond pas à "+bt(top.ch),"Tu as ouvert une "+NM[top.ch]+" "+bt(top.ch)+" ligne "+top.ln+", mais tu la fermes avec "+bt(c)+".","Ferme-la avec "+bt(OP[top.ch])+".");
   i++;last=c;continue;}
  if(c!==" "&&c!=="\t"&&c!=="\r")last=c;
  i++;}
 if(st.length){var o=st[st.length-1];if(o.ch==="${")o=st[0];var r2=mk("err",o.ln,o.c,bt(o.ch)+" jamais fermée","La "+NM[o.ch]+" "+bt(o.ch)+" ouverte ligne "+o.ln+" n'est jamais refermée.","Ajoute "+bt(OP[o.ch])+" au bon endroit (compte bien les "+bt(o.ch)+" et les "+bt(OP[o.ch])+").");r2.eof=true;return r2;}
 return null;
}

function jsAnalyse(ast,code,opts){
 var issues=[],scopes=[],refs=[],members=[],ctxNames={},eqeq=[],loops=[],stmtRefs=[],assignedNames={},definedProps={},dupFn=[],callbackCalls=[];
 var extraGlobals=setOf((opts.globals||[]).join(" "));
 for(var k0=0;k0<(opts.ctxNames||[]).length;k0++)ctxNames[opts.ctxNames[k0]]=1;
 function Sc(type,parent,node){this.type=type;this.parent=parent;this.node=node;this.vars={};scopes.push(this);}
 var glob=new Sc("function",null,ast);
 function fnScope(s){while(s.type!=="function"&&s.parent)s=s.parent;return s;}
 function line(n){return n.loc?n.loc.start.line:1;}
 function col(n){return n.loc?n.loc.start.column:0;}
 function declare(s,name,info){
  var target=(info.kind==="var"||info.kind==="fn")?fnScope(s):s;
  if(has(target.vars,name)){var ex=target.vars[name];
   if(info.kind==="fn"&&ex.kind==="fn")dupFn.push({name:name,first:ex.node,second:info.node});
   ex.decls.push(info);return ex;}
  var v={name:name,kind:info.kind,decls:[info],reads:0,writes:0,selfRefs:0,scope:target,node:info.node,fnNode:info.fnNode,pos:info.node.start,hasInit:info.hasInit};
  target.vars[name]=v;return v;}
 function declPattern(pat,s,kind,extra){if(!pat)return;
  switch(pat.type){
   case "Identifier":declare(s,pat.name,{kind:kind,node:pat,hasInit:extra&&extra.hasInit});break;
   case "ObjectPattern":pat.properties.forEach(function(p){if(p.type==="RestElement")declPattern(p.argument,s,kind,extra);else{if(p.computed)visit(p.key,s,p);declPattern(p.value,s,kind,extra);}});break;
   case "ArrayPattern":pat.elements.forEach(function(e){if(e)declPattern(e,s,kind,extra);});break;
   case "AssignmentPattern":declPattern(pat.left,s,kind,extra);visit(pat.right,s,pat);break;
   case "RestElement":declPattern(pat.argument,s,kind,extra);break;}}
 function ref(id,s,mode){refs.push({name:id.name,node:id,scope:s,mode:mode,pos:id.start});if(mode==="write"||mode==="modify")assignedNames[id.name]=1;}
 function assignTarget(t,s){if(!t)return;
  switch(t.type){
   case "Identifier":ref(t,s,"write");break;
   case "MemberExpression":t.__assign=true;visit(t,s,null);break;
   case "ObjectPattern":t.properties.forEach(function(p){if(p.type==="RestElement")assignTarget(p.argument,s);else{if(p.computed)visit(p.key,s,p);assignTarget(p.value,s);}});break;
   case "ArrayPattern":t.elements.forEach(function(e){if(e)assignTarget(e,s);});break;
   case "AssignmentPattern":assignTarget(t.left,s);visit(t.right,s,t);break;
   case "RestElement":assignTarget(t.argument,s);break;
   default:visit(t,s,null);}}
 function isGetContext(n){return n&&n.type==="CallExpression"&&n.callee.type==="MemberExpression"&&!n.callee.computed&&n.callee.property.name==="getContext";}
 function body(list,s){var i,dead=false,rep=false;
  for(i=0;i<list.length;i++){var st=list[i];
   if(dead&&!rep&&st.type!=="FunctionDeclaration"&&st.type!=="EmptyStatement"){rep=true;issues.push(mk("adv",line(st),col(st),"Code jamais exécuté","Cette ligne est placée après un "+bt(dead)+" : le programme quitte avant de l'atteindre, donc elle ne s'exécutera jamais.","Déplace-la avant le "+bt(dead)+", ou supprime-la."));}
   visit(st,s,null);
   if(st.type==="ReturnStatement")dead="return";else if(st.type==="BreakStatement")dead="break";else if(st.type==="ContinueStatement")dead="continue";else if(st.type==="ThrowStatement")dead="throw";}}
 function fn(n,s){var fs=new Sc("function",s,n);
  if(n.type==="FunctionExpression"&&n.id)declare(fs,n.id.name,{kind:"fname",node:n.id});
  n.params.forEach(function(p){declPattern(p,fs,"param");});
  if(n.body.type==="BlockStatement")body(n.body.body,fs);else visit(n.body,fs,n);}
 function cls(n,s){if(n.superClass)visit(n.superClass,s,n);
  n.body.body.forEach(function(m){
   if(m.type==="StaticBlock"){body(m.body,new Sc("function",s,m));return;}
   if(m.computed)visit(m.key,s,m);else if(m.key&&m.key.name)definedProps[m.key.name]=1;
   if(m.value){if(m.type==="MethodDefinition")fn(m.value,s);else visit(m.value,s,m);}});}
 function condCheck(t){if(t&&t.type==="AssignmentExpression"&&t.operator==="=")issues.push(mk("adv",line(t),col(t),"Dans une condition, « = » range une valeur","Dans un "+bt("if")+" ou un "+bt("while")+", le signe "+bt("=")+" donne une valeur à une variable au lieu de comparer. Pour comparer, il faut "+bt("===")+" (ou "+bt("==")+").","Remplace "+bt("=")+" par "+bt("===")+" ligne "+line(t)+"."));}
 function visit(n,s,parent){
  if(!n||typeof n.type!=="string")return;
  switch(n.type){
   case "Program":body(n.body,s);return;
   case "FunctionDeclaration":if(n.id)declare(s,n.id.name,{kind:"fn",node:n.id,fnNode:n});fn(n,s);return;
   case "FunctionExpression":case "ArrowFunctionExpression":fn(n,s);return;
   case "VariableDeclaration":n.declarations.forEach(function(d){
     declPattern(d.id,s,n.kind,{hasInit:!!d.init});
     if(d.init){visit(d.init,s,d);if(d.id.type==="Identifier"&&isGetContext(d.init))ctxNames[d.id.name]=1;}});return;
   case "ClassDeclaration":if(n.id)declare(s,n.id.name,{kind:"class",node:n.id});cls(n,s);return;
   case "ClassExpression":cls(n,s);return;
   case "BlockStatement":body(n.body,new Sc("block",s,n));return;
   case "ForStatement":{var f1=new Sc("block",s,n);visit(n.init,f1,n);visit(n.test,f1,n);visit(n.update,f1,n);visit(n.body,f1,n);loops.push({n:n,scope:s});return;}
   case "ForInStatement":case "ForOfStatement":{var f2=new Sc("block",s,n);
     if(n.left.type==="VariableDeclaration")n.left.declarations.forEach(function(d){declPattern(d.id,f2,"loop");});else assignTarget(n.left,f2);
     visit(n.right,f2,n);visit(n.body,f2,n);return;}
   case "CatchClause":{var cs=new Sc("block",s,n);if(n.param)declPattern(n.param,cs,"catch");body(n.body.body,cs);return;}
   case "IfStatement":condCheck(n.test);visit(n.test,s,n);visit(n.consequent,s,n);visit(n.alternate,s,n);return;
   case "ConditionalExpression":condCheck(n.test);visit(n.test,s,n);visit(n.consequent,s,n);visit(n.alternate,s,n);return;
   case "WhileStatement":case "DoWhileStatement":condCheck(n.test);visit(n.test,s,n);visit(n.body,s,n);loops.push({n:n,scope:s});return;
   case "SwitchStatement":{visit(n.discriminant,s,n);var sw=new Sc("block",s,n);n.cases.forEach(function(c){visit(c.test,sw,c);body(c.consequent,sw);});return;}
   case "LabeledStatement":visit(n.body,s,n);return;
   case "BreakStatement":case "ContinueStatement":case "EmptyStatement":case "DebuggerStatement":return;
   case "ExpressionStatement":{
     var ex=n.expression;
     if(ex.type==="Identifier")stmtRefs.push({node:ex,scope:s,kind:"id"});
     else if(ex.type==="MemberExpression"&&!ex.computed)stmtRefs.push({node:ex,scope:s,kind:"member"});
     else if(ex.type==="Literal"&&!n.directive)issues.push(mk("adv",line(n),col(n),"Cette ligne ne fait rien","Une valeur seule sur une ligne ne produit aucun effet.","Supprime-la, ou range-la dans une variable / utilise-la dans une instruction."));
     visit(ex,s,n);return;}
   case "Identifier":ref(n,s,"read");return;
   case "MemberExpression":visit(n.object,s,n);if(n.computed)visit(n.property,s,n);else members.push({node:n,scope:s});return;
   case "AssignmentExpression":{
     var used=parent&&parent.type!=="ExpressionStatement"&&!(parent.type==="ForStatement"&&(parent.update===n||parent.init===n));
     if(n.left.type==="Identifier"){ref(n.left,s,n.operator==="="?"write":"modify");if(n.operator!=="="&&used)ref(n.left,s,"read");}
     else assignTarget(n.left,s);
     if(n.left.type==="MemberExpression"&&!n.left.computed&&n.left.property.name)definedProps[n.left.property.name]=1;
     visit(n.right,s,n);return;}
   case "UpdateExpression":{
     var used2=parent&&parent.type!=="ExpressionStatement"&&!(parent.type==="ForStatement"&&(parent.update===n||parent.init===n));
     if(n.argument.type==="Identifier"){ref(n.argument,s,"modify");if(used2)ref(n.argument,s,"read");}else{n.argument.__assign=true;visit(n.argument,s,n);}
     return;}
   case "UnaryExpression":if(n.operator==="typeof"&&n.argument.type==="Identifier"){ref(n.argument,s,"typeof");return;}visit(n.argument,s,n);return;
   case "BinaryExpression":if(n.operator==="=="||n.operator==="!=")eqeq.push(n);visit(n.left,s,n);visit(n.right,s,n);return;
   case "CallExpression":{
     if(n.callee.type==="MemberExpression")n.callee.__call=true;
     var cn=n.callee.type==="Identifier"?n.callee.name:(n.callee.type==="MemberExpression"&&!n.callee.computed?n.callee.property.name:"");
     if(opts.canvasId&&n.callee.type==="MemberExpression"&&!n.callee.computed&&n.callee.property.name==="getElementById"&&n.arguments[0]&&n.arguments[0].type==="Literal"&&typeof n.arguments[0].value==="string"){
       var idv=n.arguments[0].value;if(idv!==opts.canvasId&&lev(idv.toLowerCase(),opts.canvasId.toLowerCase())<=2)issues.push(mk("err",line(n),col(n),"Mauvais id de canvas : « "+idv+" »","Le canvas de cette page s'appelle "+bt(opts.canvasId)+" (avec exactement ces majuscules). Avec "+bt(idv)+", "+bt("getElementById")+" ne trouve rien (il renvoie "+bt("null")+") et ton programme plante.","Écris : "+bt("document.getElementById(\""+opts.canvasId+"\")")));}
     if(cn==="getContext"&&n.arguments[0]&&n.arguments[0].type==="Literal"&&typeof n.arguments[0].value==="string"&&n.arguments[0].value!=="2d"&&n.arguments[0].value.toLowerCase()==="2d")issues.push(mk("err",line(n),col(n),"Écris « 2d » en minuscules","getContext(\""+n.arguments[0].value+"\") ne marche pas : le mot doit être exactement "+bt("2d")+".","Écris : "+bt("getContext(\"2d\")")));
     var cbIdx=cn==="requestAnimationFrame"||cn==="setTimeout"||cn==="setInterval"?0:(cn==="addEventListener"?1:-1);
     if(cbIdx>=0&&n.arguments[cbIdx]&&n.arguments[cbIdx].type==="CallExpression"&&n.arguments[cbIdx].callee.type==="Identifier")callbackCalls.push({call:n,arg:n.arguments[cbIdx],fname:cn});
     visit(n.callee,s,n);n.arguments.forEach(function(a){visit(a,s,n);});return;}
   case "ObjectExpression":n.properties.forEach(function(p){if(p.type==="SpreadElement")visit(p.argument,s,p);else{if(p.computed)visit(p.key,s,p);else if(p.key&&(p.key.name||p.key.value))definedProps[p.key.name||p.key.value]=1;visit(p.value,s,p);}});return;
   default:{
     var key,val;for(key in n){if(key==="type"||key==="start"||key==="end"||key==="loc"||!has(n,key))continue;val=n[key];
      if(Array.isArray(val)){val.forEach(function(c){if(c&&typeof c.type==="string")visit(c,s,n);});}
      else if(val&&typeof val.type==="string")visit(val,s,n);}}
  }}
 visit(ast,glob,null);

 /* --- résolution des noms --- */
 function lookup(s,name){while(s){if(has(s.vars,name))return s.vars[name];s=s.parent;}return null;}
 function inFn(s,node){while(s){if(s.node===node)return true;s=s.parent;}return false;}
 var allNames=[],si,v,nm;
 for(si=0;si<scopes.length;si++)for(nm in scopes[si].vars)if(has(scopes[si].vars,nm))allNames.push(nm);
 var cands=uniq(allNames.concat(Object.keys(JS_GLOBALS),(opts.globals||[])));
 var undef={},undefOrder=[],implicit={},implicitOrder=[],tdzDone={},constDone={};
 refs.forEach(function(r){var v2=lookup(r.scope,r.name);
  if(v2){
   if(r.mode==="read"||r.mode==="typeof"){
    if(v2.kind==="fn"&&inFn(r.scope,v2.fnNode))v2.selfRefs++;else v2.reads++;
    if((v2.kind==="let"||v2.kind==="const"||v2.kind==="class")&&r.pos<v2.pos&&fnScope(r.scope)===fnScope(v2.scope)&&!tdzDone[r.name]){tdzDone[r.name]=1;
     issues.push(mk("err",line(r.node),col(r.node),"« "+r.name+" » utilisé avant sa déclaration","Ligne "+line(r.node)+", tu utilises "+bt(r.name)+" alors qu'elle n'est déclarée (avec "+bt(v2.kind)+") que ligne "+line(v2.node)+" (erreur « Cannot access before initialization »).","Déplace la ligne "+bt(v2.kind+" "+r.name+" = …")+" plus haut que la ligne "+line(r.node)+"."));}
   }else{v2.writes++;
    if(v2.kind==="const"&&!constDone[r.name]){constDone[r.name]=1;issues.push(mk("err",line(r.node),col(r.node),"« "+r.name+" » est une constante","Tu as déclaré "+bt(r.name)+" avec "+bt("const")+" ligne "+line(v2.node)+" : sa valeur ne peut plus changer (erreur « Assignment to constant variable »).","Déclare-la avec "+bt("let")+" à la place de "+bt("const")+" ligne "+line(v2.node)+"."));}}
  }else{
   if(has(JS_GLOBALS,r.name)||has(extraGlobals,r.name)||/^_{3,}$/.test(r.name))return;
   if(r.mode==="typeof")return;
   if(r.mode==="write"){if(!has(implicit,r.name)){implicit[r.name]=r;implicitOrder.push(r.name);}return;}
   if(!has(undef,r.name)){undef[r.name]=[];undefOrder.push(r.name);}undef[r.name].push(line(r.node));}});
 undefOrder.forEach(function(name){var lns=uniq(undef[name]),sug=suggere(name,cands),titre="Nom inconnu : « "+name+" »",texte="JavaScript ne connaît pas "+bt(name)+" (ligne"+(lns.length>1?"s ":" ")+lns.join(", ")+"). Il n'a pas été déclaré plus haut et ce n'est pas une commande connue.",aide;
  if(has(JS_PYHABIT,name)){titre="« "+name+" » est du Python, pas du JavaScript";texte="En JavaScript, on écrit "+bt(JS_PYHABIT[name])+".";aide="Remplace "+bt(name)+" par "+bt(JS_PYHABIT[name])+".";}
  else if(sug)aide="Tu voulais peut-être écrire "+bt(sug)+" ? (Les majuscules et minuscules comptent, et une lettre de travers suffit pour que ça ne marche plus.)";
  else if((name==="ctx"||name==="context")&&opts.canvasId)aide="Il faut d'abord créer le contexte de dessin : "+bt("const c = document.getElementById(\""+opts.canvasId+"\");")+" puis "+bt("const ctx = c.getContext(\"2d\");");
  else aide="Vérifie l'orthographe, ou déclare d'abord la variable ("+bt("let "+name+" = …;")+") avant de l'utiliser.";
  issues.push(mk("err",lns[0],0,titre,texte,aide));});
 implicitOrder.forEach(function(name){var r=implicit[name];
  issues.push(mk("adv",line(r.node),col(r.node),"Variable « "+name+" » non déclarée","Tu donnes une valeur à "+bt(name)+" ligne "+line(r.node)+" sans l'avoir déclarée : JavaScript la crée quand même, mais c'est source d'erreurs (faute de frappe, valeur écrasée…).","Ajoute "+bt("let")+" devant la première fois que tu l'utilises : "+bt("let "+name+" = …;")));});
 dupFn.forEach(function(d){issues.push(mk("adv",line(d.second),col(d.second),"Fonction « "+d.name+" » définie deux fois",bt(d.name)+" est définie ligne "+line(d.first)+" puis à nouveau ligne "+line(d.second)+" : la deuxième version remplace la première, qui ne sert alors plus à rien.","Donne un nom différent à l'une des deux, ou supprime celle que tu n'utilises pas."));});

 /* --- fautes de frappe dans les noms de méthodes --- */
 var typoDone={};
 members.forEach(function(m){var n=m.node,o=n.object,p=n.property.name,key,on;if(!p)return;
  if(o.type==="Identifier"){on=o.name;
   var isCtx=has(ctxNames,on)&&!lookupNonCtx(m.scope,on),list=null,label=null;
   if(isCtx){list=CTX_LIST;label=on;}else if(on==="Math"&&!lookup(m.scope,"Math")){list=MATH_LIST;label="Math";}
   else if(on==="document"&&!lookup(m.scope,"document")){list=DOC_LIST;label="document";}
   else if(on==="console"&&!lookup(m.scope,"console")){list=CONSOLE_LIST;label="console";}
   if(list){
    var inList=false,q;for(q=0;q<list.length;q++)if(list[q]===p){inList=true;break;}
    if(!inList&&!has(definedProps,p)){key=label+"."+p;if(typoDone[key])return;typoDone[key]=1;
     var sg=suggere(p,list);
     if(sg)issues.push(mk("err",line(n),col(n.property),bt(label+"."+p)+" n'existe pas","Il n'y a pas de "+bt(p)+" dans "+bt(label)+" (ligne "+line(n)+"). JavaScript distingue les majuscules : une seule lettre de travers et la commande est inconnue (erreur « is not a function »).","Tu voulais écrire "+bt(label+"."+sg)+" ?"));
     else if(label==="ctx"||label===on&&isCtx||label==="Math")issues.push(mk("adv",line(n),col(n.property),bt(label+"."+p)+" : commande inconnue",bt(p)+" ne fait pas partie des commandes de "+bt(label)+" que je connais.","Vérifie l'orthographe, ou consulte le mémo sous l'éditeur."));
     return;}
    if(inList&&isCtx&&n.__call&&has(CTX_PROPS,p)){key="call:"+p;if(typoDone[key])return;typoDone[key]=1;
     issues.push(mk("err",line(n),col(n.property),bt(label+"."+p)+" n'est pas une fonction",bt(p)+" est une propriété : on lui donne une valeur avec "+bt("=")+", on ne l'appelle pas avec des parenthèses (erreur « is not a function »).","Écris : "+bt(label+"."+p+" = \"red\";")+" (avec la valeur voulue)."));return;}
    if(inList&&isCtx&&n.__assign&&!has(CTX_PROPS,p)&&p!=="hasOwnProperty"){key="assign:"+p;if(typoDone[key])return;typoDone[key]=1;
     issues.push(mk("err",line(n),col(n.property),bt(label+"."+p)+" est une commande, pas une propriété",bt(p)+" est une commande : on l'utilise avec des parenthèses.","Écris : "+bt(label+"."+p+"(…);")));return;}
   }
  }
  /* fautes de frappe courantes (length, getContext…) sur n'importe quel objet */
  if(!has(definedProps,p)&&p.length>=5){var ci,cp;for(ci=0;ci<COMMON_PROPS.length;ci++){cp=COMMON_PROPS[ci];if(cp===p){cp=null;break;}}
   if(cp!==null){var sg2=null,cj;for(cj=0;cj<COMMON_PROPS.length;cj++)if(COMMON_PROPS[cj].length>=5&&(COMMON_PROPS[cj].toLowerCase()===p.toLowerCase()||lev(p,COMMON_PROPS[cj])<=1)){sg2=COMMON_PROPS[cj];break;}
    if(sg2){key="prop:"+p;if(!typoDone[key]){typoDone[key]=1;issues.push(mk("err",line(n),col(n.property),bt("."+p)+" n'existe pas","Il n'y a pas de "+bt(p)+" ici (ligne "+line(n)+"). Une lettre de travers ou une majuscule en trop suffit pour que ça ne marche pas.","Tu voulais peut-être écrire "+bt("."+sg2)+" ?"));}}}}
 });
 function lookupNonCtx(s,name){var v3=lookup(s,name);return !!(v3&&v3.kind==="param");}

 /* --- instructions sans effet --- */
 stmtRefs.forEach(function(sr){var n=sr.node,call=false,nm2="";
  if(sr.kind==="id"){var v4=lookup(sr.scope,n.name);nm2=n.name;call=(v4&&v4.kind==="fn")||(!v4&&has(JS_GLOBALS,n.name)&&/^[a-z]/.test(n.name)&&n.name!=="undefined"&&n.name!=="event"&&n.name!=="name"&&n.name!=="length"&&n.name!=="NaN"&&n.name!=="arguments");}
  else{nm2=(n.object.name||"…")+"."+n.property.name;call=has(CTX_SET,n.property.name)&&!has(CTX_PROPS,n.property.name);}
  if(sr.kind==="id"&&!lookup(sr.scope,n.name)&&!has(JS_GLOBALS,n.name)&&!has(extraGlobals,n.name))return;
  issues.push(mk("adv",line(n),col(n),call?"« "+nm2+" » ne fait rien sans parenthèses":"Cette ligne ne fait rien",call?"Écrire seulement le nom d'une commande ne l'exécute pas.":"Écrire seulement le nom d'une variable ne produit aucun effet.",call?"Pour l'exécuter, ajoute des parenthèses : "+bt(nm2+"()")+(" (avec ses valeurs à l'intérieur si besoin)."):"Si tu voulais l'afficher, écris "+bt("console.log("+nm2+");")+"."));});
 callbackCalls.forEach(function(cc){var a=cc.arg,fname=a.callee.name,v5=lookup(glob,fname)||null;if(!v5)return;
  issues.push(mk("adv",line(a),col(a),"« "+fname+"() » est exécutée tout de suite","Dans "+bt(cc.fname+"(…)")+", il faut donner le nom de la fonction (sans parenthèses) : avec "+bt(fname+"()")+", elle est appelée immédiatement et c'est son résultat qui est transmis.","Écris "+bt(cc.fname+"("+fname+")")+" (sans les parenthèses après "+bt(fname)+")."));});

 /* --- boucles --- */
 function hasExit(n,inLoop){if(!n||typeof n.type!=="string")return false;
  if(n.type==="ReturnStatement"||n.type==="ThrowStatement")return true;
  if(n.type==="BreakStatement")return !inLoop||!!n.label;
  if(n.type==="FunctionDeclaration"||n.type==="FunctionExpression"||n.type==="ArrowFunctionExpression")return false;
  var nl=inLoop||/^(While|DoWhile|For|ForIn|ForOf|Switch)/.test(n.type),key,val,r=false;
  for(key in n){if(key==="type"||key==="loc"||key==="start"||key==="end"||!has(n,key))continue;val=n[key];
   if(Array.isArray(val)){val.forEach(function(c){if(c&&hasExit(c,nl))r=true;});}else if(val&&typeof val.type==="string"&&hasExit(val,nl))r=true;}
  return r;}
 function simpleCond(t){if(!t)return true;switch(t.type){case "Identifier":case "Literal":return true;case "BinaryExpression":case "LogicalExpression":return simpleCond(t.left)&&simpleCond(t.right);case "UnaryExpression":return simpleCond(t.argument);default:return false;}}
 function condNames(t,o){if(!t)return;if(t.type==="Identifier")o[t.name]=1;else{if(t.left)condNames(t.left,o);if(t.right)condNames(t.right,o);if(t.argument)condNames(t.argument,o);}}
 loops.forEach(function(l){var n=l.n,t=n.test,inf=!t||(t.type==="Literal"&&(t.value===true||t.value===1));
  if(hasExit(n.body,false))return;
  if(inf){issues.push(mk("adv",line(n),col(n),"Boucle infinie","Cette boucle n'a pas de condition d'arrêt (ni "+bt("break")+" ni "+bt("return")+") : elle ne s'arrêtera jamais et le navigateur va se figer.","Utilise une vraie condition (par exemple "+bt("while (compteur < 10)")+"), ou ajoute un "+bt("break")+". Pour animer un dessin, utilise "+bt("requestAnimationFrame")+" plutôt qu'une boucle."));return;}
  if(n.type==="ForStatement")return;
  if(simpleCond(t)){var cn={},any=false,nk;condNames(t,cn);var names=Object.keys(cn);
   for(nk=0;nk<names.length;nk++)if(has(assignedNames,names[nk]))any=true;
   if(names.length&&!any)issues.push(mk("adv",line(n),col(n),"La condition de la boucle ne change jamais","Aucune des variables de la condition ("+names.map(bt).join(", ")+") n'est modifiée dans le programme : la boucle risque de ne jamais s'arrêter.","Modifie la variable dans la boucle (par exemple "+bt(names[0]+"++;")+")."));}});

 /* --- « == » plutôt que « === » (une seule remarque) --- */
 if(eqeq.length){var e0=eqeq[0];issues.push(mk("adv",line(e0),col(e0),"Préfère « === » à « == »","Tu écris "+bt(e0.operator)+" ligne "+line(e0)+(eqeq.length>1?" (et "+(eqeq.length-1)+" autre"+(eqeq.length>2?"s":"")+")":"")+". En JavaScript, "+bt("==")+" convertit les valeurs avant de comparer (par exemple "+bt("\"5\" == 5")+" est vrai), ce qui surprend souvent.","Prends l'habitude d'écrire "+bt(e0.operator==="=="?"===":"!==")+" : il compare sans convertir."));}

 /* --- variables et fonctions jamais utilisées --- */
 scopes.forEach(function(S){for(var nm3 in S.vars){if(!has(S.vars,nm3))continue;var vv=S.vars[nm3];
  if(nm3.charAt(0)==="_"||has(extraGlobals,nm3))continue;
  if((vv.kind==="var"||vv.kind==="let"||vv.kind==="const")&&vv.reads===0){
   issues.push(mk("adv",line(vv.node),col(vv.node),"Variable « "+nm3+" » jamais utilisée","Tu déclares "+bt(nm3)+" ligne "+line(vv.node)+(vv.writes>0?", tu changes sa valeur,":"")+" mais tu ne t'en sers nulle part ensuite.","Supprime-la si elle est inutile, ou utilise-la là où tu en as besoin. Si tu pensais l'utiliser, vérifie que tu l'as écrite pareil partout (une faute de frappe suffit)."));}
  else if(vv.kind==="fn"&&vv.reads===0){
   issues.push(mk("adv",line(vv.node),col(vv.node),"Fonction « "+nm3+" » jamais appelée","Tu définis la fonction "+bt(nm3)+" ligne "+line(vv.node)+", mais personne ne l'appelle : elle ne s'exécutera jamais.","Appelle-la quelque part avec "+bt(nm3+"()")+(vv.fnNode&&vv.fnNode.params.length?" (avec ses valeurs entre parenthèses)":"")+", ou donne-la à "+bt("requestAnimationFrame")+" / "+bt("addEventListener")+" si c'est une animation ou un événement. Supprime-la si elle ne sert plus."));}}});
 /* --- trous --- */
 var holes=[],srcLines=lignesDe(code),hl;for(hl=0;hl<srcLines.length;hl++)if(/(^|[^_])_{3}([^_]|$)/.test(srcLines[hl]))holes.push(hl+1);
 if(holes.length)issues.push(mk("adv",holes[0],0,"Il reste des trous « ___ » à remplir","Les "+bt("___")+" (ligne"+(holes.length>1?"s ":" ")+holes.join(", ")+") sont des trous : remplace-les par la bonne valeur avant de tester.","Lis la consigne et l'exemple au-dessus, puis écris la valeur à la place de chaque "+bt("___")+"."));
 return {issues:issues,names:cands};
}

function analyseJS(code,opts){
 opts=opts||{};var src=String(code).replace(/\r\n?/g,"\n");
 if(!src.replace(/\s+/g,""))return {issues:[],names:[]};
 var A=root.acorn,ast=null,br;
 if(!A){br=jsBrackets(src);return {issues:br?[br]:[],names:[],syntax:!!br,sansAcorn:true};}
 try{ast=A.parse(src,{ecmaVersion:2022,locations:true,allowHashBang:true,sourceType:"script"});}
 catch(e){if(!e||(!e.loc&&!(e instanceof SyntaxError)))throw e;
  br=jsBrackets(src);var iss=jsSyntaxIssue(src,e,br);
  return {issues:[iss],names:[],syntax:true};}
 var r=jsAnalyse(ast,src,opts);
 r.issues.sort(function(a,b){return (a.niveau===b.niveau?0:(a.niveau==="err"?-1:1))||a.ligne-b.ligne;});
 return r;
}
D.analyseJS=analyseJS;

/* =====================================================================
   TRADUCTION DES ERREURS D'EXÉCUTION (Python / JavaScript)
   ===================================================================== */
function pySyntaxeFr(msg,ligne){
 var m;
 if(/bad input/.test(msg))return {titre:"Erreur d'écriture (syntaxe)",texte:"Python ne comprend pas cette ligne (ou la précédente).",aide:"Vérifie : deux-points "+bt(":")+" en fin de ligne, parenthèses et guillemets fermés, décalages de 4 espaces, et la ligne juste au-dessus."};
 if(/expected ':'/.test(msg))return {titre:"Il manque « : » à la fin de la ligne",texte:"Une ligne qui ouvre un bloc ("+bt("if")+", "+bt("for")+", "+bt("while")+", "+bt("def")+"…) doit se terminer par "+bt(":")+".",aide:"Ajoute "+bt(":")+" à la fin de la ligne "+ligne+"."};
 if(/expected an indented block/.test(msg))return {titre:"Il manque le bloc décalé",texte:"Après une ligne qui se termine par "+bt(":")+", la ligne suivante doit être décalée vers la droite (4 espaces).",aide:"Ajoute 4 espaces au début de la ligne "+ligne+"."};
 if(/unexpected indent/.test(msg))return {titre:"Ligne décalée sans raison",texte:"Cette ligne commence plus à droite que la précédente, sans qu'une ligne se termine par "+bt(":")+".",aide:"Aligne-la avec la ligne du dessus."};
 if(/unindent does not match/.test(msg))return {titre:"Décalage incohérent",texte:"Cette ligne revient à gauche, mais pas au même niveau qu'une ligne du dessus.",aide:"Aligne-la exactement sous une ligne précédente du même bloc."};
 if((m=/'(.)' was never closed/.exec(msg)))return {titre:bt(m[1])+" jamais fermée",texte:"Tu as ouvert un "+bt(m[1])+" qui n'est jamais refermé.",aide:"Ajoute le caractère fermant."};
 if(/unterminated string literal|unterminated triple/.test(msg))return {titre:"Guillemet non fermé",texte:"Un texte commence mais ne se termine pas.",aide:"Ajoute le guillemet manquant à la fin du texte."};
 if((m=/unmatched '(.)'/.exec(msg)))return {titre:bt(m[1])+" en trop",texte:"Ce "+bt(m[1])+" ne ferme rien.",aide:"Supprime-le ou ajoute l'ouvrant qui manque."};
 if(/closing parenthesis/.test(msg))return {titre:"Parenthèses mal assorties",texte:"Tu fermes avec un autre caractère que celui ouvert.",aide:"Ferme avec le bon caractère."};
 if(/Maybe you meant '=='/.test(msg))return {titre:"Il faut « == » pour comparer",texte:bt("=")+" range une valeur ; pour comparer, écris "+bt("==")+".",aide:"Remplace "+bt("=")+" par "+bt("==")+"."};
 if(/Missing parentheses in call to 'print'/.test(msg))return {titre:"print s'écrit avec des parenthèses",texte:"En Python 3, "+bt("print")+" est une fonction.",aide:"Écris "+bt("print(…)")+"."};
 if(/forgot a comma/.test(msg))return {titre:"Il manque une virgule (ou un opérateur)",texte:"Deux valeurs se suivent sans rien entre elles.",aide:"Ajoute une virgule "+bt(",")+", un opérateur, ou vérifie les guillemets."};
 if(/invalid decimal literal/.test(msg))return {titre:"Nombre collé à des lettres",texte:"Un nombre ne peut pas être collé à des lettres.",aide:"Sépare-les ou supprime les lettres."};
 if(/cannot assign to/.test(msg))return {titre:"On ne peut pas donner une valeur à cela",texte:"À gauche du "+bt("=")+" il faut un nom de variable.",aide:"Pour comparer, utilise "+bt("==")+"."};
 return {titre:"Erreur d'écriture (syntaxe)",texte:"Python ne comprend pas cette ligne : "+msg,aide:"Relis la ligne "+ligne+" et celle d'avant : parenthèses, guillemets, deux-points, virgules."};
}
function pyExplique(type,msg,names){var m,sg;
 msg=String(msg||"").replace(/\s+on line \d+\s*$/,"").replace(/^\s+|\s+$/g,"");
 if(type==="SyntaxError"||type==="IndentationError"||type==="TabError"||type==="ParseError"){
  if(/bad input/.test(msg))return {titre:"Erreur d'écriture (syntaxe)",texte:"Python ne comprend pas cette ligne (ou la précédente).",aide:"Vérifie : deux-points "+bt(":")+" en fin de ligne, parenthèses et guillemets fermés, décalages de 4 espaces."};
  return pySyntaxeFr(msg,"");}
 if(type==="NameError"||/is not defined/.test(msg)){m=/name '(.+)' is not defined/.exec(msg);
  if(m){sg=names?suggere(m[1],names):null;
   return {titre:"Nom inconnu : « "+m[1]+" »",texte:"Python ne connaît pas "+bt(m[1])+" à cet endroit.",aide:sg?"Tu voulais peut-être écrire "+bt(sg)+" ? (majuscules et lettres comptent)":"Vérifie l'orthographe, crée la variable avant de l'utiliser, ou ajoute l'import manquant."};}}
 if(type==="UnboundLocalError"||/referenced before assignment/.test(msg)){m=/'(.+)'/.exec(msg);var nm=m?m[1]:"la variable";
  return {titre:"Variable locale utilisée avant d'avoir une valeur",texte:"Dans une fonction, dès qu'on donne une valeur à "+bt(nm)+", Python la croit locale à la fonction.",aide:"Ajoute "+bt("global "+nm)+" au début de la fonction pour modifier la variable du programme principal."};}
 if((m=/unsupported operand type\(s\) for ([^:]+): '(\w+)' and '(\w+)'/.exec(msg))||(m=/can only concatenate str \(not "(\w+)"\) to str/.exec(msg))){
  if(m.length===4)return {titre:"Opération impossible entre « "+m[2]+" » et « "+m[3]+" »",texte:"Tu essaies de faire "+bt(m[1])+" entre un "+m[2]+" et un "+m[3]+".",aide:"Convertis avant : "+bt("int(...)")+" pour passer du texte à un nombre, "+bt("str(...)")+" pour passer d'un nombre à du texte."};
  return {titre:"On ne peut pas coller un nombre à du texte avec +",texte:"Tu additionnes du texte et un "+m[1]+".",aide:"Écris "+bt("str(nombre)")+", ou utilise une f-string : "+bt("f\"score : {score}\"")+"."};}
 if((m=/'(\w+)' object is not callable/.exec(msg)))return {titre:"Ce n'est pas une fonction",texte:"Tu mets des parenthèses après quelque chose qui est un "+m[1]+", pas une fonction (peut-être une variable qui porte le même nom qu'une fonction).",aide:"Renomme la variable, ou retire les parenthèses."};
 if((m=/(\w+)\(\) takes (\d+) positional arguments? but (\d+) (?:was|were) given/.exec(msg)))return {titre:"Mauvais nombre de valeurs pour « "+m[1]+" »",texte:"La fonction "+bt(m[1])+" attend "+m[2]+" valeur(s) mais tu en donnes "+m[3]+".",aide:"Compare l'appel avec la ligne "+bt("def "+m[1]+"(…)")+"."};
 if((m=/(\w+)\(\) missing (\d+) required positional arguments?/.exec(msg)))return {titre:"Il manque des valeurs pour « "+m[1]+" »",texte:"Tu n'as pas donné assez de valeurs à "+bt(m[1])+" ("+m[2]+" manquante(s)).",aide:"Compare l'appel avec la ligne "+bt("def "+m[1]+"(…)")+"."};
 if(type==="ZeroDivisionError"||/division by zero/.test(msg))return {titre:"Division par zéro",texte:"Tu divises par 0, ce qui est impossible.",aide:"Vérifie la valeur du diviseur (ou teste-la avec un if avant de diviser)."};
 if(type==="IndexError"||/index out of range/.test(msg))return {titre:"Case de liste inexistante",texte:"Tu demandes un élément qui n'existe pas dans la liste (les cases commencent à 0 : une liste de 3 éléments a les cases 0, 1 et 2).",aide:"Vérifie l'indice utilisé et la longueur de la liste avec "+bt("len(liste)")+"."};
 if(type==="KeyError")return {titre:"Clé introuvable",texte:"Cette clé n'existe pas dans le dictionnaire : "+msg+".",aide:"Vérifie l'orthographe de la clé."};
 if((m=/invalid literal for int\(\) with base 10: (.*)/.exec(msg)))return {titre:"Impossible de convertir en nombre entier",texte:"Tu essaies de transformer "+m[1]+" en nombre, mais ce n'est pas un nombre entier.",aide:"Vérifie ce que l'utilisateur a tapé (espaces, virgule au lieu du point, lettres)."};
 if((m=/'(\w+)' object has no attribute '(\w+)'/.exec(msg)))return {titre:"« "+m[2]+" » n'existe pas sur un objet de type « "+m[1]+" »",texte:"Un objet de type "+m[1]+" n'a pas de "+bt(m[2])+".",aide:"Vérifie l'orthographe (majuscules comprises) de "+bt("."+m[2])+"."};
 if((m=/No module named '?([\w.]+)'?/.exec(msg)))return {titre:"Module introuvable : « "+m[1]+" »",texte:"Python ne trouve pas le module "+bt(m[1])+".",aide:"Vérifie l'orthographe de l'"+bt("import")+"."};
 if(type==="RecursionError"||/recursion/.test(msg))return {titre:"Fonction qui s'appelle sans fin",texte:"Une fonction s'appelle elle-même sans jamais s'arrêter.",aide:"Ajoute une condition d'arrêt, ou vérifie que la fonction ne s'appelle pas par erreur."};
 if(type==="TypeError")return {titre:"Mauvais type de valeur",texte:msg,aide:"Vérifie le type des valeurs (nombre, texte, liste) utilisées sur cette ligne."};
 if(type==="ValueError")return {titre:"Valeur incorrecte",texte:msg,aide:"Vérifie la valeur utilisée sur cette ligne."};
 return {titre:(type||"Erreur")+" : "+msg,texte:"Le programme s'est arrêté à cause de cette erreur.",aide:"Regarde la ligne indiquée et ce que tu y demandes à Python."};
}
function jsExplique(msg,names){var m,sg;
 msg=String(msg||"").replace(/^Uncaught\s+/,"").replace(/^(\w*Error):\s*/,function(a,b){return "";}).replace(/^\s+|\s+$/g,"");
 if((m=/^(\S+) is not defined$/.exec(msg))){sg=names?suggere(m[1],names):null;return {titre:"Nom inconnu : « "+m[1]+" »",texte:"JavaScript ne connaît pas "+bt(m[1])+" à cet endroit.",aide:sg?"Tu voulais peut-être écrire "+bt(sg)+" ? (majuscules et lettres comptent)":"Vérifie l'orthographe ou déclare d'abord la variable avec "+bt("let")+"."};}
 if((m=/Cannot read propert(?:y|ies) of (null|undefined) \(reading '(.+)'\)/.exec(msg))||(m=/can't access property "(.+)", (.+) is (null|undefined)/.exec(msg))){
  var prop=m.length===3?m[2]:m[1],isNull=(m[1]==="null"||m[3]==="null");
  if(prop==="getContext")return {titre:"Le canvas est introuvable",texte:bt("document.getElementById(…)")+" n'a rien trouvé (il renvoie "+bt("null")+") : l'id donné ne correspond à aucun canvas.",aide:"Vérifie l'orthographe exacte de l'id du canvas (majuscules comprises) dans le code et dans la page."};
  return {titre:"On utilise quelque chose qui est vide ("+(isNull?"null":"undefined")+")",texte:"Tu demandes "+bt(prop)+" à quelque chose qui n'existe pas ou n'a pas encore de valeur.",aide:"Vérifie le nom de l'objet juste avant "+bt("."+prop)+" : faute de frappe, ou objet pas encore créé ?"};}
 if((m=/Cannot set propert(?:y|ies) of (null|undefined) \(setting '(.+)'\)/.exec(msg)))return {titre:"On modifie quelque chose qui est vide",texte:"Tu veux changer "+bt(m[2])+" sur un objet qui est "+bt(m[1])+".",aide:"Vérifie le nom de l'objet avant le point."};
 if((m=/^(.+) is not a function$/.exec(msg))){var fnn=m[1],sg2=null,pp=fnn.split(".").pop();if(names)sg2=suggere(pp,CTX_LIST.concat(MATH_LIST,names));
  return {titre:bt(fnn)+" n'est pas une fonction",texte:"Tu essaies d'utiliser "+bt(fnn)+" comme une commande, mais ça n'en est pas une (ou elle est mal orthographiée).",aide:sg2?"Tu voulais peut-être écrire "+bt(sg2)+" ? (les majuscules comptent : "+bt("fillRect")+", pas "+bt("fillrect")+")":"Vérifie l'orthographe et les majuscules."};}
 if(/Assignment to constant variable|invalid assignment to const/.test(msg))return {titre:"On ne peut pas modifier une constante",texte:"Cette variable a été déclarée avec "+bt("const")+" : sa valeur est figée.",aide:"Déclare-la avec "+bt("let")+" à la place."};
 if(/Maximum call stack|too much recursion/.test(msg))return {titre:"Fonction qui s'appelle sans fin",texte:"Une fonction s'appelle elle-même sans jamais s'arrêter.",aide:"Ajoute une condition d'arrêt, ou vérifie que la fonction ne s'appelle pas par erreur."};
 if(/Unexpected end of input|expected expression, got end of script/.test(msg))return {titre:"Le programme se termine trop tôt",texte:"Il manque une fermeture ("+bt("}")+", "+bt(")")+" ou "+bt("]")+") quelque part.",aide:"Compte les ouvertures et les fermetures."};
 if((m=/Unexpected token '?(.+?)'?$/.exec(msg))||/missing \) after argument list/.test(msg)||/Unexpected identifier/.test(msg)||/Invalid or unexpected token/.test(msg)||/SyntaxError/.test(msg)||/expected/.test(msg))return {titre:"Erreur d'écriture (syntaxe)",texte:"Le navigateur ne comprend pas cette ligne ("+msg+").",aide:"Vérifie les parenthèses, accolades, guillemets et virgules autour de cette ligne et de la précédente."};
 if((m=/Cannot access '(.+)' before initialization/.exec(msg)))return {titre:"« "+m[1]+" » utilisé avant sa déclaration",texte:"Tu utilises "+bt(m[1])+" avant la ligne où tu la déclares (let/const).",aide:"Déplace la déclaration plus haut."};
 if((m=/^(.+) is not iterable$/.exec(msg)))return {titre:"On ne peut pas parcourir cela",texte:bt(m[1])+" n'est pas une liste (ou un texte) : on ne peut pas le parcourir avec "+bt("for…of")+".",aide:"Vérifie que c'est bien un tableau [ … ]."};
 return {titre:msg,texte:"Le programme s'est arrêté à cause de cette erreur.",aide:"Regarde la ligne indiquée et ce que tu y demandes."};
}
/* point d'entrée : info = {message, type?, line?} */
function explique(lang,info,names){
 var msg=String(info.message||""),type=info.type||"",m;
 if(lang==="python"){
  if(!type&&(m=/^\s*(?:Traceback[\s\S]*\n)?\s*([A-Za-z_.]*(?:Error|Exception|Exit))\s*:\s*([\s\S]*)$/.exec(msg.replace(/\s+$/,""))))type=m[1],msg=m[2];
  else if(!type&&(m=/^\s*([A-Za-z_.]*(?:Error|Exception))\s*:\s*(.*)$/.exec(msg))){type=m[1];msg=m[2];}
  return pyExplique(type.replace(/^.*\./,""),msg,names);}
 return jsExplique(msg,names);
}
D.explique=explique;

/* =====================================================================
   INTERFACE : panneau « Aide au débogage » + surlignage des lignes
   ===================================================================== */
var CSS=".dbg{margin:10px 0;border:1px solid rgba(127,127,127,.4);border-radius:10px;background:rgba(127,127,127,.09);font:14px/1.45 system-ui,'Segoe UI',sans-serif;color:inherit;text-align:left}"
+".dbg *{box-sizing:border-box}.dbg-h{display:flex;gap:10px;align-items:center;flex-wrap:wrap;padding:8px 12px;border-bottom:1px solid rgba(127,127,127,.3)}"
+".dbg-t{font-weight:700}.dbg-s{flex:1;opacity:.85;font-size:.92em}.dbg-s.ok{color:var(--ok,#1f9d55);opacity:1;font-weight:600}.dbg-s.bad{color:var(--ko,var(--no,#e5484d));opacity:1;font-weight:600}"
+".dbg-tg{cursor:pointer;border:1px solid rgba(127,127,127,.5);background:transparent;color:inherit;border-radius:14px;padding:2px 10px;font:inherit;font-size:.85em}"
+".dbg-b{max-height:300px;overflow:auto;padding:6px 8px}.dbg-i{display:block;padding:7px 10px;margin:5px 0;border-radius:8px;border-left:4px solid;cursor:pointer;background:rgba(127,127,127,.10)}"
+".dbg-i:hover{background:rgba(127,127,127,.2)}.dbg-i.dbg-e{border-color:var(--ko,var(--no,#e5484d))}.dbg-i.dbg-w{border-color:var(--warn,#d9a400)}.dbg-i.dbg-r{border-color:var(--ko,var(--no,#e5484d));background:rgba(229,72,77,.16)}"
+".dbg-l{font-weight:700}.dbg-x{margin-top:2px}.dbg-a{margin-top:3px;opacity:.95}.dbg-i code{background:rgba(127,127,127,.28);color:inherit;padding:0 5px;border-radius:4px;font-family:Consolas,monospace;font-size:.95em}"
+".dbg-more{display:block;width:100%;text-align:center;cursor:pointer;border:1px dashed rgba(127,127,127,.5);background:transparent;color:inherit;border-radius:8px;padding:4px;font:inherit;margin:5px 0}.dbg-n{padding:8px 10px;opacity:.9}"
+".dbg-ov{position:absolute;pointer-events:none;overflow:hidden;z-index:3}.dbg-hl{position:absolute;left:0;right:0;border-left:3px solid}.dbg-hl.dbg-e{background:rgba(229,72,77,.20);border-color:#e5484d}.dbg-hl.dbg-w{background:rgba(217,164,0,.14);border-color:#d9a400}.dbg-hl.dbg-r{background:rgba(229,72,77,.34);border-color:#ff2d3d}"
+".dbg-gv{position:absolute;pointer-events:none;overflow:hidden;z-index:3}.dbg-gv .dbg-hl{border-left-width:4px}";
function injectCss(){if(typeof document==="undefined"||document.getElementById("dbg-css"))return;var s=document.createElement("style");s.id="dbg-css";s.textContent=CSS;(document.head||document.documentElement).appendChild(s);}
function rich(t){return esc(t).replace(/`([^`]+)`/g,"<code>$1</code>");}
function prefAdvice(v){try{if(v===undefined){var x=localStorage.getItem("debogueur_conseils");return x!=="non";}localStorage.setItem("debogueur_conseils",v?"oui":"non");}catch(e){}return v===undefined?true:v;}

function attach(o){
 /* mode « évaluation » : ajoute ?aide=0 à l'adresse de la page pour masquer toute l'aide au débogage */
 if(typeof location!=="undefined"&&/[?&]aide=(0|non)\b/.test(location.search))return {analyser:function(){},clear:function(){},runtimeError:function(){},names:function(){return [];},panel:null};
 injectCss();
 var ta=o.textarea,lang=o.lang,aopts=o.analyseOpts||{},anchor=o.anchor||ta,gut=o.gutter||null;
 var panel=document.createElement("div");panel.className="dbg";panel.setAttribute("role","region");panel.setAttribute("aria-label","Aide au débogage");
 panel.innerHTML='<div class="dbg-h"><span class="dbg-t">🩺 Aide au débogage</span><span class="dbg-s"></span><button type="button" class="dbg-tg"></button></div><div class="dbg-b"></div>';
 anchor.parentNode.insertBefore(panel,anchor.nextSibling);
 var sum=panel.querySelector(".dbg-s"),body=panel.querySelector(".dbg-b"),tg=panel.querySelector(".dbg-tg");
 var par=ta.parentNode;if(getComputedStyle(par).position==="static")par.style.position="relative";
 var ov=document.createElement("div");ov.className="dbg-ov";par.appendChild(ov);
 var gv=null;if(gut){var gp=gut.parentNode;if(getComputedStyle(gp).position==="static")gp.style.position="relative";gv=document.createElement("div");gv.className="dbg-gv";gp.appendChild(gv);}
 var mir=document.createElement("div");mir.style.cssText="position:absolute;visibility:hidden;left:-99999px;top:0;overflow:hidden;pointer-events:none";document.body.appendChild(mir);
 var issues=[],names=[],rt=null,rtLine=0,showAdv=prefAdvice(),expanded=false,analysed=null,lastSeen=ta.value,changedAt=0,tops=[];
 function lineCount(){return ta.value.split("\n").length;}
 function measure(){if(!ta.clientWidth){tops=[];return;}var cs=getComputedStyle(ta),k,props=["fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft","wordBreak","overflowWrap"];
  for(k=0;k<props.length;k++)mir.style[props[k]]=cs[props[k]];
  mir.style.boxSizing="border-box";mir.style.whiteSpace=cs.whiteSpace==="pre"||cs.whiteSpace==="nowrap"?"pre":"pre-wrap";
  mir.style.width=(ta.clientWidth+parseFloat(cs.borderLeftWidth||0)+parseFloat(cs.borderRightWidth||0))+"px";mir.style.border="0";mir.style.width=ta.clientWidth+"px";
  var ls=ta.value.split("\n"),h="",i;for(i=0;i<ls.length;i++)h+="<div>"+(ls[i]===""?"\u200b":esc(ls[i]))+"</div>";
  mir.innerHTML=h;tops=[];for(i=0;i<mir.childNodes.length;i++)tops.push({t:mir.childNodes[i].offsetTop,h:mir.childNodes[i].offsetHeight});}
 function bars(){var cls={},i,h="";
  for(i=0;i<issues.length;i++){var it=issues[i];if(it.niveau==="adv"&&!showAdv)continue;var c=cls[it.ligne];if(c!=="dbg-e"&&c!=="dbg-r")cls[it.ligne]=it.niveau==="err"?"dbg-e":"dbg-w";}
  if(rt&&rt.ligne)cls[rt.ligne]="dbg-r";if(rtLine)cls[rtLine]="dbg-r";
  var keys=Object.keys(cls),st=ta.scrollTop;
  for(i=0;i<keys.length;i++){var ln=+keys[i],p=tops[ln-1];if(!p)continue;h+='<div class="dbg-hl '+cls[ln]+'" style="top:'+(p.t-st)+'px;height:'+p.h+'px"></div>';}
  return h;}
 function layout(){
  ov.style.left=(ta.offsetLeft+ta.clientLeft)+"px";ov.style.top=(ta.offsetTop+ta.clientTop)+"px";ov.style.width=ta.clientWidth+"px";ov.style.height=ta.clientHeight+"px";
  var h=bars();ov.innerHTML=h;
  if(gv){gv.style.left=(gut.offsetLeft+gut.clientLeft)+"px";gv.style.top=(gut.offsetTop+gut.clientTop)+"px";gv.style.width=gut.clientWidth+"px";gv.style.height=gut.clientHeight+"px";gv.innerHTML=h;}}
 function scrollSync(){layout();}
 function jump(ln){var ls=ta.value.split("\n"),s=0,i;for(i=0;i<ln-1&&i<ls.length;i++)s+=ls[i].length+1;
  var e=s+(ls[ln-1]||"").length;try{ta.focus({preventScroll:true});ta.setSelectionRange(s,e);}catch(x){}
  if(tops[ln-1])ta.scrollTop=Math.max(0,tops[ln-1].t-ta.clientHeight/3);layout();}
 function item(it,cls,label){return '<div class="dbg-i dbg-'+cls+'" data-l="'+it.ligne+'"><div class="dbg-l">'+label+(it.ligne?' — ligne '+it.ligne:'')+" : "+rich(it.titre)+'</div>'+(it.texte?'<div class="dbg-x">'+rich(it.texte)+'</div>':'')+(it.aide?'<div class="dbg-a">💡 '+rich(it.aide)+'</div>':'')+'</div>';}
 function render(){
  var errs=[],advs=[],i,h="";
  for(i=0;i<issues.length;i++)(issues[i].niveau==="err"?errs:advs).push(issues[i]);
  var nA=showAdv?advs.length:0;
  tg.textContent="Conseils : "+(showAdv?"oui":"non");tg.title=showAdv?"Masquer les conseils (variables inutilisées, etc.)":"Afficher les conseils (variables inutilisées, etc.)";
  if(rt)h+=item(rt,"r","💥 Erreur à l'exécution");
  for(i=0;i<errs.length;i++)h+=item(errs[i],errs[i].confirmee?"r":"e",errs[i].confirmee?"💥 Erreur (confirmée à l'exécution)":"🔴 Erreur");
  var lim=expanded?999:6,shown=0;
  if(showAdv)for(i=0;i<advs.length;i++){if(shown>=lim)break;h+=item(advs[i],"w","🟡 Conseil");shown++;}
  if(showAdv&&advs.length>shown)h+='<button type="button" class="dbg-more">… voir les '+(advs.length-shown)+' autres conseils</button>';
  var total=errs.length+(rt?1:0);
  if(!ta.value.replace(/\s+/g,""))sum.className="dbg-s",sum.textContent="Écris du code : je le vérifie pendant que tu tapes.";
  else if(!total&&!nA){sum.className="dbg-s ok";sum.textContent="✅ Rien à signaler";}
  else{sum.className="dbg-s"+(total?" bad":"");sum.textContent=(total?total+" erreur"+(total>1?"s":""):"Aucune erreur")+(nA?" · "+nA+" conseil"+(nA>1?"s":""):"");}
  if(!h)h='<div class="dbg-n">'+(ta.value.replace(/\s+/g,"")?"Ton code ne présente ni erreur d'écriture ni oubli que je sache repérer. Teste-le !":"Rien à vérifier pour l'instant.")+'</div>';
  body.innerHTML=h;layout();}
 function analyser(){var code=ta.value;analysed=code;rt=null;rtLine=0;
  var r=lang==="python"?analysePython(code,aopts):analyseJS(code,aopts);names=r.names||names;issues=r.issues;measure();render();
  if(o.extraCheck&&!r.syntax&&code.replace(/\s+/g,"")){o.extraCheck(code,function(extra){if(ta.value!==code||!extra||!extra.length)return;issues=extra.concat(issues);render();});}}
 body.addEventListener("click",function(ev){var t=ev.target;
  if(t.className==="dbg-more"){expanded=true;render();return;}
  while(t&&t!==body&&!(t.getAttribute&&t.getAttribute("data-l")))t=t.parentNode;
  if(t&&t!==body){var l=+t.getAttribute("data-l");if(l)jump(l);}});
 tg.addEventListener("click",function(){showAdv=!showAdv;prefAdvice(showAdv);render();});
 ta.addEventListener("input",function(){changedAt=Date.now();lastSeen=ta.value;});
 ta.addEventListener("scroll",scrollSync);
 window.addEventListener("resize",function(){measure();layout();});
 if(typeof ResizeObserver!=="undefined")try{new ResizeObserver(function(){measure();layout();}).observe(ta);}catch(e){}
 var lastW=ta.clientWidth;
 setInterval(function(){var v=ta.value,w=ta.clientWidth;
  if(w!==lastW){lastW=w;measure();layout();}
  if(v!==lastSeen){lastSeen=v;changedAt=Date.now();}
  if(v!==analysed&&Date.now()-changedAt>=350)analyser();},300);
 analyser();
 return {
  analyser:analyser,
  clear:function(){rt=null;rtLine=0;for(var i=0;i<issues.length;i++)issues[i].confirmee=false;render();},
  runtimeError:function(info){
   var ligne=info.line?+info.line:0,ex=explique(lang,info,names);
   var syn=/Syntax|Indentation|Tab|Parse/.test(info.type||"")||/^\s*(Syntax|Indentation|Parse)Error/.test(info.message||"");
   var dup=false,i;for(i=0;i<issues.length;i++)if(issues[i].niveau==="err"&&ligne&&issues[i].ligne===ligne){issues[i].confirmee=true;dup=true;}
   if(dup){rt=null;rtLine=ligne;render();return;}
   rtLine=0;rt={niveau:"rt",ligne:ligne,titre:ex.titre,texte:ex.texte,aide:ex.aide};
   if(!rt.aide&&ligne)rt.aide="Regarde la ligne "+ligne+".";
   render();if(panel.scrollIntoView)try{panel.scrollIntoView({block:"nearest",behavior:"smooth"});}catch(e){}},
  names:function(){return names;},
  panel:panel
 };
}
D.attach=attach;
D.issueMoteurPython=function(ligne,col,msg){var t=pySyntaxeFr(String(msg||''),ligne);return mk('err',ligne,col||0,t.titre,t.texte,t.aide);};
root.Debogueur=D;})(typeof window!=="undefined"?window:globalThis);

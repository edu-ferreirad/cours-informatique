function Arbre(cfg) {
  var uid = 0, sel = null, F = {};
  (cfg.films || []).forEach(function (f) { F[f.id] = f; });
  var box = document.getElementById(cfg.box);
  var pool = cfg.pool ? document.getElementById(cfg.pool) : null;

  function mk(n) { return { id: ++uid, n: n, c: [], f: [] }; }
  var root = mk(cfg.rootName);

  function build(s) {
    var n = mk(s.n);
    (s.c || []).forEach(function (x) { n.c.push(build(x)); });
    n.f = (s.f || []).slice();
    return n;
  }
  function placed(nd, out) {
    nd.f.forEach(function (f) { out[f] = true; });
    nd.c.forEach(function (c) { placed(c, out); });
    return out;
  }
  function ask(msg, def) {
    var v = prompt(msg, def || "");
    return v && v.trim() ? v.trim() : null;
  }

  function node(nd, dp, par) {
    var d = document.createElement("div");
    d.className = "nd";
    var h = document.createElement("div");
    h.className = "nh";
    var s = document.createElement("span");
    s.className = "nm";
    s.textContent = nd.n;
    h.appendChild(s);
    function btn(t, title, fn) {
      var b = document.createElement("button");
      b.className = "mini";
      b.textContent = t;
      b.title = title;
      b.onclick = fn;
      h.appendChild(b);
    }
    if (cfg.films && sel !== null) {
      btn("📥", "Placer le film ici", function () { nd.f.push(sel); sel = null; render(); });
    }
    if (dp < cfg.maxDepth) {
      btn("＋", cfg.addTitle, function () {
        var n = ask(cfg.addMsg, "");
        if (n) { nd.c.push(mk(n)); render(); }
      });
    }
    btn("✎", "Renommer", function () {
      var n = ask("Nouveau nom :", nd.n);
      if (n) { nd.n = n; render(); }
    });
    if (par) {
      btn("✕", "Supprimer", function () { par.c.splice(par.c.indexOf(nd), 1); render(); });
    }
    d.appendChild(h);
    if (nd.f.length) {
      var fw = document.createElement("div");
      nd.f.forEach(function (id) {
        var f = F[id], c = document.createElement("span");
        c.className = "fl";
        c.innerHTML = '<img src="' + f.img + '" alt=""><span>' + f.t + "</span>";
        var x = document.createElement("button");
        x.className = "mini";
        x.textContent = "✕";
        x.title = "Remettre dans la liste";
        x.onclick = function () { nd.f.splice(nd.f.indexOf(id), 1); render(); };
        c.appendChild(x);
        fw.appendChild(c);
      });
      d.appendChild(fw);
    }
    if (nd.c.length) {
      var u = document.createElement("div");
      u.className = "ch";
      nd.c.forEach(function (c) { u.appendChild(node(c, dp + 1, nd)); });
      d.appendChild(u);
    }
    return d;
  }

  function render() {
    box.innerHTML = "";
    box.appendChild(node(root, 0, null));
    if (pool) {
      var p = placed(root, {});
      pool.innerHTML = "";
      cfg.films.forEach(function (f) {
        if (p[f.id]) return;
        var c = document.createElement("div");
        c.className = "pf" + (sel === f.id ? " sel" : "");
        c.innerHTML = '<img src="' + f.img + '" alt=""><span>' + f.t + "</span>";
        c.onclick = function () { sel = sel === f.id ? null : f.id; render(); };
        pool.appendChild(c);
      });
      if (!pool.firstChild) pool.innerHTML = '<span class="ok">✔ Tous les films sont classés</span>';
    }
  }

  return {
    render: render,
    exemple: function () { root = build(cfg.exemple); sel = null; render(); },
    reset: function () { root = mk(cfg.rootName); sel = null; render(); }
  };
}

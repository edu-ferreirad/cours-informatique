(function () {
  var c = document.getElementById('matrix');
  if (!c) return;
  var x = c.getContext('2d'), f = 16, d = [], col = ['#ffffff', '#ff9999', '#ff6666'];
  var ch = '0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ<>/\\{}[]*&+=';
  function r() {
    c.width = innerWidth; c.height = innerHeight; d = [];
    for (var i = 0; i < c.width / f; i++) d[i] = 1;
  }
  r();
  addEventListener('resize', r);
  setInterval(function () {
    x.fillStyle = 'rgba(9,0,5,0.08)';
    x.fillRect(0, 0, c.width, c.height);
    x.font = f + 'px monospace';
    for (var i = 0; i < d.length; i++) {
      x.fillStyle = col[Math.floor(Math.random() * col.length)];
      x.fillText(ch.charAt(Math.floor(Math.random() * ch.length)), i * f, d[i] * f);
      if (d[i] * f > c.height && Math.random() > 0.975) d[i] = 0;
      d[i]++;
    }
  }, 50);
})();

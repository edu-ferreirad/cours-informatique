const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'classe.html'), 'utf8');
const dom = new JSDOM(html, { url: 'https://example.github.io/escalade-outdoor/classe.html', runScripts: 'outside-only', pretendToBeVisual: true, resources: 'usable' });
const { window } = dom, { document } = window;
window.localStorage.clear();
window.Element.prototype.scrollIntoView = function () {};
const errors = [];
window.addEventListener('error', (e) => errors.push((e.error && e.error.stack) || e.message));

const scripts = Array.from(document.querySelectorAll('script'));
for (const s of scripts) {
  const code = s.src ? fs.readFileSync(path.join(ROOT, s.getAttribute('src')), 'utf8') : s.textContent;
  try { window.eval(code); } catch (e) { errors.push('LOAD ERROR (' + (s.src||'inline') + '): ' + e.stack); }
}

setTimeout(() => {
  document.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true }));
  setTimeout(() => {
    // Simule le chargement de 2 fichiers .json d'équipes
    const fakeSave1 = JSON.stringify({ teamName: "Équipe A", teamCodename: "Faucon", completed: [1,2,3,4,5,6,7,8,9], hintsUsed: [], bonusCorrect: [1,2], startedAt: Date.now() - 600000 });
    const fakeSave2 = JSON.stringify({ teamName: "Équipe B", completed: [1,2,3,4,5,6,7,8,9], hintsUsed: [3], bonusCorrect: [], startedAt: Date.now() - 500000 });
    const input = document.getElementById('file-input');
    try {
      const f1 = new window.File([fakeSave1], 'a.json', { type: 'application/json' });
      const f2 = new window.File([fakeSave2], 'b.json', { type: 'application/json' });
      Object.defineProperty(input, 'files', { value: [f1, f2], configurable: true });
      input.dispatchEvent(new window.Event('change', { bubbles: true }));
    } catch (e) { errors.push('file sim error: ' + e.stack); }

    setTimeout(() => {
      const rows = document.querySelectorAll('#results-body tr');
      console.log('Lignes de classement affichées:', rows.length);
      const genBtn = document.getElementById('btn-generique');
      if (genBtn) genBtn.click();
      setTimeout(() => {
        console.log('Cartes du générique affichées:', document.querySelectorAll('.generique-card').length);
        console.log('Record affiché:', document.getElementById('alltime-record') ? document.getElementById('alltime-record').textContent : '(absent)');
        console.log('\nErreurs capturées:', errors.length);
        errors.forEach((e,i) => console.log(`\n[Erreur ${i+1}]\n${e}`));
        process.exit(errors.length > 0 ? 1 : 0);
      }, 3000);
    }, 100);
  }, 100);
}, 50);

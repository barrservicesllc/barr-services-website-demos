// Demo-only progressive enhancement: no remote requests, analytics, or data persistence.
(() => {
  const buttons = Array.from(document.querySelectorAll('.finder-choice'));
  const feedback = document.getElementById('finderFeedback');
  const form = document.getElementById('quoteForm');
  if (!buttons.length || !feedback || !form) return;
  const typeSelect = form.elements.namedItem('customerType');
  const details = form.elements.namedItem('details');
  const notes = {
    'Residential / personal': 'Great for moving, renovations, and temporary property storage.',
    'Construction / contractor': 'Share jobsite access details so delivery equipment can be discussed.',
    'Business / warehouse': 'Include the number of units and whether seasonal inventory is involved.',
    'Farm / agricultural': 'Describe the placement surface, equipment, and seasonal storage needs.'
  };
  buttons.forEach(btn => btn.addEventListener('click', () => {
    const use = btn.dataset.use;
    if (!Object.prototype.hasOwnProperty.call(notes, use)) return;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    if (typeSelect) typeSelect.value = use;
    if (details && !details.value.trim()) details.placeholder = notes[use] + ' Add other needs here.';
    feedback.replaceChildren();
    const strong = document.createElement('strong');
    strong.textContent = 'Selected: ' + btn.querySelector('strong').textContent + '. ';
    feedback.append(strong, document.createTextNode(notes[use] + ' The quote form has been prefilled.'));
  }));
  const mobileCta = document.getElementById('mobileQuoteCta');
  const target = document.getElementById('quote');
  if (mobileCta && target) {
    const toggle = () => { mobileCta.hidden = target.getBoundingClientRect().top < window.innerHeight * .55; };
    window.addEventListener('scroll', toggle, {passive:true});
    window.addEventListener('resize', toggle, {passive:true});
    toggle();
  }
})();
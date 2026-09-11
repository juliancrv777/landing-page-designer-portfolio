const projects = {
  cloudpay: { index: '01 / 03', title: 'Make fintech feel human.', copy: 'CloudPay translates the invisible complexity of payments into a confident, kinetic story. The page pairs a dark, high-contrast canvas with an animated money trail that gives the product a sense of motion before the first click.', role: 'Role / Art direction, UX, UI, code', focus: 'Focus / Clarity + conversion' },
  signal: { index: '02 / 03', title: 'A quieter way to think.', copy: 'Signal is an AI productivity concept built around restraint. Its launch page uses a single editorial gesture, generous rhythm and a warm, tactile palette to make an advanced tool feel calm, useful and human.', role: 'Role / Concept, narrative, visual system', focus: 'Focus / Trust + differentiation' },
  atlas: { index: '03 / 03', title: 'One system, many campaign stories.', copy: 'Atlas is a modular framework for fast-moving campaigns. The concept shows how a recognizable grid, flexible tiles and a small set of tokens can give every launch its own voice without losing the brand thread.', role: 'Role / System design, interaction, prototype', focus: 'Focus / Scale + consistency' }
};
const cards = document.querySelectorAll('.project-card');
const title = document.querySelector('#case-title');
const copy = document.querySelector('#case-copy');
const index = document.querySelector('.case-index');
const role = document.querySelector('#case-role');
const focus = document.querySelector('#case-focus');
cards.forEach(card => card.addEventListener('click', () => {
  const project = projects[card.dataset.project];
  cards.forEach(item => item.classList.toggle('active', item === card));
  index.textContent = project.index;
  title.textContent = project.title;
  copy.textContent = project.copy;
  role.textContent = project.role;
  focus.textContent = project.focus;
}));


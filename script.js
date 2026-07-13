// Cambios de pestañas fluidos
const tabs = document.querySelectorAll('.day-tab');
const panels = document.querySelectorAll('.day-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    const target = document.querySelector(`.day-panel[data-day="${tab.dataset.day}"]`);
    if(target) target.classList.add('active');
  });
});
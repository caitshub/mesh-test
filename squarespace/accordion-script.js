// This is the entire content of your new 'accordion-script.js' file

function setupModelViewerAccordion() {
  const accordionItems = document.querySelectorAll('.mv-accordion .accordion-item');

  accordionItems.forEach(clickedItem => {
    const button = clickedItem.querySelector('.accordion-button');
    
    button.addEventListener('click', () => {
      const content = clickedItem.querySelector('.accordion-content');
      const isAlreadyOpen = clickedItem.classList.contains('active');

      // 1. First, reset all accordion items
      accordionItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').classList.remove('open');
        const mv = item.querySelector('model-viewer');
        if (mv) {
          mv.removeAttribute('src'); // Unload the model by removing the src
        }
      });

      // 2. If the clicked item was NOT already open, then open and load it.
      if (!isAlreadyOpen) {
        clickedItem.classList.add('active');
        content.classList.add('open');
        const mv = content.querySelector('model-viewer');
        if (mv) {
          const realSrc = mv.getAttribute('data-src');
          mv.setAttribute('src', realSrc); // Load the model by setting the src
        }
      }
    });
  });
}

// Run the script after the entire page (including model-viewer) has loaded
window.addEventListener('load', setupModelViewerAccordion);

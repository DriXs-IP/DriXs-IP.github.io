document.addEventListener('DOMContentLoaded', function() {
  console.log('Animations: инициализация');
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px'
  });

  
  function addAnimation(element, animationClass, delay = false, index = 0) {
    if (!element) return;
    
    if (!element.classList.contains('animate-on-scroll')) {
      element.classList.add('animate-on-scroll');
    }
    
    element.classList.add(animationClass);
    
    if (delay) {
      const delayClass = `delay-${(index % 5) + 1}`;
      element.classList.add(delayClass);
    }
    
    observer.observe(element);
  }


  const sections = [
    { selector: '.stats-section', animation: 'animate-fade-up' },
    { selector: '.map-wrapper', animation: 'animate-fade-left' },
    { selector: '.biography-section', animation: 'animate-scale' },
    { selector: '.quotes-section', animation: 'animate-blur' },
    { selector: '.detailed-history', animation: 'animate-fade-right' },
    { selector: '.timeline-section', animation: 'animate-rotate' },
    { selector: '.facts-deck-section', animation: 'animate-fade-up' }
  ];

  sections.forEach(({ selector, animation }) => {
    document.querySelectorAll(selector).forEach(el => {
      addAnimation(el, animation);
    });
  });


  const elements = [
    { selector: '.stat-item', animation: 'animate-scale', delay: true },
    { selector: '.timeline-item', animation: 'animate-fade-up', delay: true },
    { selector: 'blockquote', animation: 'animate-fade-left', delay: true },
    { selector: '.stage-card', animation: 'animate-fade-right', delay: true },
    { selector: '.biography-figure', animation: 'animate-blur', delay: true },
    { selector: '.fact-card', animation: 'animate-scale', delay: true },
    { selector: '.fact-detail-panel', animation: 'animate-fade-right', delay: false },
    { selector: '.facts-deck-section h2', animation: 'animate-fade-up', delay: false }
  ];

  elements.forEach(({ selector, animation, delay }) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      addAnimation(el, animation, delay, index);
    });
  });


  const stageCards = document.querySelectorAll('.history-stages .stage-card');
  stageCards.forEach(card => {
    const summary = card.querySelector('summary');
    if (!summary) return;

    summary.addEventListener('click', function(e) {
      e.preventDefault();               
      const isOpen = card.hasAttribute('open');
      if (isOpen) {
        card.removeAttribute('open');  
      } else {
        stageCards.forEach(c => c.removeAttribute('open'));
        card.setAttribute('open', '');  
      }
    });
  });

  console.log('Animations: инициализация завершена');
});

document.addEventListener('click', (e) => {
    const img = e.target.closest('.all-photo-item img');
    if (img) {
        e.preventDefault();
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        if (lightbox && lightboxImg) {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {

  const facts = [
    {
      title: 'Подробности стачки 1905 года и пожара на Пятницкой',
      description: `<p>В сентябре 1905 года рабочие типографии Сытина потребовали 9-часовой рабочий день и повышения зарплаты. К декабрю стачка переросла в вооружённое восстание: типографию захватили революционеры, арестовали дирекцию и самого Сытина, напечатали первый номер газеты «Известия». 12 декабря здание подожгли по приказу властей. В огне погибло всё оборудование и уникальная коллекция лубочных картинок, собиравшаяся десятилетиями. Однако уже через полгода Сытин восстановил типографию.</p>`,
      short: 'Стачка 1905'
    },
    {
      title: 'История с "конфузом 1890 года" (заметка о зарплате)',
      description: `<p>В 1890 году в одном из отрывных календарей Сытина вышла заметка, сравнивающая зарплаты рабочих в России и за границей. Цифры были не в пользу России: английский текстильщик получал в 2,5–3 раза больше. Это спровоцировало стачку на текстильной фабрике в Ярославле. Власти запретили печатать в календарях любые дополнительные статьи. Но Сытин через связи добился одобрения Александра III, и запрет сняли.</p>`,
      short: 'Конфуз 1890'
    },
    {
      title: 'Тайный бизнес юного Сытина',
      description: `<p>Работая в лавке Шарапова, юный Сытин придумал хитрую схему: он прятал один том из полного собрания сочинений, дожидался, когда остальные тома распродадут по дешёвке, а затем продавал спрятанный том букинистам, комплектуя полное издание. Хозяин, узнав об этом, не наказал его, а оценил коммерческую смекалку.</p>`,
      short: 'Тайный бизнес'
    },
    {
      title: 'Персональный пенсионер',
      description: `<p>После революции 1917 года все предприятия Сытина национализировали. Он жил в крошечной квартире, был «лишенцем». Однако в 1928 году советская власть неожиданно назначила ему персональную пенсию — 250 рублей в месяц. Причины: огромный вклад в просвещение, отсутствие контрреволюционной деятельности и ходатайства влиятельных лиц (Луначарского, Дорошевича). До смерти в 1934 году Сытин консультировал издательства и писал мемуары.</p>`,
      short: 'Пенсионер'
    }
  ];

  const deck = document.getElementById('cardsDeck');
  const factTitle = document.getElementById('factTitle');
  const factDescription = document.getElementById('factDescription');
  const prevBtn = document.getElementById('prevFactBtn');
  const nextBtn = document.getElementById('nextFactBtn');

  if (!deck || !factTitle || !factDescription || !prevBtn || !nextBtn) {
    return;
  }

  let currentIndex = 0;


  function renderCards() {
    deck.innerHTML = '';
    facts.forEach((fact, index) => {
      const card = document.createElement('div');
      card.className = 'fact-card';
      card.dataset.index = index;
      card.innerHTML = `
        <span class="card-index">${index + 1}</span>
        <div class="card-title">${fact.short}</div>
      `;
      deck.appendChild(card);
    });
    updateCardsPosition();
  }


  function updateCardsPosition() {
    const cards = document.querySelectorAll('.fact-card');
    const total = cards.length;
    
    cards.forEach((card, i) => {
     
      let position = (i - currentIndex + total) % total;
      
      let rotate = 0;
      let translateX = 0;
      let translateY = 0;
      let zIndex = 0;
      let opacity = 1;
      let filter = 'brightness(1)';
      let pointerEvents = 'auto';

      const baseShift = -40;

      if (position === 0) {

        rotate = 0;
        translateX = baseShift + 0;
        translateY = 0;
        zIndex = 20;
        opacity = 1;
        filter = 'brightness(1)';
        pointerEvents = 'auto';
      } 
      else if (position === 1) {

        rotate = 12;
        translateX = baseShift + 90;
        translateY = 10;
        zIndex = 15;
        opacity = 0.9;
        filter = 'brightness(0.9)';
        pointerEvents = 'auto';
      }
      else if (position === 2) {
      
        rotate = 24;
        translateX = baseShift + 150;
        translateY = 25;
        zIndex = 10;
        opacity = 0.8;
        filter = 'brightness(0.85) blur(0.5px)';
        pointerEvents = 'auto';
      }
      else if (position === 3) {
       
        rotate = 36;
        translateX = baseShift + 190;
        translateY = 45;
        zIndex = 5;
        opacity = 0.6;
        filter = 'brightness(0.8) blur(1px)';
        pointerEvents = 'none';
      }
      else if (position === total - 1) {
       
        rotate = -12;
        translateX = baseShift - 90;
        translateY = 10;
        zIndex = 18;
        opacity = 0.9;
        filter = 'brightness(0.9)';
        pointerEvents = 'auto';
      }
      else if (position === total - 2) {
    
        rotate = -24;
        translateX = baseShift - 150;
        translateY = 25;
        zIndex = 12;
        opacity = 0.8;
        filter = 'brightness(0.85) blur(0.5px)';
        pointerEvents = 'auto';
      }
      else if (position === total - 3) {
        
        rotate = -36;
        translateX = baseShift - 190;
        translateY = 45;
        zIndex = 8;
        opacity = 0.6;
        filter = 'brightness(0.8) blur(1px)';
        pointerEvents = 'none';
      }
      else {
      
        if (position > total / 2) {
          rotate = -45;
          translateX = baseShift - 230;
          translateY = 70;
        } else {
          rotate = 45;
          translateX = baseShift + 230;
          translateY = 70;
        }
        zIndex = 1;
        opacity = 0.3;
        filter = 'blur(2px) brightness(0.6)';
        pointerEvents = 'none';
      }

      card.style.transform = `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px)`;
      card.style.zIndex = zIndex;
      card.style.opacity = opacity;
      card.style.filter = filter;
      card.style.pointerEvents = pointerEvents;
    });
  }


  function updateFactInfo(index) {
    factTitle.textContent = facts[index].title;
    factDescription.innerHTML = facts[index].description;
  }

  function nextFact() {
    currentIndex = (currentIndex + 1) % facts.length;
    updateCardsPosition();
    updateFactInfo(currentIndex);
  }


  function prevFact() {
    currentIndex = (currentIndex - 1 + facts.length) % facts.length;
    updateCardsPosition();
    updateFactInfo(currentIndex);
  }


  renderCards();
  updateFactInfo(currentIndex);


  nextBtn.addEventListener('click', nextFact);
  prevBtn.addEventListener('click', prevFact);


  deck.addEventListener('click', (e) => {
    const card = e.target.closest('.fact-card');
    if (!card) return;
    const index = parseInt(card.dataset.index);
    if (!isNaN(index) && index !== currentIndex) {
      currentIndex = index;
      updateCardsPosition();
      updateFactInfo(currentIndex);
    }
  });
});
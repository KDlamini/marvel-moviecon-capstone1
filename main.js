// Handle mobile menu button
const body = document.querySelector('body');
const menuList = document.querySelector('.menu-list');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.menu-close-btn .times');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));

hamburger.addEventListener('click', () => {
  menuList.classList.add('active');
  closeIcon.classList.add('icon');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((Item) => { Item.classList.remove('active'); });
    menuList.classList.remove('active');
    menuItem.classList.add('active');

    if (menuItem.textContent === 'Program' && !body.classList.contains('homepage')) {
      localStorage.setItem(menuItem.textContent, 'active');
    }
  });
});

// Refresh page when resizing to desktop mode
window.addEventListener('resize', () => {
  if (body.clientWidth >= 768 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});

// Retrive data from localstorage on page load
window.onload = () => {
  if (localStorage.getItem('Program') !== null) {
    menuItems[3].classList.add(localStorage.getItem('Program'));
    localStorage.removeItem('Program');
  }
};

// Creators Data
const creatorData = [
  {
    creator_name: 'Kevin Feige',
    imageUrl: './images/Kevin-Feige.jpg',
    title: 'President, Marvel Studios',
    description: 'Feige is an American film producer and television producer who has been the president of Marvel Studios and the primary creator and producer of the Marvel Cinematic Universe franchise since 2007. The films he has produced have a combined worldwide box office gross of over $26.8 billion.',
  },
  {
    creator_name: 'Russo Brothers',
    imageUrl: './images/Russo-brothers.jpeg',
    title: 'American directors, producers. Directed Captain America: The Winter Soldier (2014), Captain America: Civil War (2016), Avengers: Infinity War (2018), and Avengers: Endgame (2019)',
    description: 'Anthony Russo and Joseph Russo, collectively known as the Russo brothers, are American directors, producers, screenwriters, and actors. They direct most of their work together.',
  },
  {
    creator_name: 'Chris Hemsworth',
    imageUrl: './images/Chris-Hemsworth.jpg',
    title: 'Australian actor',
    description: 'Hemsworth is best known for playing Thor in eight Marvel Cinematic Universe films, beginning with Thor (2011) and appearing most recently in Avengers: Endgame (2019), which established him among the world\'s highest-paid actors.',
  },
  {
    creator_name: 'Robert Downey Jr',
    imageUrl: './images/Robert-Downey-Jr.jpg',
    title: 'American actor',
    description: 'Downey gained global recognition for starring as Tony Stark / Iron Man in ten films within the Marvel Cinematic Universe, beginning with Iron Man (2008). He has also played the title character in Guy Ritchie\'s Sherlock Holmes (2009), which earned him his second Golden Globe, and its sequel, Sherlock Holmes: A Game of Shadows (2011).',
  },
  {
    creator_name: 'Scarlett Johansson',
    imageUrl: './images/Scarlet-Johanson.jpg',
    title: 'American actress',
    description: 'Scarlett portrayed Black Widow in the Marvel Cinematic Universe, a role for which she received critical acclaim and global recognition, beginning with Iron Man 2 (2010) and most recently with Black Widow (2021).',
  },
  {
    creator_name: 'Chris Evans',
    imageUrl: './images/Chris_Evans.jpg',
    title: 'American actor',
    description: 'Evans is best known for his role as Captain America in the Marvel Cinematic Universe (MCU) series of films.He gained attention for his portrayal of Marvel Comics character Human Torch in 2005\'s Fantastic Four, and its sequel Fantastic Four: Rise of the Silver Surfer (2007).',
  },
];

// Populate Featured Creators Section
const creators = document.querySelector('.featured-creators');

// creator container
const creatorsList = document.createElement('ul');
creatorsList.className = 'creators-list flex-stretch';
creators.appendChild(creatorsList);

creatorData.forEach((creator) => {
  // creator card
  const li = document.createElement('li');
  li.className = 'creator d-flex';
  creatorsList.appendChild(li);

  const creatorImage = document.createElement('div');
  creatorImage.className = 'creator-img-wrapper d-flex';
  creatorImage.innerHTML = `<img src=${creator.imageUrl} alt="Featured creator">`;
  li.appendChild(creatorImage);

  const creatorInfo = document.createElement('div');
  creatorInfo.className = 'creator-info';
  li.appendChild(creatorInfo);

  const creatorName = document.createElement('h3');
  creatorName.className = 'creator-name';
  creatorName.innerHTML = creator.creator_name;
  creatorInfo.appendChild(creatorName);

  const creatorTitle = document.createElement('p');
  creatorTitle.className = 'creator-title';
  creatorTitle.innerHTML = creator.title;
  creatorInfo.appendChild(creatorTitle);

  const creatorDescription = document.createElement('p');
  creatorDescription.className = 'creator-description';
  creatorDescription.innerHTML = creator.description;
  creatorInfo.appendChild(creatorDescription);
});

// more creators mobile button
const moreCreators = document.createElement('button');
moreCreators.className = 'more-creators-btn d-flex';
moreCreators.type = 'button';
moreCreators.innerHTML = 'more <i class="chevron down icon"></i>';
creators.appendChild(moreCreators);

// Hide some featured creators in mobile version
const creatorCards = Array.from(document.querySelectorAll('.creator'));

creatorCards.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hide');
  }
});

// View more or less featured creators on click
const moreBtn = document.querySelector('.more-creators-btn');

const handleMoreBtnText = (card) => {
  if (card.classList.contains('hide')) {
    moreBtn.innerHTML = 'more <i class="chevron down icon"></i>';
  } else {
    moreBtn.innerHTML = 'less <i class="chevron up icon"></i>';
  }
};

moreBtn.addEventListener('click', () => {
  creatorCards.forEach((card, index) => {
    if (index > 1) {
      card.classList.toggle('hide');
      handleMoreBtnText(card);
    }
  });
});
const pets = [
    {
    id: 1,
    name: "Katrine",
    img: "../assets/img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
    },
    {
    id: 2,
    name: "Jennifer",
    img: "../assets/img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
    },
    {
    id: 3,
    name: "Woody",
    img: "../assets/img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
    },
    {
    id: 4,
    name: "Sophia",
    img: "../assets/img/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
    },
    {
    id: 5,
    name: "Timmy",
    img: "../assets/img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
    },
    {
    id: 6,
    name: "Charly",
    img: "../assets/img/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
    },
    {
    id: 7,
    name: "Scarlett",
    img: "../assets/img/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
    },
    {
    id: 8,
    name: "Freddie",
    img: "../assets/img/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
    },
];
let initArr = [];
let pageNum = 1;
let pageNumMax;
let petsCount;
const body = document.querySelector('body');
const burgerBtn = document.querySelector('.nav__btn');
const overlay = document.querySelector('.overlay');
const linksContainer = document.querySelector('.nav__list');
const links = linksContainer.getElementsByClassName('nav__item');
const popupOverlay = document.querySelector('.pop-up-overlay');
const popUpContainer = document.querySelector('.pop-up');
const petsContainer = document.querySelector('.our-friends__list');
const startPageBtn = document.querySelector('.start-page');
const backPageBtn = document.querySelector('.back-page');
const currPage = document.querySelector('.current-page');
const forwardPageBtn = document.querySelector('.forward-page');
const lastPageBtn = document.querySelector('.last-page');

// Burger
const openMenu = () => {
  burgerBtn.classList.toggle('nav__btn--active');
  body.classList.toggle('stop-scroll');
  overlay.classList.toggle('overlay--off');
}
burgerBtn.addEventListener('click', () => {
openMenu();
});
overlay.addEventListener('click', function overlayEvt() {
if (burgerBtn.classList.contains('nav__btn--active')) {
openMenu();
} else {
overlay.removeEventListener('click', overlayEvt());
}
});
linksContainer.addEventListener('click', function addActiveElem(event) {
let link = event.target.parentNode;
if (link.classList.contains('nav__item')) {
let activeElem = this.querySelector('.nav__item--active');
if (activeElem) {
  activeElem.classList.remove('nav__item--active');
}
link.classList.add('nav__item--active');
}
if (event.target.matches('a')) {
if (burgerBtn.classList.contains('nav__btn--active')) {
  openMenu();
} else {
  linksContainer.removeEventListener('click', addActiveElem(event));
}
}
});
window.addEventListener('scroll', () => {
  if (this.scrollY === 0) {
    if (!(linksContainer.firstElementChild.classList.contains('nav__item--active'))) {
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('nav__item--active');
      }
      linksContainer.firstElementChild.classList.add('nav__item--active');
    }
}
});

// Pagination functionality
const initobj = [];
function generateRandArr(arr) {
    for (let i = 0; i < pets.length; i++) {
        let randomObj = pets[Math.floor(Math.random() * ((pets.length - 1) + 1 - 0) + 0)];
        if (arr.length === 8) {
            return arr;
        } else {
            if (arr.indexOf(randomObj) == -1) {
                arr.push(randomObj);
            } else {
                i--;
            }
        }
    }
}
generateRandArr(initobj);
function separateArr() {
    const exrtaArr = [];
    for (let i = 0; i < Math.ceil(initobj.length/3); i++) {
        exrtaArr[i] = initobj.slice((i * 3), (i * 3) + 3);
    }
    return exrtaArr;
}
function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randomIdx = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
    }
    return arr;
}
const results = [];
let idx = 0;
while(idx < 6) {
    separateArr().forEach(element => {
        results.push(shuffleArr(element));
    });
    idx++;
}

const finalArr = results.flat();

function createCardTemplate(arr) {
    let start = pageNum * petsCount - petsCount;
    let end = pageNum * petsCount;

    let randomPetsArr = arr.slice(start, end);

    return randomPetsArr.reduce((acc, curr) => {
        return acc + `
        <div class="pet our-friends__item" id="${curr.id}" onclick="createPopUp(${curr.id})">
          <img
            src="${curr.img}"
            alt="${curr.name}"
            class="pet__img"
          >
          <h4 class="pet__title">${curr.name}</h4>
          <button class="second-btn">Learn more</button>
        </div>
        `
      }, ``);
}
function createPages() {
    windowWidthObserver();
    forwardPageBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (pageNum === 1) {
            startPageBtn.removeAttribute('disabled');
            backPageBtn.removeAttribute('disabled');
        }
        pageNum += 1;
        currPage.innerHTML = pageNum;
        petsContainer.innerHTML = createCardTemplate(finalArr);
        if (pageNum === pageNumMax) {
            lastPageBtn.setAttribute('disabled', '');
            forwardPageBtn.setAttribute('disabled', '');
        }
    });
    lastPageBtn.addEventListener('click',(evt) => {
        evt.preventDefault();
        if (pageNum === 1) {
            startPageBtn.removeAttribute('disabled');
            backPageBtn.removeAttribute('disabled');
        }
        pageNum = pageNumMax;
        currPage.innerHTML = pageNum;
        petsContainer.innerHTML = createCardTemplate(finalArr);
        lastPageBtn.setAttribute('disabled', '');
        forwardPageBtn.setAttribute('disabled', '');
    });
    backPageBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (pageNum === pageNumMax) {
            lastPageBtn.removeAttribute('disabled');
            forwardPageBtn.removeAttribute('disabled');
        }
        pageNum -= 1;
        currPage.innerHTML = pageNum;
        petsContainer.innerHTML = createCardTemplate(finalArr);
        if (pageNum === 1) {
            startPageBtn.setAttribute('disabled', '');
            backPageBtn.setAttribute('disabled', '');
        }
    });
    startPageBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (pageNum === pageNumMax) {
            lastPageBtn.removeAttribute('disabled');
            forwardPageBtn.removeAttribute('disabled');
        }
        pageNum = 1;
        currPage.innerHTML = pageNum;
        petsContainer.innerHTML = createCardTemplate(finalArr);
        startPageBtn.setAttribute('disabled', '');
        backPageBtn.setAttribute('disabled', '');
    });
  }

function windowWidthObserver() {
    window.addEventListener('resize',() => {

        if (body.offsetWidth >= 1280) {
            petsCount = 8;
            pageNumMax = 6;

            pageNum = 1;
            currPage.innerHTML = pageNum;
            petsContainer.innerHTML = createCardTemplate(finalArr);
            forwardPageBtn.removeAttribute('disabled');
            lastPageBtn.removeAttribute('disabled');
            backPageBtn.setAttribute('disabled', '');
            startPageBtn.setAttribute('disabled', '');
        }

        if (body.offsetWidth < 1280 && body.offsetWidth >= 768) {
            petsCount = 6;
            pageNumMax = 8;
            pageNum = 1;
            currPage.innerHTML = pageNum;
            petsContainer.innerHTML = createCardTemplate(finalArr);
            forwardPageBtn.removeAttribute('disabled');
            lastPageBtn.removeAttribute('disabled');
            backPageBtn.setAttribute('disabled', '');
            startPageBtn.setAttribute('disabled', '');
        }

        if (body.offsetWidth < 768) {
            petsCount = 3;
            pageNumMax = 16;
            pageNum = 1;
            currPage.innerHTML = pageNum;
            petsContainer.innerHTML = createCardTemplate(finalArr);
            forwardPageBtn.removeAttribute('disabled');
            lastPageBtn.removeAttribute('disabled');
            backPageBtn.setAttribute('disabled', '');
            startPageBtn.setAttribute('disabled', '');
        }

    });
}
function init() {
    createPages();
    if (body.offsetWidth >= 1280) {
        petsCount = 8;
        pageNumMax = 6;
    }

    if (body.offsetWidth < 1280 && body.offsetWidth >= 768) {
        petsCount = 6;
        pageNumMax = 8;
    }

    if (body.offsetWidth < 768) {
        petsCount = 3;
        pageNumMax = 16;

    }
    currPage.innerHTML = '1';
    petsContainer.innerHTML = createCardTemplate(finalArr);
}
init();

//Pop-up
function createPopUpTemplate(petObj) {
    const {name, age, breed, description, diseases, img, inoculations, parasites, type} = petObj[0];

      return `
        <div class="pop-up__wrapper">
          <img src="${img}" alt="${name}" class="pop-up__img">
          <div class="pop-up__content">
            <div class="pop-up__title-wrapper">
                <h3 class="title pop-up__title">${name}</h3>
                <h4 class="subtitle pop-up__subtitle">${type} - ${breed}</h4>
            </div>
            <p class="pop-up__description">${description}</p>
            <ul class="pop-up__list">
              <li class="pop-up__item">
                <span class="pop-up__item-title"><b>Age:</b> </span>
                <span class="pop-up__item-text">${age}</span>
              </li>
              <li class="pop-up__item">
                <span class="pop-up__item-title"><b>Inoculations:</b> </span>
                <span class="pop-up__item-text">${inoculations.join(', ')}</span>
              </li>
              <li class="pop-up__item">
                <span class="pop-up__item-title"><b>Diseases:</b> </span>
                <span class="pop-up__item-text">${diseases.join(', ')}</span>
              </li>
              <li class="pop-up__item">
                <span class="pop-up__item-title"><b>Parasites:</b> </span>
                <span class="pop-up__item-text">${parasites.join(', ')}</span>
              </li>
            </ul>
          </div>
        </div>
        <button class="round-btn pop-up__close-btn">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
          </svg>
        </button>
      `;
}

function createPopUp(id) {
  let petBio = pets.filter(elem => elem.id == id);
  popupOverlay.classList.remove('pop-up-overlay--off');
  body.classList.add('stop-scroll');
  popUpContainer.innerHTML = createPopUpTemplate(petBio);
}

function closePopup() {
  popupOverlay.classList.add('pop-up-overlay--off');
  body.classList.remove('stop-scroll');
  popUpContainer.innerHTML = '';
}

popupOverlay.addEventListener('click', function overlayEvent() {
    if (popupOverlay.classList.contains('pop-up-overlay--off')) {
        popupOverlay.removeEventListener('click', overlayEvent());
    } else {
      closePopup();
    }
})

if(document.querySelector('.pop-up__close-btn')) {
    document.querySelector('.pop-up__close-btn').addEventListener('click', e => {
      e.preventDefault();
      closePopup();
    })
}
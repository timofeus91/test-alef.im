//Делаем все в один файл


//константы для работы
const costButton = document.getElementById('cost-button');
const ageButton = document.getElementById('age-button');

const costArrow = document.getElementById('cost-arrow');
const ageArrow = document.getElementById('age-arrow');

const allAge = '.elements__item-text-bold_age';
const allPrice = '.elements__item-title_cost';

const allElements = document.querySelectorAll('.elements__item');

const allButtonElements = document.querySelectorAll('.elements__item-button');
const allLikeElements = document.querySelectorAll('.elements__item-like')

const elementsContainer = document.querySelector('.elements__list');

const viewUp = document.querySelector('.extra-buttons__view-up');



//функция по сортировке
function sortCard(elements, type) {
    let sortingObj = {};
    elements.forEach(function(element, index) {
        const elementValue = parseInt(element.querySelector(type).textContent.replace('руб.', '').replace(/\s+/g, ''));
        sortingObj[elementValue] = {'element': element, 'index': index};
    });
        const keys = Object.keys(sortingObj);
        
        function numberSort(a, b) {
            a = parseInt(a);
            b = parseInt(b);
            if (a < b) return -1;
            if (a > b) return 1;
          }
        keys.sort(numberSort);

        keys.map(function(key, index){
            elementsContainer.insertAdjacentElement('beforeend', sortingObj[key]['element']);
          });
        
}

//функция по изменению кнопки в элементе
function changeButtonElement() {
    allButtonElements.forEach(function(element) {
        element.addEventListener("click", function() {
            if (element.textContent === 'Купить') {
                element.textContent = 'Продан';
            }
            else {
                element.textContent = 'Купить';
            }
            
            element.classList.toggle('elements__item-button_noactive');
            
        })

        })
    };


//функция по управлению кнопки лайка
function changeLikeElement() {
    allLikeElements.forEach(function(element) {
        element.addEventListener("click", function() {
            element.classList.toggle('elements__item-like_active');

        })
    })
}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

changeButtonElement();
changeLikeElement();

viewUp.addEventListener("click", backToTop);

costButton.addEventListener("click", function() {
    sortCard(allElements, allPrice);
    costArrow.src="./images/right-arrow-down.png";
    ageArrow.src ="./images/right-arrow-up.png";
})

ageButton.addEventListener("click", function() {
    sortCard(allElements, allAge);
    ageArrow.src ="./images/right-arrow-down.png";
    costArrow.src="./images/right-arrow-up.png";
})


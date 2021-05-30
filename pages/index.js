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
const allLikeElements = document.querySelectorAll('.elements__item-like');

const elementsContainer = document.querySelector('.elements__list');

const viewUp = document.querySelector('.extra-buttons__view-up');

const popupCat = document.getElementById('popup-cat');
const closePopupCat = document.getElementById('popup-cat-close')

const formElement = document.querySelector('.footer__form');
const formInput = formElement.querySelector('.footer__form-input');

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
    element.classList.add('footer__form-input_error');
  };
  
  // Функция, которая удаляет класс с ошибкой
  const hideInputError = (element) => {
    element.classList.remove('footer__form-input_error');
  };
  
  // Функция, которая проверяет валидность поля
  const isValid = () => {
    if (!formInput.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formInput);
    } else {
      // Если проходит, скроем
      hideInputError(formInput);
    }
  };
  
   //отмена поведения по умолчанию у кнопки submit 
  formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
  });
  
  // Вызовем функцию isValid на каждый ввод символа
  formInput.addEventListener('input', isValid); 


  



//функция по сортировке
function sortCard(elements, type) {
    let sortingObj = {};
    elements.forEach((element, index) => {
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
    allButtonElements.forEach((element) => {
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
    allLikeElements.forEach((element) => {
        element.addEventListener("click", function() {
            element.classList.toggle('elements__item-like_active');
            popupCat.classList.add('popup_opened');

        })
    })
    
}

//функция для "пролистывания" вверх
function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

//вызов функций
changeButtonElement();
changeLikeElement();


//слушатели событий 
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

closePopupCat.addEventListener("click", function() {
    popupCat.classList.remove('popup_opened');
})
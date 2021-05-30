# Выполнение тестового задания на позицию HTML-верстальщик. Кандидат Бережнов Тимофей.

### Обзор

1. Вся файловая система структуирована по БЭМу.
2. Использована семантическая и адаптивная верстка.
3. Старался сделать верстку максимально кроссбраузерной.
4. Исходя из тестового задания использовал flex в разделе с карточками для корректного отображения в IE. Но вообще, в данной ситуации, предопчел бы использовать гриды.
5. В CSS использовал свойство object-fit по отношению к тегу img. Понимаю что свойство не поддерживается IE, но выполнил так намеренно чтобы показать что умею работать с данным свойством. Чтобы корректно отображалось в IE, здесь следовало бы заменить тег img и воспользоваться свойство CSS backround-size. 
6. Код JS писал отталкиваясь от новейших стандартов. Понимаю что он не будет работать в IE в виде просто одного скрипт-файла без сторонних дополнений(Таких как webpack). Сделал это специально чтобы показать что знаком с современным JS. Здесь выполнена простая конструкция в одном файле ( все сделано исходя из задания), но я также знаю более сложные формы использования JS. Знаком с React и Express.js (Это можно увидеть подробнее в моем *[репозитории](https://github.com/timofeus91)) 
7. Стиль кнопки покупки, когда позиция куплена, не отображается по умолчанию(как и кнопка лайка-избранного). Но стиль и текст кнопки меняется при нажатии и отображается как в макете. И реализовано обратное изменение стиля в случае повторного нажатия кнопки просто ради демонстрации. То что так в реальном проекте обычно не бывает понимаю. 
8. Плавный подъем вверх реализован через scroll-behavior: smooth; . То что в IE он не будет работать понимаю. Использовал его чтобы показать что знаком с данным CSS свойством.
9. Реализовано открытие попапа о добавлении в избранное и валидация инпута формы вместо базовой валидации браузера. Сам попап можно стилизовать более продуманно или используя сторонние фреймворки сделать интересное всплывающее окно. В том виде что выполнено сейчас сделано в 1 очередь для отображения знаний по JS и CSS.
10. В ТЗ было сказано что базовый размер 1280px и предоставлен макет. Но макет был сделан на 1180px и поэтому, чтобы сделать на 1280px, в некоторых местах размеры не совпадают с макетом. Это было сделано для более качественонного отображения дизайна. 
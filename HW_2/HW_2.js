let sum = 0;
let userName = prompt('Введите свое имя');
let rightAnswer = ('Верно! +1 очко ' + userName);
let wrongAnswer = ('А вот и нет.');
let firstQuestion = prompt('Какое самое большое животное в мире?');
if (firstQuestion === 'Синий кит') {
   alert(rightAnswer);   
   sum += 1;
   } else alert(wrongAnswer);
let secondQuestion = prompt('Назовите формулу воды');
if (secondQuestion === 'H20') {
   alert(rightAnswer);   
   sum += 1;
   } else alert(wrongAnswer);
let thirdQuestion = prompt('Где находится Пизанская башня?');
if (thirdQuestion === 'В Пизе' || 'Пиза') {
   alert(rightAnswer);  
   sum += 1;
   }  else alert(wrongAnswer);
let fourthQuestion = prompt('На каком языке говорят в Бразилии?');
if (fourthQuestion === 'Португальский' || 'На португальском') {
   alert(rightAnswer);   
   sum += 1;
   } else alert(wrongAnswer);
let fifthQuestion = prompt('Как звали отца Александра Сергеевича Пушкина?');
if (fifthQuestion === 'Сергей') {
   alert(rightAnswer);  
   sum += 1;
   } else alert(wrongAnswer);

alert('Вы нарали ' + sum + ' балла из 5'); 
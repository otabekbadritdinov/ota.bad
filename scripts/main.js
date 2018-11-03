var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mozilla.png') {
		myImage.setAttribute('src', 'images/instagram.jpg');
	} else {
		myImage.setAttribute('src', 'images/mozilla.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
/* localStorage - API - позволяет хранить данные
в браузере и извлекать их позднее. */

/* Мы используем функцию setItem() из localStorage
для создания и хранения данных в свойстве под
названием 'name', и устанавливаем это значение
в переменную myName, которая содержит имя
введенное пользователем. 
В конце мы устанавливаем textContent заголовку
в виде строки и имени пользователя. */

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
/* Этот блок сначала использует оператор отрицания 
(логическое НЕ, представленное в виде !) чтобы 
проверить, существуют ли данные в пункте name. 
Если нет, то функция setUserName() запускается для их
создания. Если данные существуют (то есть, 
пользователь установил его во время предыдущего 
посещения), мы извлекаем сохраненное имя, с помощью
 getItem() и устанавливаем textContent заголовку в виде
строки плюс имя пользователя, так же, как мы делали
внутри setUserName(). */

myButton.onclick = function() {
	setUserName();
}
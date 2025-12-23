const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit' , (e) => {
	if (password.value == 'parola' && name.value =='admin') {
	   setTimeout(function() {
	   var myWindow = window.open("http://abv.bg" , "_self");
	   }, 0); 
    }
	else{
		alert("Wrong name or password!");
	}
	if(messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})
//Submit event
const submitEvent = function(){
	const name = document.getElementById('Enemy name').value
	const HP = document.getElementById('HP').value
	const AC = document.getElementById('AC').value
	const Speed = document.getElementById('Spd').value
	const Sum = document.getElementById('Sum').value
	const E = new Enemy(name,HP,AC,Speed,Sum);
	AddEnemy(E);
	clearBoxs();
} 


//Initializes all controllers
const initControllers = function(){
 const submitButton = document.getElementById('Submit');
 submitButton.addEventListener('click',submitEvent);
}
initControllers(); //Must be last line of code 
//Constructor for Enemy Class
function Enemy(Name,HP,AC,Speed,Summary){
	this.Name=Name;
	this.HP=HP;
	this.AC=AC;
	this.Speed=Speed;
	this.Summary=Summary;

}

//Add Enemy to Int. Tracker
function AddEnemy(enemy){
	var ul = document.getElementById("Elist"); //Get the list
	var li =  document.createElement("li"); //Create new list item
	//add it to ul
	ul.appendChild(li);
	//Create Enemy Name span
	var n = document.createElement('span');
	n.className='Ename'
	var intext = document.createTextNode(`Name: ${enemy.Name}`); //Create the text for Enemy Name
	n.append(intext);
	li.appendChild(n); //Create Graphic of Enemy stats
	

	//Make health easily adjustable by making it an input field
	var hlabel = document.createElement('span');
	var total = document.createElement('span');
	hlabel.className='hlabel';
	intext=document.createTextNode("HP: ");
	hlabel.append(intext);
	intext=document.createTextNode(`/${enemy.HP}`);
	total.append(intext);
	var h = document.createElement('input');
	h.className='Ehealth'

	h.type='number';
	h.min='0';
	h.max=enemy.HP;
	h.value=enemy.HP;
	h.id='sz';
	var cont = document.createElement('div')
	cont.append(hlabel);
	cont.append(h);
	cont.append(total);
	li.appendChild(cont);
	
	//Add AC span
	var a = document.createElement('span'); //Create Enemy Name span
	a.className='EAC'
	intext = document.createTextNode(`AC:${enemy.AC}`); //Create the text for Enemy Name
	a.append(intext);
	li.appendChild(a); //Create Graphic of Enemy stats
	

	//Add Speed (Int)
	var s = document.createElement('span'); //Create Enemy Name span
	s.className='Espeed'
	intext = document.createTextNode(`Speed:${enemy.Speed}`); //Create the text for Enemy Name
	s.append(intext);
	li.appendChild(s); //Create Graphic of Enemy stats
	

	//Create hover information button
	var infobtn = document.createElement("i");
	infobtn.className="bi bi-info-circle-fill";
	infobtn.addEventListener('mouseover',showToolTip);
	infobtn.addEventListener('mouseout',hideToolTip);
	var smm = document.createElement('span');
	smm.className='smm';
	intext = document.createTextNode(`${enemy.Summary}`);
	smm.append(intext);
	infobtn.appendChild(smm);
	li.appendChild(infobtn);
	//Refill ToolTip on hover
	var btns = document.getElementsByClassName("bi bi-info-circle-fill");
	for(l=0;l<btns.length;l++){
	btns[l].onmouseover=function(){
		var tool = document.getElementById('inTT');
		var dir = this.firstChild;
		tool.innerHTML=dir.textContent;
	}
}
	var btns = document.getElementsByClassName("bi bi-info-circle-fill");
	for(l=0;l<btns.length;l++){
	btns[l].onmouseout =function(){
		var tool = document.getElementById('inTT');
		tool.innerHTML='';
	}
}

	//Create edit button
	var editbtn = document.createElement("i");
	editbtn.className="bi bi-pencil-fill";
	li.appendChild(editbtn);

	//Create delete button of enemy
	var closebtn = document.createElement("span");
	intext = document.createTextNode('\u00D7');
	closebtn.className='close';
	//Make close button an X, append to end of string
	closebtn.appendChild(intext);
	li.appendChild(closebtn);
	var close = document.getElementsByClassName('close');
	//Assign the close function to the corresponding Enemy
	for(i=0;i<close.length;i++){
		close[i].onclick = function() {
        var div = this.parentElement; //Get the Element Above X
        div.parentNode.removeChild(div); //Xref the Element above li element, then delete itself (Shoutout to Danny Devito)
       	 }
		}
       }
//Clear the input boxes for clean inputing
function clearBoxs(){
	document.getElementById('Enemy name').value ='';
	document.getElementById('HP').value='';
	document.getElementById('AC').value='';
	document.getElementById('Spd').value='';
	document.getElementById('Sum').value='';

}

const showToolTip = function(){
	var tt = document.getElementById('toolTips');
	tt.style.display='block';
}

const hideToolTip = function(){
	var tt = document.getElementById('toolTips');
	tt.style.display='none';
}

function setSummary(){

}
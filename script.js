//your code here!
let ol= document.getElementById('infi-list');
for(let i=1;i<=10;i++){
let li=document.createElement('li');
ol.appendChild(li);
	if(i==10){
		for (let j = 0; j < 2; j++) {
let li=document.createElement('li');
ol.appendChild(li);
			
li.innerText=`Item${i++}`;
		}
		
	}
	else{
		
	li.innerText=`Item${i}`;
	}
}

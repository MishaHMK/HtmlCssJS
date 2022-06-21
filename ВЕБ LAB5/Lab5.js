
function arrtab(){
var table = document.getElementById('table');
   var array = document.getElementById('text3').value.split(',');
   var tr;
   for(var i = 0; i<array.length;i++){
	   var c = "notprime";
	   var n = array[i];
	   if (n == 2 || n == 3) {
        c = "notprime";
	   }
		else {
		var b = n/2;	
        for (var j = 2; j <= b; ++j) {
            if (n % j == 0) {
                c = "isprime";
                break;
            }
        }
	}
    
   tr = document.createElement('tr');
   tr.innerHTML = `<td>${array[i]}</td><td>${c}</td>`
   table.appendChild(tr);
 }
}

document.getElementById('pres').addEventListener('click', arrtab);






function coment(){
var table = document.getElementById('table');
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var input = document.getElementById('comment').value;
   var com;
  
    
   com = document.createElement('tr');
   com.innerHTML = `<td>${name}</td>`
   table.appendChild(com);
 }
}

document.getElementById('Submit').addEventListener('click', coment);

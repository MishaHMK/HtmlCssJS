function printSelectedItem(){
				var e = document.getElementById('select');
				var elem = document.getElementById('option');
				var selectedItem = e.options[e.selectedIndex].value;
				var str = "Обрана опція: ";
	            var res = str.concat(selectedItem);
				elem.textContent = res;
			}

function сolorInput1(){
	if(event.ctrlKey){
	document.getElementById("about").style.backgroundColor = "red";
	}
}

function сolorInput2(){
	document.getElementById("about").style.backgroundColor = "white";
}


window.addEventListener("keydown", function(event) {
	elem = document.getElementById('put');
	var str = "Клавіша Сtrl затиснута";
    if (event.keyCode == 17) {
        elem.textContent = str;
    }
}, false);

window.addEventListener("keyup", function(event) {
	elem = document.getElementById('put');
	var str = "Клавіша Сtrl не затиснута";
    if (event.keyCode == 17) {
        elem.textContent = str;
    }else elem.textContent = str;
}, false);



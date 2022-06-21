function domain(){
    var input = document.getElementById('inp').value;
	var totest1 = new RegExp('^http:\/\/');
	var totest2 = new RegExp('^https:\/\/');
	var totest3 = new RegExp('\.com$');
		
	if(totest1.test(input) && totest3.test(input) || totest2.test(input)&& totest3.test(input)){
		alert("Правильний домен");
	}else
		alert("Неправильний домен");
}

function filecheck(){
    var input = document.getElementById('put').value;
	var totest1 = new RegExp('\.txt$');
	var totest2 = new RegExp('\.html$');
	var totest3 = new RegExp('\.php$');
	
	if(totest1.test(input) || totest2.test(input)|| totest3.test(input)){
		alert("Правильне розширення");
	}else
		alert("Неправильне розширення");
}

function checkh(){
    var input = document.getElementById('get').value;
	var totest1 = new RegExp('^http');
	var totest2 = new RegExp('^https');
	
	if(totest1.test(input) || totest2.test(input)){
		alert("Стрічка починається з http/https");
	}else
		alert("Стрічка не починається з http/https");
}

function checkspace(){
	var elem = document.getElementById('text');
	elem.textContent += document.getElementById('got').value.replace(/  */g,' ');
}

function comment(){
	var elem = document.getElementById('del');
	elem.textContent = document.getElementById('del').value.replace(/<!--(.*?)-->/g,'');
}

document.getElementById('dom').addEventListener('click', domain);
document.getElementById('file').addEventListener('click', filecheck);
document.getElementById('ht').addEventListener('click', checkh);
document.getElementById('spc').addEventListener('click', checkspace);
document.getElementById('com').addEventListener('click', comment);

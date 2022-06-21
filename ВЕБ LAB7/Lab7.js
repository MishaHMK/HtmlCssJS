function gethird(){
    var input = document.getElementById('inp').value;
    var words = input.split(" ");
	var str = "Третє слово: ";
	var res = str.concat(words[2]);
	alert(res);	
}

function yesterday(){
	var elem = document.getElementById('text');
	var date = new Date();
	var days = ["субота", "неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
	var weekday = date.getDay();
	elem.textContent = days[weekday];
}

function sqrt(){
	var elem = document.getElementById('num');
    var input = document.getElementById('get').value;
	var numb = Math.sqrt(input);
	numb = Math.round(numb);
	elem.textContent = numb;
}

document.getElementById('wor').addEventListener('click', gethird);
document.getElementById('day').addEventListener('click', yesterday);
document.getElementById('ht').addEventListener('click', sqrt);


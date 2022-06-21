	var win; 
	 document.getElementById('open').addEventListener('click', function(){
		win = window.open("https://lpnu.ua/", "НУЛП", "toolbar = no, location = no, width=500,height=600, left = 520, top = 100");
	});

	 document.getElementById('close').addEventListener('click', function(){
		win.close();
	});  
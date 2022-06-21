
function hide() {
var obj = document.getElementById("content"); 
obj.style.display = "none"; 
}

function show() {

           var obj = document.getElementById("content"); 
           if (obj.style.display != "block") { 
               obj.style.display = "block"; 
			   setTimeout(hide, 3000);
           }
} 

			
var fib = [1, 1];
var i = 0;

function start() {
	window.timerId = window.setInterval(fibonacci, 1000);
}

function stop() {
	window.clearInterval(window.timerId);
}

function fibonacci() {
  var elem = document.getElementById('fibonacci');
  if (fib[i] == null) {
    fib[i] = fib[i - 1] + fib[i - 2];
    elem.textContent += ' ' + fib[i];
  } else {
    elem.textContent += ' ' + fib[i];
  }
  i++;
}

var width;
var height;

function myFunction() {
  document.getElementById("myDiv").style.width = "100px";
  document.getElementById("myDiv").style.height = "100px";
  document.getElementById("myDiv").style.color = "blue";
  document.getElementById("myDiv").style.borderWidth = "thin";
  setTimeout(myFunction2, 1000);
}

function myFunction2() {
  document.getElementById("myDiv").style.height = "120px";
  document.getElementById("myDiv").style.width  = "120px";
  document.getElementById("myDiv").style.color = "red";
  document.getElementById("myDiv").style.borderWidth = "medium";
  document.getElementById("myDiv").style.boxShadow = "10px 20px 30px blue";
  setTimeout(myFunction3, 1000);
}

function myFunction3() {
  document.getElementById("myDiv").style.height = "140px";
  document.getElementById("myDiv").style.width  = "140px";
  document.getElementById("myDiv").style.color = "green";
  document.getElementById("myDiv").style.borderWidth = "thick";
  setTimeout(myFunction4, 1000);
}

function myFunction4() {
  document.getElementById("myDiv").style.height = "160px";
  document.getElementById("myDiv").style.width  = "160px";
  document.getElementById("myDiv").style.color = "orange";
  document.getElementById("myDiv").style.borderWidth = "thin";
  document.getElementById("myDiv").style.boxShadow = "5px 10px 15px red";
  setTimeout(myFunction5, 1000);
}

function myFunction5() {
  document.getElementById("myDiv").style.height = "180px";
  document.getElementById("myDiv").style.width  = "180px";
  document.getElementById("myDiv").style.color = "pink";
  document.getElementById("myDiv").style.borderWidth = "medium";
  setTimeout(myFunction6, 1000);
}

function myFunction6() {
  document.getElementById("myDiv").style.height = "200px";
  document.getElementById("myDiv").style.width  = "200px";
  document.getElementById("myDiv").style.color = "brown";
  document.getElementById("myDiv").style.borderWidth = "thick";
  document.getElementById("myDiv").style.boxShadow = "10px 15px 20px yellow";
  setTimeout(myFunction7, 1000);
}

function myFunction7() {
  document.getElementById("myDiv").style.height = "220px";
  document.getElementById("myDiv").style.width  = "220px";
  document.getElementById("myDiv").style.color = "grey";
  document.getElementById("myDiv").style.borderWidth = "thin";
  setTimeout(myFunction8, 1000);
}

function myFunction8() {
  document.getElementById("myDiv").style.height = "200px";
  document.getElementById("myDiv").style.width  = "200px";
  document.getElementById("myDiv").style.color = "brown";
  document.getElementById("myDiv").style.borderWidth = "thick";
  document.getElementById("myDiv").style.boxShadow = "5px 10px 15px green";
  setTimeout(myFunction9, 1000);
}

function myFunction9() {
  document.getElementById("myDiv").style.height = "180px";
  document.getElementById("myDiv").style.width  = "180px";
  document.getElementById("myDiv").style.color = "pink";
  document.getElementById("myDiv").style.borderWidth = "medium";
  setTimeout(myFunction10, 1000);
}

function myFunction10() {
  document.getElementById("myDiv").style.height = "160px";
  document.getElementById("myDiv").style.width  = "160px";
  document.getElementById("myDiv").style.color = "orange";
  document.getElementById("myDiv").style.boxShadow = "10px 15px 20px pink";
  document.getElementById("myDiv").style.borderWidth = "thin";
  setTimeout(myFunction11, 1000);
}

function myFunction11() {
  document.getElementById("myDiv").style.height = "140px";
  document.getElementById("myDiv").style.width  = "140px";
  document.getElementById("myDiv").style.color = "green";
  document.getElementById("myDiv").style.borderWidth = "thick";
  setTimeout(myFunction12, 1000);
}

function myFunction12() {
  document.getElementById("myDiv").style.height = "120px";
  document.getElementById("myDiv").style.width  = "120px";
  document.getElementById("myDiv").style.color = "red";
  document.getElementById("myDiv").style.boxShadow = "10px 20px 30px orange";
  document.getElementById("myDiv").style.borderWidth = "medium";
  setTimeout(myFunction13, 1000);
  
}

function myFunction13() {
  document.getElementById("myDiv").style.width = "100px";
  document.getElementById("myDiv").style.height = "100px";
  document.getElementById("myDiv").style.color = "blue";
  document.getElementById("myDiv").style.borderWidth = "thin";
  setTimeout(myFunction14, 1000);
}

function myFunction14() {
  document.getElementById("myDiv").style.width = "90px";
  document.getElementById("myDiv").style.height = "90px";
  document.getElementById("myDiv").style.color = "black";
  document.getElementById("myDiv").style.borderWidth = "solid";
  setTimeout(myFunction1, 1000);
}
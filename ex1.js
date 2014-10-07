
var cuad= document.getElementById("addLi");
cuad.onclick = function(){
	var list = document.getElementById("list");
	var s = document.createElement('li');
	var inp = document.getElementById("intro").value;
	var text= document.createTextNode(inp);
	s.appendChild(text);
	list.appendChild(s);
}

var cuad= document.getElementById("addLi");
cuad.onclick = addingElement;

function addingElement(){
	var list = document.getElementById("list");
	var s = document.createElement('li');
	var inp = document.getElementById("intro").value;
	var text= document.createTextNode(inp);
	s.appendChild(text);
	list.appendChild(s);
	s.onclick = myfunction;
};

function myfunction(event){
	var myClassList = event.target.classList;
	if(myClassList.contains('done')){
		myClassList.remove('done');
	}else{
		myClassList.add('done');
	};
};
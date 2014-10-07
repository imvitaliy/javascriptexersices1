
var cuad= document.getElementById("addLi");
cuad.onclick = addingElement;

function addingElement(){
	var list = document.getElementById("list");//llamamos ul con la clase list
	var s = document.createElement('li');//se crea una variable que si la usamos crea un li
	var inp = document.getElementById("intro").value;//crea un texto 
	var text= document.createTextNode(inp);//convierte ese texto en un TextNode
	s.appendChild(text);//añade TextNode a s("li")
	list.appendChild(s);//incluye dentro del ul un li
	s.onclick = myfunction; //s.onclick se refiere a my function si en algun caso pulsamos el boton ensima de  s("li")
};

function myfunction(event){
	var myClassList = event.target.classList;//classlist es un contenedor que se almacena en myfunction
	if(myClassList.contains('done')){ //con eso comprueba si en la variable hay class con nombre "done"
		myClassList.remove('done');	//si lo tiene,m lo quita
	}else{
		myClassList.add('done'); //si no, lo pone otra vez
	};
};

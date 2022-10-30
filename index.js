var div = document.createElement("div");
div.setAttribute("class","text-center");
div.style.border="3px solid black";
div.style.marginTop="50px";
div.style.marginLeft="300px";
div.style.marginRight="300px";
div.style.width="1000px";

var formgroup = document.createElement("div");
formgroup.setAttribute("class","text-center");

var title = document.createElement("h1");
title.innerHTML="Ice and Fire api";
title.style.marginTop="50px";

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter The Book Number");
input.style.width="70%";
input.style.marginLeft="40px";
input.style.marginTop="40px";
input.style.marginRight="80px";

var button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginTop="20px";
button.addEventListener("click",foo);

var Name = document.createElement("div");
Name.setAttribute("id","name");
Name.style.marginTop="30px";

var isbn = document.createElement("div");
isbn.setAttribute("id","isbn");

var pageno = document.createElement("div");
pageno.setAttribute("id","pageno");

var author = document.createElement("div");
author.setAttribute("id","author");

var publiser = document.createElement("div");
publiser.setAttribute("id","publiser");

var relise = document.createElement("div");
relise.setAttribute("id","relise");

var char = document.createElement("div");
char.setAttribute("id","char");


formgroup.append(title,input,button,Name,isbn,pageno,author,publiser,relise,char);
div.append(formgroup);
document.body.append(div);


async function foo(){
    let booknumber = document.getElementById("main").value;
    console.log(booknumber);
    let res1 = await fetch(`https://www.anapioficeandfire.com/api/books/${booknumber}`);
    let res2 = await res1.json();
    console.log(res2.name);
    Name.innerHTML=`Name of the Book: ${res2.name}`
    isbn.innerHTML=`isbn od book: ${res2.isbn}`
    pageno.innerHTML=`Number pages in book: ${res2.numberOfPages}`
    author.innerHTML=`author: ${res2.authors[0]}`
    publiser.innerHTML=`publisher: ${res2.publisher}`
    relise.innerHTML=`relise date: ${res2.released}`
    for (var i = 1;i<6;i++){
    let char1 = await fetch(`https://www.anapioficeandfire.com/api/characters/${i}`);
    let char2 = await char1.json();
    console.log(char2.name);
    char.innerHTML=`Characters: ${char2.name}`
}
   
}


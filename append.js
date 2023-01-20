// 1. where to add
const memberList = document.getElementById("member-list");
//2. what to be added
const li = document.createElement("li");
li.innerText = "Urmi";

//add the child
memberList.appendChild(li);

//where to add
const mainContainer = document.getElementById("main-container");

//2. what to do added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My food list";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Pastha';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Faluda';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Payesh';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1> My Dress Section</h1>
<ul>
     <li>Three Pies</li>
     <li>Top's</li>
     <li>Gaun</li>
</ul>
`
mainContainer.appendChild(sectionDress);

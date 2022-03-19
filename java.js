var Name, Username;
Name = prompt("Please Enter you Name");
Username = prompt("Please Enter you Username");

let name = document.getElementById('Name');
name.textContent = Name.toUpperCase();

var link = document.write("<a href=https://www.facebook.com/"+Username+">procced to my Facebook Profile</a>");

let note = document.getElementById('note');
note.textContent = link;



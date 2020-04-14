let grid = document.getElementById('grid');

let operators = [
  {
    "imgURL" : "texas.png",
    "name" : " Texas",
    "height" : " 161cm",
    "race" : " Lupo",
    "birthday" : " Jun. 1",
    "position" : " Melee",
    "tags" : " DP-Recovery"
  },
  {
    "imgURL" : "croissant.png",
    "name" : " Croissant",
    "height" : " 163cm",
    "race" : " Forte",
    "birthday" : " Sep. 29",
    "position" : " Melee",
    "tags" : " Defense, Shift"
  },
  {
    "imgURL" : "sora.png",
    "name" : " Sora",
    "height" : " 155cm",
    "race" : " Unknown",
    "birthday" : " Sep. 12",
    "position" : " Ranged",
    "tags" : " Support, Healing"
  },
  {
    "imgURL" : "exusiai.png",
    "name" : " Exusiai",
    "height" : " 159cm",
    "race" : " Sankta",
    "birthday" : " Dec. 24",
    "position" : " Ranged",
    "tags" : " DPS"
  }
]

for (var i = 0; i < operators.length; i++) {
  Operator(operators[i]);
}

console.log(operators[0]);

function Operator(incomingJSON){
  let container = document.createElement("DIV");
  container.style.backgroundColor = "white";
  container.classList.add('grid');

  let imgs = document.createElement("IMG");
  imgs.classList.add('images');
  imgs.src = incomingJSON["imgURL"];
  container.appendChild(imgs);

  let content = document.createElement("DIV");
  content.classList.add('content');
  container.appendChild(content);

  let name = document.createElement("P");
  name.classList.add('name');
  name.innerHTML = "Name:" + incomingJSON['name']
  content.appendChild(name);

  let height = document.createElement("P");
  height.classList.add('height');
  height.innerHTML = "Height:" + incomingJSON['height']
  content.appendChild(height);

  let race = document.createElement("P");
  race.classList.add('race');
  race.innerHTML = "Race:" + incomingJSON['race']
  content.appendChild(race);

  let birthday = document.createElement("P");
  birthday.classList.add('birthday');
  birthday.innerHTML = "Birthday:" + incomingJSON['birthday']
  content.appendChild(birthday);

  let position = document.createElement("P");
  position.classList.add('position');
  position.innerHTML = "Position:" + incomingJSON['position']
  content.appendChild(position);

  let tags = document.createElement("P");
  tags.classList.add('tags');
  tags.innerHTML = "Tag(s):" + incomingJSON['tags']
  content.appendChild(tags);

  grid.appendChild(container);
}

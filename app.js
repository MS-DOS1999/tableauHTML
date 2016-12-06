


const ready = function(){
  const people = [
    {firstname: "mkhhk", surname: "Okgui"},
    {firstname: "dsfzef", surname: "Orththrthr"},
    {firstname: "zefzefzf", surname: "Orthrthrthqdqzdzq"},
    {firstname: "hrthrthrth", surname: "Oyukyukyukyuk"},

  ];
const tbody = document.querySelector("body");

for(i=0; i<people.length; i++){
  let tr = document.createElement("tr");
  tr.innerHTML = "<td>" + people[i].firstname + "</td>"
  tbody.appendChild(tr);


}


document.addEventListener("DOMContentLoaded", ready);

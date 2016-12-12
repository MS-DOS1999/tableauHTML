


const ready = function() {
  // Loading
  const people = [
    { firstname: "Landry", surname: "O'Hara", age:"45", height:"145"},
    { firstname: "Sharon", surname: "O'Neil", age:"17", height:"175"},
    { firstname: "Emerson", surname: "O'Connell", age:"33", height:"165"},
    { firstname: "Roberto", surname: "O'Maley", age:"66", height:"181"}
  ];
  //
  const tbody = document.querySelector("tbody");

  let trContainer = document.createDocumentFragment();

  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td>
    <td>${people[i].age}</td><td>${people[i].height}</td>`;
      trContainer.appendChild(tr);
  }

  tbody.appendChild(trContainer);

}

document.addEventListener("DOMContentLoaded", ready);

let table = document.querySelector(".main-table");
let time = new Date().toLocaleTimeString();

for (let i = 0; i < 3; i++) {
  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  for (let j = 0; j < 3; j++) {
    let tableData = document.createElement("td");
    tableData.classList.add("tableData");
    tableRow.appendChild(tableData);
  }
}
let allTds = document.querySelectorAll("td");

let pTag = document.createElement("p");
pTag.classList.add("p-tag");
allTds[0].appendChild(pTag);
pTag.textContent = time;

let i = 1;
let br = 0;
setInterval(function () {
  time = new Date().toLocaleTimeString();
  br++;
  if (br === 2) {
    allTds[i].appendChild(pTag);
    i++;
    br = 0;
  }
  pTag.textContent = time;

  if (i === allTds.length) i = 0;
}, 1000);

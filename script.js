//Functions
function searchLenny(htmlList, searchValue){
  let lennyHtmlItems = Array.from(htmlList.children);
  
  lennyHtmlItems.forEach(lennyItem => {
    var found = lennyItem.textContent.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0;
    if (found) {
      lennyItem.hidden = false;
    } else {
      lennyItem.hidden = true; 
    }
  });
}

function buildList(lennyFaces){
  lennyFaces.forEach(lenny => {
    let listItem = document.createElement("li");
    listItem.lenny = lenny;
    listItem.innerHTML = `<strong>${lenny.title}</strong><span>${lenny.tags.join(", ")}</span>`;
    new Clipboard(listItem, {
      text: () => lenny.value
    });
    list.appendChild(listItem);
  });
}


//Executions
fetch("lenny-faces.json")
  .then(res => res.json())
  .then(json => buildList(json));

search.addEventListener("input",() => searchLenny(list, search.value));
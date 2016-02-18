//Functions
function searchLenny(htmlList, searchValue){
  let lennyHtmlItems = Array.from(htmlList.children);
  
  lennyHtmlItems.forEach(lennyItem => {
    let found = lennyItem.textContent.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0;
    if (found) {
      lennyItem.hidden = false;
    } else {
      lennyItem.hidden = true; 
    }
  });
}

function buildList(lennyFaces){
  lennyFaces.forEach(lenny => lenny.tags.sort());
  lennyFaces.sort((left,right) => left.tags.join(" ").localeCompare(right.tags.join(" ")));
  
  lennyFaces.forEach(lenny => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${lenny.title}</strong><span>${lenny.tags.join(', ')}</span>`;

    let clipboard =  new Clipboard(listItem, {text: () => lenny.value});
    clipboard.on('success', () => window.close());
    
    list.appendChild(listItem);
  });
}

//Executions
fetch('lenny-faces.json')
  .then(res => res.json())
  .then(json => buildList(json));

search.focus();
search.addEventListener("input",() => searchLenny(list, search.value));
search.onblur = () => search.placeholder = "";

form.onsubmit = e => {
    e.preventDefault();
    list.querySelector("li:not([hidden])").click();
}
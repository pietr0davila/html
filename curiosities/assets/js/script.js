const BUTTON = document.querySelector("button#button");

BUTTON.addEventListener("click", function(){
  fetch("https://pt.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exlimit=1&exintro&explaintext&format=json&origin=*&exchars=300")
    .then(response => response.json())
    .then(data => {
      const pages = data.query.pages;
      for (const pageId in pages) {
        if (pages.hasOwnProperty(pageId)) {
          const page = pages[pageId];
          const titleElement = document.querySelector("h2#curiosity_title");
          const textElement = document.querySelector("p#curiosity_text");
          if (titleElement && textElement) {
            titleElement.innerHTML = page.title;
            textElement.innerHTML = page.extract;
          }
        }
      }
    })
    .catch(error => console.error("Erro:", error));
});

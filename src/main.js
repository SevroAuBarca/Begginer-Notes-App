import marked from "marked";
import "./styles/style.css";
const new_note = document.getElementById("img");
const notes = document.getElementById("notas");

new_note.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.toggle("box");
  div.id = "box";
  div.innerHTML = `
  <div class="box_text" id="box_text"></div>
   <div class="edit_text" id="edit_text">
    <textarea class="text" id="text" cols="30" rows="10"></textarea>
  </div> 
  <div class="buttons">
    <p class="show_text" id="show_text"></p>
    <button class="save" id="save">
      <img src="./src/images/save.svg" alt="guardar" />
    </button>
    <button class="delete" id="delete">
      <img src="./src/images/trash.svg" alt="eliminar" />
    </button>
  </div>`;
  notes.appendChild(div);

  const box_text = document.getElementById("box_text");
  const show_text = document.getElementById("show_text");

  const texto = `# Notes App

  Esta es una aplicacion que genera una nota usando MarkDown convirtiendolo a HTML

  ## **Recursos utilizados**:

  - HTML
  - CSS
  - JavaScript
  - [Vite](https://vitejs.dev/ "ViteJS")
  - [Git](https://git-scm.com/ "Git")
  - [GitHub](https://github.com/SevroAuBarca "GitHub")
  - [MarkedJS](https://marked.js.org/ "Market")
  `;
  box_text.innerHTML = texto
    .split("\n")
    .map((txt) => {
      return marked(txt);
    })
    .join("");

  const date = new Date();
  const date_new = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  show_text.innerHTML = `Created at: ${date_new.day}, ${date_new.month}, ${date_new.year}`;
  editar(box_text, texto);
});

const editar = (box_text_show, texto) => {
  const area_text = document.getElementById("edit_text");
  const textarea = document.getElementById("text");
  console.log(texto);
  box_text.addEventListener("click", () => {
    console.log("entro");
    box_text_show.style.display = "none";
    area_text.style.display = "block";
    textarea.value = texto;
  });
};

import axios from "axios";
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
  <!-- <div class="edit_text">
    <textarea class="text" id="text" cols="30" rows="10"></textarea>
  </div> -->
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
  box_text.innerHTML = marked(
    "# Marked in browser\n\nRendered by **marked** hiohdooaibioabibaos\n\niboiadbiobdasiobdisobiobda\n\nsiobiaosbiosadboibdsaaaa\n\naaaaaaaaaaaaaaaaaaab\n\nibaoibaibaiobosbaobaobaoiebibifbirb\n\nibiahishiahodhebowbo\n\nebeoboiewbibewoieb."
  );

  const date = new Date();
  const date_new = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  show_text.innerHTML = `Created at: ${date_new.day}, ${date_new.month}, ${date_new.year}`;
});

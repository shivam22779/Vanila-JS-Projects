// When note is added by the user, add it to local storage.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (!notes) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push({ "title": addTitle.value, "text": addTxt.value });
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);
    showNotes();
})


// Function to show elements from localStorage
let showNotes = () => {
    let notes = localStorage.getItem('notes');
    if (!notes) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((note, index) => {
        html += `
        <div class="note-card card mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${note.title}</h5>
                    <p class="card-text">${note.text}</p>
                    <button id= ${index} onClick= "deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Note</button>
                </div>
            </div>`
    });

    let notesElem = document.getElementById('notes');
    if (notesObj.length == 0) {
        notesElem.innerHTML = `<p> No notes to display </p>`;
    }
    else {
        notesElem.innerHTML = html;
    }
}
showNotes();



// Function to delete a note.

const deleteNote = (id) => {
    console.log(`deleting note `);
    let notes = localStorage.getItem('notes');
    if (!notes) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();

}

// To search a note

let search = document.getElementById('searchTxt');
search.addEventListener('input', () => {
    // Input event fires when you type something.

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('note-card');
    Array.from(noteCards).forEach((element) => {
        let cardTxtPara = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardTxtHeading = element.getElementsByTagName("h5")[0].innerText.toLowerCase();


        if (cardTxtPara.includes(inputVal) || cardTxtHeading.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })


})






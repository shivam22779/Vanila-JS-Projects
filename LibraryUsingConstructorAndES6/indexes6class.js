console.log("object")

class Book{
    constructor(name,author, type){
        this.name = name;
        this.author = author;
        this.type = type;
}
    }

class Display{
    add(book) {
        let tbody = document.getElementById('tbody');
    
        let uiTemplateString = `<tr>
                                    <td>${book.name}</td>
                                    <td>${book.author}</td>
                                    <td>${book.type}</td>
                                </tr>`
    
        tbody.innerHTML += uiTemplateString;
    
    }
    clear() {
        let submitForm = document.getElementById('submitForm');
        submitForm.reset()
    }
    validate(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, message) {
        let alert = document.getElementById('alert');
        alert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
        setTimeout(() => {
            alert.innerHTML = ""
        }, 2000);
    }

}


//Add submit event listener

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type = document.querySelector('input[name="bookType"]:checked').value;

    // let bookEntery = { name, author, type }


    let book = new Book(name, author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book)
        display.clear();
        display.show('success', ' Success! Your form has been added successfully');
    }
    else {
        console.log('Validation failed');
        display.show('danger', ' Error! Please enter atleast 3 characters for book and author name each');
    }
}

let submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', libraryFormSubmit);






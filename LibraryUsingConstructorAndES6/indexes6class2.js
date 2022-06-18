// class Library {
//     constructor(bookList) {
//         this.bookList = bookList;
//         this.issuedBookList = [];
//     }

//     getBookList() {
//         this.bookList.forEach((elem) => {
//             console.log(elem)
//         })
//     }
//     issueBook(bookname, user) {
//         if (this.bookList.includes(bookname) && this.issuedBookList.indexOf({bookname,user}) === -1 ) {
//             this.issuedBookList.push({ bookname, user })

//             console.log("Book has been issued")
//         }
//         else{
//             console.log("Sorry the book is already isuued to the user");
//         }
//         // this.bookList.forEach((book)=>{
//         //     if (book.bookname === bookname){
//         //         console.log("Sorry the book  has already been issued");
//         //     }
//         //     else{
//         //         this.issuedBookList.push({bookname, user})
//         //         console.log("Book has been issued");
//         //     }
//         // })

//     }
//     getIssuedBookList() {
//         if (this.issuedBookList.length < 1) {
//             console.log("No issued books")
//         }
//         else{
//             this.issuedBookList.forEach((elem) => {
//                 console.log(elem);
//             })
//         }
//     }
        

        



//     returnBook(user) {
//         this.issuedBookList = this.issuedBookList.filter(book => { return book.user != user });
//         console.log("Book has been returned");
//     }
// }

// let myLib = new Library(['geeta', 'science', 'fiction']);
// // myLib.getBookList();
// // myLib.issueBook('geeta', 'shivam');
// myLib.issueBook('science', 'saurabh');
// myLib.issueBook('science', 'saurabh');
// // myLib.getIssuedBookList();
// // myLib.returnBook('Shivam')
// // myLib.getIssuedBookList();


// var a = 7
// function add(){
//     var a = 5;
//     console.log(a);
// }
// add();
// console.log(a)

// var a = 5;
// console.log(a);

// {
//     var a = 3;
//     console.log(a);
// }

// console.log(a);


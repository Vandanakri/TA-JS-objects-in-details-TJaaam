class Book {
  constructor(Title,Category,Author) {
    this.Title = Title;
    this.Category = Category;
    this.Author = Author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead(){
    this.isRead = true;
  }
}

class BookList {
  constructor() {
    this.books = []
    this.getCurrentBook = 0;
  }
  add(books = []){
    this.books = this.books.concat(books);
    return this.books;
  }
  getCurrentBook(){
    return this.books[this.currentIndexBook];
  }
  getNextBook(){
    this.currentIndexBook = this.currentIndexBook + 1;
    return this.books[this.currentIndexBook];
  }
  getPrevBook(){
    this.currentIndexBook = this.currentIndexBook - 1;
    return this.books[this.currentIndexBook];
  }
  changeCurrentBook() {
    this.currentIndexBook = index;
    return this.currentIndexBook;
  }
}


let book1 = new Book("To Kill a Mockingbird", "Non Fiction","Harper Lee");
let book2 = new Book("Harry Potter and the Philosopher's Stone","Fiction","J.K Rowling");
let book3 = new Book("The Lord of the Ring");
let book4 = new Book("The Great Gatsby","Fiction");
let book5 = new Book("Pride and Prejudice","non-fiction");

let library = new BookList();

library.add([book1,book2,book3,book4,book5]);
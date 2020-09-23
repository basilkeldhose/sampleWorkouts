
class Book {
   constructor(title,author,slno){
    this.title=title,
    this.author=author,
    this.slno=slno
   } 
}

class Ui {
    addBookToList(book){
        const list =document.getElementById('book-list')
        const row =document.createElement('tr')
        row.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.slno}</td>
        <td><a href="" class ="delete">X</a></td>`;
        list.appendChild(row);

    }

    showAlert(message,className){
        const div =document.createElement('div')
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form =document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remover();

        },3000);

    }
    deleteBook(target){

        if(target.className=== 'delete'){
            target.parentElement.parentElement.remove();

        }
    }

    clearFields(){

        document.getElementById('title').value ="";
        document.getElementById('author').value="";
        document.getElementById("slno").value="";
        }
}
document.getElementById("book-form").addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const slno = document.getElementById('slno').value;

    const book = new Book(title,author,slno);

    const ui = new Ui();

    if(title === '' || author === '' || slno === ''){
        ui.showAlert("please fill the all the fileds, error!")
    }
    else {
        ui.addBookToList(book);
        ui.showAlert("Book added sucessfully");
        ui.clearFields();
    }
        e.preventDefault();
})
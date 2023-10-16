import { useContext, useState } from 'react';
import BooksContext from '../context/books';


function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return 
    <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value= {title} onChange={handleChange}/>
            <button className= "button" >Create!</button>
        </form>
    </div>;
}

export default BookCreate;

// setTitle(event.target.value) --> Takes a look at what user just typed and use it 
// to update our title piece of state

// event.preventDefault(); --> prevents the page from reloading

// setTitle(''); --> empty outs the text input after updating
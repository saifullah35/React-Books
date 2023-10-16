import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // Dont do this
    // fetchBooks();

    const editBookByid = async (id, newTitle) => {
        await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        // Array of updated books
        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
    };

    return (
        <div className= "app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookByid} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    ); 
}

export default App;

// useEffect() is use to run code when a component is initially rendered and sometimes when it is rerendered
// Tricky things with useEffect
// 1. Understanding when our arrow function gets called
// 2. Understanding the arrow function's return value  

// ...response.data --> updated book object that came back from the api
// means take all the different properties out of that object, take all the different key value pairs, 
// and add them into this new object right here ...book
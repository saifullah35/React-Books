import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    const {fetchBooks} = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className= "app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
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
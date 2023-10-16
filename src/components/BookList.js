import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ book, onDelete, onEdit }) {
    const renderedBooks = book.map((book) => {
        return<BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
    });
    
    return <div className= "book-list">
        {renderedBooks}
        </div>;
}

export default BookList;
import { useState } from 'react';


function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value= {title} onChange={handleChange}/>
            <button>Create!</button>
        </form>
    </div>;
}

export default BookCreate;

// setTitle(event.target.value) --> Takes a look at what user just typed and use it 
// to update our title piece of state

// event.preventDefault(); --> prevents the page from reloading

// setTitle(''); --> empty outs the text input after updating
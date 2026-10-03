import React from 'react';
import BookCard from './bookCard';

const getBooks = async () => {
    const res = await fetch('http://localhost:5000/books', { next: { revalidate: 20 } });

    if(!res.ok) {
        throw new Error('Failed to fetch books');
    }
    return res.json();
}

const BooksPage = async () => {
    const books = await getBooks();
    return (
        <main>
            <h2>Books: {books.length}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </main>
    );
};

export default BooksPage;
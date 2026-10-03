import React from 'react';

const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books', { cache: 'no-store' });
    const books = await res.json();
    return books.map(book => ({bookID: book.id.toString()}));
}

const BookDetailPage = async ({ params }) => {
    const { bookID } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookID}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch book details');
    }
    const book = await res.json();

    return (
        <div>
            <h2>Book Details</h2>
            <p>Book ID: {bookID}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
        </div>
    );
};

export default BookDetailPage;
import React, { useEffect, useState } from 'react';
import { BookCard, BooksWrapper, CardTitle } from '../style/HomeStyles';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Something wrong!', error);
      });
  }, [])

  return (
    <div>
      <CardTitle>Books</CardTitle>
      <BooksWrapper>
        {
          books.map(book => (
            <BookCard key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </BookCard>
          ))
        }
      </BooksWrapper>
    </div>
  )
}

export default Home


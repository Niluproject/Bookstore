import React from 'react';
import { Link } from 'react-router-dom';
import bookimg from './images/book.jpg'
import '../App.css';

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <img
        src={bookimg}
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;

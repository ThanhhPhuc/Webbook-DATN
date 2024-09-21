import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/sach/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/sach/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    const data = await response.json();
    if (response.ok) {
      // handle success
    } else {
      alert(data);
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={book.description} onChange={(e) => setBook({ ...book, description: e.target.value })} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={book.category} onChange={(e) => setBook({ ...book, category: e.target.value })} required />
      </div>
      <div>
        <label>Publisher:</label>
        <input type="text" value={book.publisher} onChange={(e) => setBook({ ...book, publisher: e.target.value })} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={book.price} onChange={(e) => setBook({ ...book, price: e.target.value })} required />
      </div>
      <button type="submit">Edit Book</button>
    </form>
  );
}

export default EditBook;
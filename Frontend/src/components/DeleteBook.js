import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/api/sach/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      navigate('/');
    } else {
      alert('Failed to delete the book');
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
}

export default DeleteBook;

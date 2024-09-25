import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedPublisher, setSelectedPublisher] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageLink, setImageLink] = useState(''); // Thay đổi state để lưu trữ link ảnh

  useEffect(() => {
    axios.get('http://localhost:5000/api/tacgia')
      .then(response => setAuthors(response.data))
      .catch(error => console.error('Error fetching authors:', error));

    axios.get('http://localhost:5000/api/nxb')
      .then(response => setPublishers(response.data))
      .catch(error => console.error('Error fetching publishers:', error));

    axios.get('http://localhost:5000/api/theloai')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author: selectedAuthor,
      publisher: selectedPublisher,
      category: selectedCategory,
      description,
      price,
      image: imageLink // Gửi link ảnh thay vì file
    };

    console.log(bookData); // Kiểm tra dữ liệu trước khi gửi request

    axios.post('http://localhost:5000/api/sach', bookData)
      .then(response => {
        console.log('Book added:', response.data);
        setTitle('');
        setSelectedAuthor('');
        setSelectedPublisher('');
        setSelectedCategory('');
        setDescription('');
        setPrice('');
        setImageLink('');
        navigate('/');
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <div id="form-login">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            required
          >
            <option value="">Select Author</option>
            {authors.map(author => (
              <option key={author._id} value={author._id}>{author.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Publisher:</label>
          <select
            value={selectedPublisher}
            onChange={(e) => setSelectedPublisher(e.target.value)}
            required
          >
            <option value="">Select Publisher</option>
            {publishers.map(publisher => (
              <option key={publisher._id} value={publisher._id}>{publisher.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image Link:</label>
          <input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

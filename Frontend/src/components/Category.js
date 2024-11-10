import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Link } from 'react-router-dom';
const Category = () => {
    const { categoryId } = useParams(); // Lấy categoryId từ URL
    const [books, setBooks] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const fetchBooksByCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/sach/theloai/${categoryId}`);
            setBooks(response.data.books);
            setCategoryName(response.data.categoryName);
        } catch (error) {
            console.error('Error fetching books by category:', error.response ? error.response.data : error.message);
        }
    };
    

    useEffect(() => {
        fetchBooksByCategory();
    }, [categoryId]);

    return (
        <div>
            <Header />
            <div className="container">
                <h1>Sách thuộc thể loại: {categoryName}</h1>
                <div className="row">
                    {books.map((book) => (
                        <div key={book._id} className="col-md-4">
                            <div className="shop-card">
                                <figure className="card-banner img-holder">
                                    <img src={book.image} alt={book.title} className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3">
                                        <Link to={`/sach/${book._id}`}>{book.title}</Link>
                                    </h3>
                                    <p className="card-price">{book.price} VND</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;

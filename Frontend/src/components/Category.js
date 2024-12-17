import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Link } from 'react-router-dom';

const Category = () => {
    const { categoryId } = useParams(); // Lấy categoryId từ URL
    const [books, setBooks] = useState([]); // Dữ liệu sách
    const [categoryName, setCategoryName] = useState(''); // Tên thể loại
    const [error, setError] = useState(null); // Xử lý lỗi

    const fetchBooksByCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/sach/theloai/${categoryId}`);
            // console.log(response.data); // Xem cấu trúc response
            setBooks(response.data.books || []); // Nếu API trả về books là một thuộc tính
            setCategoryName(response.data.categoryName || ''); // Điều chỉnh theo dữ liệu trả về
        } catch (error) {
            setError(error.response ? error.response.data.message : error.message);
            console.log(error); // Xem chi tiết lỗi
        }
    };
    useEffect(() => {
        fetchBooksByCategory();
    }, [categoryId]); // Mỗi lần categoryId thay đổi thì gọi lại API

    return (
        <div>
            <Header />
            <br/>
            <div className="container">
                
                {error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : (
                    <div className="row">
                        {/* Kiểm tra nếu books là mảng và có ít nhất 1 phần tử */}
                        {Array.isArray(books) && books.length > 0 ? (
    books.map((book) => (
        <div key={book._id} className="col-md-4">
            <div className="category-card">
                <figure className="card-banner img-holder">
                    <img src={book.image} alt={book.title} className="category-img" />
                </figure>
                <div className="card-content">
                    <h3 className="h3">
                        <Link className="category-name" to={`/sach/${book._id}`}>{book.title}</Link>
                    </h3>
                    <p className="card-price">{book.price} VND</p>
                </div>
            </div>
        </div>
    ))
) : (
    <p>Không có sách trong thể loại này.</p>
)}

                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;

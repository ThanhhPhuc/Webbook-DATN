import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Hàm để lấy danh sách sản phẩm
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sach', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); 
  }, []); 

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/sach/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Sản phẩm đã được xóa thành công!');
      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Có lỗi xảy ra khi xóa sản phẩm!');
    }
  };

  const handleEdit = (productId) => {
    navigate(`/delete/:id/${productId}`);
  };

  const handleAddProduct = () => {
    navigate('/add'); 
  };

  return (
    <div>
      <h2>Quản lý sản phẩm</h2>
      <button className="btn btn-success mb-3" onClick={handleAddProduct}>Thêm sản phẩm</button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th colSpan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(product._id)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;

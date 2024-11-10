import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ productId, userId }) => {
  const [commentContent, setCommentContent] = useState('');
  const [rating, setRating] = useState(5); // Default rating
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleStarClick = (value) => {
    setRating(value); // Update rating when star is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentContent.trim()) {
      setError('Nội dung bình luận không được để trống.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/comment', {
        product_id: productId,
        user_id: userId,
        comment_content: commentContent,
        rating,
      });

      // Handle successful submission
      setSuccess('Bình luận đã được gửi thành công!');
      setCommentContent(''); // Clear the comment input
      setError(''); // Clear previous error message
    } catch (error) {
      setError('Lỗi khi gửi bình luận: ' + error.message);
      setSuccess(''); // Clear success message on error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-comment">
        <label>Bình luận</label>
        <textarea
          name="message"
          cols={40}
          rows={8}
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
      </div>
      
      <div className="comment-rating">
        <label>Đánh giá</label>
        <div className="stars">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={index}
                onClick={() => handleStarClick(starValue)}
                style={{
                  cursor: 'pointer',
                  color: starValue <= rating ? '#FFD700' : '#ccc', // Gold for selected stars, gray for unselected
                  fontSize: '24px', // Adjust size of the stars
                  marginRight: '5px', // Space between stars
                }}
              >
                ★
              </span>
            );
          })}
        </div>
      </div>

      <div className="comment-submit">
        <button type="submit" className="form-button">Gửi</button>
      </div>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </form>
  );
};

export default CommentForm;

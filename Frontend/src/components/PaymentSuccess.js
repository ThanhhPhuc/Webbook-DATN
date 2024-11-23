
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function PaymentSuccess() {
    const location = useLocation();
    // const { orderId } = location.state || {};

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Thanh toán thành công!</h1>
                <p style={styles.message}>
                    Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được xác nhận!
                </p>
                {/* <p style={styles.orderId}>
                    Mã đơn hàng: <strong>{orderId || 'Không xác định'}</strong>
                </p> */}
                <Link to="/" style={styles.homeButton}>
                    Tiếp tục mua sắm
                </Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
    },
    card: {
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '90%',
    },
    title: {
        fontSize: '24px',
        color: '#28a745',
        marginBottom: '10px',
    },
    message: {
        fontSize: '18px',
        color: '#333333',
        marginBottom: '20px',
    },
    orderId: {
        fontSize: '16px',
        color: '#555555',
        marginBottom: '30px',
    },
    homeButton: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#ffffff',
        backgroundColor: '#007bff',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    },
    homeButtonHover: {
        backgroundColor: '#0056b3',
    },
};

export default PaymentSuccess;

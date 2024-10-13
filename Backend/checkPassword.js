const bcrypt = require('bcrypt'); // Hoặc bcryptjs

const password = 'matkhaucuaphuc'; // Mật khẩu gốc

async function testHash() {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Mật khẩu đã mã hóa:', hashedPassword);
    
    // Kiểm tra so sánh
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Kết quả so sánh:', isMatch); // Phải là true
}

testHash();

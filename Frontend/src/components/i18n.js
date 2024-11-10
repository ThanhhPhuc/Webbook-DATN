import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    "header": {
                        "welcome": "Libworld",
                        "search_placeholder": "Search for books",
                        "search_button": "Search",
                        "profile": "My Account",
                        "orders": "My Orders",
                        "wishlist": "Wishlist",
                        "logout": "Logout",
                        "login": "Login",
                        "register": "Register",
                        "cart": "Cart",
                        "language": "English"
                    },
                    
                        "categories": {
                          "title": "Categories",
                          "subtitle": "Explore our categories"
                        },
                        "products": {
                          "title": "Products",
                          "tab": {
                            "product": "All Products",
                            "onsale": "On Sale",
                            "featured": "Featured"
                          },
                          "defaultBookTitle": "Book Title Not Available",
                          "priceNotAvailable": "Price Not Available",
                          "inventory": "In Stock:",
                          "products": "products",
                          "outOfStock": "Out of Stock",
                          "addToCart": "Add to Cart",
                          "viewMore": "View More",
                          "featuredTitle": "Featured Book Title",
                          "featuredAuthor": "Featured Author",
                          "featuredSubtitle": "Subtitle of Featured Book",
                          "featuredPrice": "Price",
                          "viewNow": "View Now"
                        },
                        "guarantees": {
                          "delivery": "Fast Delivery",
                          "deliveryDetail": "Get your order delivered fast.",
                          "refund": "Easy Refund",
                          "refundDetail": "Get a refund easily if not satisfied.",
                          "trustworthy": "Trustworthy",
                          "trustworthyDetail": "Reliable service you can trust."
                        },
                        "banner": {
                          "title": "Special Offers Just for You!",
                          "learnMore": "Learn More"
                        },
                        "brands": {
                          "brand1": "Brand 1",
                          "brand2": "Brand 2",
                          "brand3": "Brand 3",
                          "brand4": "Brand 4",
                          "brand5": "Brand 5"
                        },
                        "icons": {
                          "phone": "Phone Icon",
                          "messenger": "Messenger Icon",
                          "facebook": "Facebook Icon"
                        }
                      }
                
            },
            vi: {
                translation: {
                    "header": {
                        "welcome": "Libworld",
                        "search_placeholder": "Tìm kiếm sách",
                        "search_button": "Tìm kiếm",
                        "profile": "Tài khoản của tôi",
                        "orders": "Đơn hàng của tôi",
                        "wishlist": "Danh sách yêu thích",
                        "logout": "Đăng xuất",
                        "login": "Đăng nhập",
                        "register": "Đăng ký",
                        "cart": "Giỏ hàng",
                        "language": "Tiếng Việt"
                    },
                    "categories": {
                        "title": "Danh Mục",
                        "subtitle": "Khám Phá Các Danh Mục Của Chúng Tôi"
                      },
                      "products": {
                        "title": "Sản Phẩm",
                        "tab": {
                          "product": "Tất Cả Sản Phẩm",
                          "onsale": "Giảm Giá",
                          "featured": "Nổi Bật"
                        },
                        "defaultBookTitle": "Không Có Tên Sách",
                        "priceNotAvailable": "Giá Không Có",
                        "inventory": "Còn Hàng:",
                        "products": "sản phẩm",
                        "outOfStock": "Hết Hàng",
                        "addToCart": "Thêm Vào Giỏ",
                        "viewMore": "Xem Thêm",
                        "featuredTitle": "Tên Sách Nổi Bật",
                        "featuredAuthor": "Tác Giả Nổi Bật",
                        "featuredSubtitle": "Phụ Đề Của Sách Nổi Bật",
                        "featuredPrice": "Giá",
                        "viewNow": "Xem Ngay"
                      },
                      "guarantees": {
                        "delivery": "Giao Hàng Nhanh",
                        "deliveryDetail": "Nhận hàng nhanh chóng.",
                        "refund": "Hoàn Tiền Dễ Dàng",
                        "refundDetail": "Dễ dàng hoàn tiền nếu không hài lòng.",
                        "trustworthy": "Đáng Tin Cậy",
                        "trustworthyDetail": "Dịch vụ mà bạn có thể tin tưởng."
                      },
                      "banner": {
                        "title": "Ưu Đãi Đặc Biệt Dành Riêng Cho Bạn!",
                        "learnMore": "Tìm Hiểu Thêm"
                      },
                      "brands": {
                        "brand1": "Thương Hiệu 1",
                        "brand2": "Thương Hiệu 2",
                        "brand3": "Thương Hiệu 3",
                        "brand4": "Thương Hiệu 4",
                        "brand5": "Thương Hiệu 5"
                      },
                      "icons": {
                        "phone": "Biểu Tượng Điện Thoại",
                        "messenger": "Biểu Tượng Messenger",
                        "facebook": "Biểu Tượng Facebook"
                      }
                }
            }
        },
        lng: "vi",
        fallbackLng: "vi",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

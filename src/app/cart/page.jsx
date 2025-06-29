"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const initialCartItems = [
    {
        id: 1,
        name: 'Linen Armchair',
        description: 'Color: Natural',
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
        price: 12500000,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Handcrafted Scented Candle',
        description: 'Scent: Sandalwood',
        image: 'https://plus.unsplash.com/premium_photo-1661490822132-359dd22f8362?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 950000,
        quantity: 2,
    },
    {
        id: 3,
        name: 'Leather Tote Bag',
        description: 'Color: Cognac',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
        price: 8200000,
        quantity: 1,
    },
];

// Hàm định dạng tiền tệ
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace(/\s/g, '');
};

// Đặt tên file này là `page.jsx` và đặt trong thư mục `src/app/cart/`
export default function ShoppingCartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [subtotal, setSubtotal] = useState(0);

    // Tính lại tổng tiền mỗi khi giỏ hàng thay đổi
    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
    }, [cartItems]);

    // Xử lý thay đổi số lượng
    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return; // Số lượng không được nhỏ hơn 1
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Xử lý xóa sản phẩm
    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <>
            <main className="container mx-auto px-4 md:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif">Shopping Bag</h1>
                    <p className="mt-4 max-w-xl mx-auto text-gray-500">Review your selections before proceeding to checkout.</p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 border rounded-lg bg-white">
                        <i className="fas fa-shopping-bag text-4xl text-gray-300 mb-4"></i>
                        <p className="text-xl text-gray-600">Your shopping bag is empty.</p>
                        <Link href="/shop" className="btn btn-primary mt-6">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 bg-white rounded-lg border p-4 sm:p-6">
                            <div className="hidden md:grid grid-cols-5 gap-4 items-center font-semibold text-xs uppercase tracking-wider text-gray-500 border-b pb-3">
                                <div className="col-span-2">Product</div>
                                <div className="text-center">Price</div>
                                <div className="text-center">Quantity</div>
                                <div className="text-right">Total</div>
                            </div>

                            {cartItems.map(item => (
                                <div key={item.id} className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center py-6 border-b last:border-b-0">
                                    <div className="col-span-3 md:col-span-2 flex items-center">
                                        <div className="w-24 h-24 flex-shrink-0">
                                            <Image src={item.image} alt={`[Hình ảnh của ${item.name}]`} width={96} height={96} className="w-full h-full object-cover rounded"/>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-medium text-base">{item.name}</h3>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                            <button onClick={() => handleRemoveItem(item.id)} className="text-xs text-red-500 hover:underline mt-1">Remove</button>
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-center font-medium">{formatCurrency(item.price)}</div>
                                    <div className="flex items-center justify-center">
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="w-8 h-8 border rounded-l-md hover:bg-gray-100">-</button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            readOnly // Để người dùng chỉ có thể thay đổi bằng nút bấm
                                            className="w-10 h-8 text-center border-t border-b focus:outline-none"
                                        />
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="w-8 h-8 border rounded-r-md hover:bg-gray-100">+</button>
                                    </div>
                                    <div className="text-right font-semibold">{formatCurrency(item.price * item.quantity)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white border rounded-lg p-6 sticky top-28">
                                <h2 className="text-2xl font-serif border-b pb-4 mb-4">Order Summary</h2>
                                <div className="space-y-3 text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-medium">{formatCurrency(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="font-medium">Free</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Taxes</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                </div>
                                <div className="border-t mt-4 pt-4 flex justify-between items-center">
                                    <span className="font-bold text-lg">Total</span>
                                    <span className="font-bold text-xl">{formatCurrency(subtotal)}</span>
                                </div>
                                <button className="btn btn-primary w-full mt-6 text-center">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}

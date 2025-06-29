"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const allProducts = [
    { id: 1, name: 'Linen Armchair', category: 'Home & Decor', price: 12500000, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', date: '2025-06-01' },
    { id: 2, name: 'Ceramic Vase', category: 'Home & Decor', price: 1800000, image: 'https://plus.unsplash.com/premium_photo-1668620538983-c5993e4a443d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', date: '2025-05-28' },
    { id: 3, name: 'Aromatic Candle', category: 'Self-Care', price: 950000, image: 'https://plus.unsplash.com/premium_photo-1666632471938-53ce50c19dfd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', date: '2025-06-15' },
    { id: 4, name: 'Leather Tote Bag', category: 'Apparel', price: 8200000, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', date: '2025-06-10' },
    { id: 5, name: 'Organic Cotton Throw', category: 'Home & Decor', price: 3500000, image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600', date: '2025-05-20' },
    { id: 6, name: 'Minimalist Gold Hoops', category: 'Apparel', price: 2100000, image: 'https://images.unsplash.com/photo-1615219909202-895874253637?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600', date: '2025-06-05' },
    { id: 7, 'name': 'Soothing Bath Salts', category: 'Self-Care', price: 750000, image: 'https://images.unsplash.com/photo-1599351379374-3c66f916a69e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600', date: '2025-05-15' },
    { id: 8, name: 'Wooden Coffee Table', category: 'Home & Decor', price: 15800000, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600', date: '2025-06-18' },
];

const categories = ["All", "Home & Decor", "Apparel", "Self-Care"];

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace(/\s/g, '');
};

export default function ShopPage() {
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("newest");

    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => 
            filter === "All" || product.category === filter
        );
    }, [filter]);

    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];
        switch (sort) {
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'newest':
            default:
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }, [filteredProducts, sort]);

    return (
        <main className="container mx-auto px-4 md:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif">All Products</h1>
                <p className="mt-4 max-w-xl mx-auto text-gray-500">Discover our full range of curated goods, designed for a life of intention.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <aside className="md:col-span-1">
                    <div className="sticky top-28 bg-white p-6 rounded-lg border">
                        <h3 className="text-lg font-semibold mb-4 border-b pb-2">Filter by Category</h3>
                        <div className="space-y-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                                        filter === category 
                                            ? 'bg-accent text-white' 
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <h3 className="text-lg font-semibold mt-8 mb-4 border-b pb-2">Sort by</h3>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-1 focus:ring-accent focus:outline-none"
                        >
                            <option value="newest">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </aside>
                <div className="md:col-span-3">
                    {sortedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedProducts.map(product => (
                                <div key={product.id} className="product-card group text-left">
                                    <Link href={`/products/${product.id}`}>
                                        <div className="w-full bg-gray-100 overflow-hidden rounded-lg">
                                            <Image
                                                src={product.image}
                                                alt={`[Hình ảnh của ${product.name}]`}
                                                width={500}
                                                height={500}
                                                className="product-image w-full h-80 object-cover transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-medium text-gray-800">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium">{formatCurrency(product.price)}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-lg text-gray-600">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

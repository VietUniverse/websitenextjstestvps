"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const allProducts = [
    { id: 1, name: 'Linen Armchair', price: 12500000, category: 'Home & Decor', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800' },
    { id: 2, name: 'Ceramic Vase', price: 1800000, category: 'Home & Decor', image: 'https://plus.unsplash.com/premium_photo-1668620538983-c5993e4a443d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Aromatic Candle', price: 950000, category: 'Self-Care', image: 'https://plus.unsplash.com/premium_photo-1666632471938-53ce50c19dfd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Leather Tote Bag', price: 8200000, category: 'Apparel', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800' },
    { id: 5, name: 'Organic Cotton Throw', price: 3500000, category: 'Home & Decor', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600' },
    { id: 6, name: 'Minimalist Gold Hoops', price: 2100000, category: 'Apparel', image: 'https://images.unsplash.com/photo-1615219909202-895874253637?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600' },
    { id: 7, name: 'Soothing Bath Salts', price: 750000, category: 'Self-Care', image: 'https://images.unsplash.com/photo-1599351379374-3c66f916a69e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600' },
    { id: 8, name: 'Wooden Coffee Table', price: 15800000, category: 'Home & Decor', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600' },
];

const popularSearches = ['Sofa', 'Vase', 'Linen', 'Table', 'Candle'];

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace(/\s/g, '');
};

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = useMemo(() => {
        if (!searchTerm) return [];
        return allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <main className="container mx-auto px-4 md:px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <div className="relative mb-12">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for products..."
                        className="w-full text-2xl md:text-4xl font-serif py-4 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent"
                    />
                    <i className="fas fa-search absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl text-gray-400"></i>
                </div>

                {searchTerm ? (
                    <div>
                        <h2 className="text-xl font-semibold mb-6">
                            {searchResults.length > 0
                                ? `Showing ${searchResults.length} results for "${searchTerm}"`
                                : `No results for "${searchTerm}"`
                            }
                        </h2>
                        {searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {searchResults.map(product => (
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
                            <div className="text-center py-16">
                                <p className="text-gray-500">We couldn't find any products matching your search. Try a different keyword.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <h3 className="font-semibold text-gray-700">Popular Searches</h3>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {popularSearches.map(term => (
                                <button
                                    key={term}
                                    onClick={() => setSearchTerm(term)}
                                    className="px-4 py-2 bg-white border rounded-full text-sm hover:bg-gray-100 hover:border-gray-400 transition"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

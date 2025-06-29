"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const allProducts = [
    { id: 1, name: 'Linen Armchair', price: 12500000, category: 'decor', color: 'white', newest: 12, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Linen Armchair' },
    { id: 2, name: 'Artistic Ceramic Vase', price: 1800000, category: 'decor', color: 'white', newest: 11, image: 'https://images.unsplash.com/photo-1663888672547-360e763e4ac7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'Artistic Ceramic Vase' },
    { id: 3, name: 'Handcrafted Scented Candle', price: 950000, category: 'care', color: 'white', newest: 10, image: 'https://plus.unsplash.com/premium_photo-1661490822132-359dd22f8362?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'Handcrafted Scented Candle' },
    { id: 4, name: 'Leather Tote Bag', price: 8200000, category: 'accessories', color: 'brown', newest: 9, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Leather Tote Bag' },
    { id: 5, name: 'Marble Arch Floor Lamp', price: 9800000, category: 'decor', color: 'black', newest: 8, image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Marble Arch Floor Lamp' },
    { id: 6, name: 'Classic Canvas Sneaker', price: 4500000, category: 'apparel', color: 'white', newest: 7, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Classic Canvas Sneaker' },
    { id: 7, name: 'Modern Modular Sofa', price: 35000000, category: 'decor', color: 'grey', newest: 6, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Modern Modular Sofa' },
    { id: 8, name: 'Herbal Bath Salts', price: 750000, category: 'care', color: 'white', newest: 5, image: 'https://plus.unsplash.com/premium_photo-1679511318299-364df3b23987?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'Herbal Bath Salts' },
    { id: 9, name: 'Cashmere Wool Sweater', price: 6500000, category: 'apparel', color: 'grey', newest: 4, image: 'https://images.unsplash.com/photo-1741591940898-5a485f5f1ace?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'Cashmere Wool Sweater' },
    { id: 10, name: 'Handwoven Wool Rug', price: 15400000, category: 'decor', color: 'white', newest: 3, image: 'https://plus.unsplash.com/premium_photo-1725721362512-2f47d969e554?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imageAlt: 'Handwoven Wool Rug' },
    { id: 11, name: 'Metal Frame Sunglasses', price: 3900000, category: 'accessories', color: 'black', newest: 2, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Metal Frame Sunglasses' },
    { id: 12, name: 'Oak Wood Coffee Table', price: 7200000, category: 'decor', color: 'brown', newest: 1, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800', imageAlt: 'Oak Wood Coffee Table' },
];

const categories = [
    { key: 'all', name: 'All Products' },
    { key: 'decor', name: 'Home & Decor' },
    { key: 'apparel', name: 'Apparel' },
    { key: 'care', name: 'Self-Care' },
    { key: 'accessories', name: 'Accessories' },
];

const priceRanges = [
    { key: 'all', name: 'All' },
    { key: '0-1000000', name: 'Under 1,000,000₫' },
    { key: '1000000-5000000', name: '1,000,000₫ - 5,000,000₫' },
    { key: '5000000-10000000', name: '5,000,000₫ - 10,000,000₫' },
    { key: '10000000', name: 'Over 10,000,000₫' },
];

const colors = ['all', 'black', 'white', 'grey', 'brown'];

export default function ShopPage() {
    const [filters, setFilters] = useState({
        searchTerm: '',
        category: 'all',
        priceRange: 'all',
        color: 'all',
        sortBy: 'newest'
    });

    const filteredAndSortedProducts = useMemo(() => {
        let products = allProducts;

        if (filters.searchTerm) {
            products = products.filter(p => p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()));
        }
        if (filters.category !== 'all') {
            products = products.filter(p => p.category === filters.category);
        }
        if (filters.priceRange !== 'all') {
            const [min, max] = filters.priceRange.split('-').map(Number);
            products = products.filter(p => {
                if (max) return p.price >= min && p.price <= max;
                return p.price >= min;
            });
        }
        if (filters.color !== 'all') {
            products = products.filter(p => p.color === filters.color);
        }

        switch (filters.sortBy) {
            case 'price-asc':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
            default:
                products.sort((a, b) => b.newest - a.newest);
                break;
        }
        return products;
    }, [filters]);

    const handleFilterChange = (type, value) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    return (
        <main className="container mx-auto px-4 md:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl">All Products</h1>
                <p className="mt-4 max-w-xl mx-auto text-gray-500">Discover pieces designed to last, crafted with care, and chosen for you.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <aside className="lg:col-span-1">
                    <div className="sticky top-28 space-y-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full py-2 pl-4 pr-10 border border-gray-300 focus:outline-none focus:border-accent rounded-md"
                                onChange={e => handleFilterChange('searchTerm', e.target.value)}
                            />
                            <i className="fas fa-search absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"></i>
                        </div>

                        <div className="py-4 border-t">
                            <h3 className="font-semibold mb-3">Category</h3>
                            <div className="space-y-2 text-sm">
                                {categories.map(cat => (
                                    <button key={cat.key} onClick={() => handleFilterChange('category', cat.key)} className={`block w-full text-left transition-colors ${filters.category === cat.key ? 'text-accent font-bold' : 'text-gray-600 hover:text-accent'}`}>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="py-4 border-t">
                            <h3 className="font-semibold mb-3">Price Range</h3>
                            <div className="space-y-2 text-sm">
                                {priceRanges.map(range => (
                                    <label key={range.key} className="flex items-center cursor-pointer">
                                        <input type="radio" name="price" value={range.key} checked={filters.priceRange === range.key} onChange={() => handleFilterChange('priceRange', range.key)} className="form-radio mr-2" />
                                        {range.name}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="py-4 border-t">
                            <h3 className="font-semibold mb-3">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                <span onClick={() => handleFilterChange('color', 'all')} className={`px-2 py-1 text-xs border cursor-pointer rounded-full ${filters.color === 'all' ? 'active bg-accent text-white' : ''}`}>All</span>
                                <span onClick={() => handleFilterChange('color', 'black')} className={`color-swatch w-6 h-6 rounded-full bg-black border cursor-pointer ${filters.color === 'black' ? 'active' : ''}`}></span>
                                <span onClick={() => handleFilterChange('color', 'white')} className={`color-swatch w-6 h-6 rounded-full bg-white border cursor-pointer ${filters.color === 'white' ? 'active' : ''}`}></span>
                                <span onClick={() => handleFilterChange('color', 'grey')} className={`color-swatch w-6 h-6 rounded-full bg-gray-400 border cursor-pointer ${filters.color === 'grey' ? 'active' : ''}`}></span>
                                <span onClick={() => handleFilterChange('color', 'brown')} className={`color-swatch w-6 h-6 rounded-full bg-yellow-900 border cursor-pointer ${filters.color === 'brown' ? 'active' : ''}`}></span>
                            </div>
                        </div>
                    </div>
                </aside>
                <section className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-gray-500">Showing {filteredAndSortedProducts.length} of {allProducts.length} results</p>
                        <select
                            className="border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:border-accent rounded-md"
                            value={filters.sortBy}
                            onChange={e => handleFilterChange('sortBy', e.target.value)}
                        >
                            <option value="newest">Sort by Newest</option>
                            <option value="price-asc">Sort by Price: Low to High</option>
                            <option value="price-desc">Sort by Price: High to Low</option>
                        </select>
                    </div>
                    
                    {filteredAndSortedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredAndSortedProducts.map(product => (
                                <div key={product.id} className="product-card group text-left">
                                    <Link href={`/products/${product.id}`}>
                                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg">
                                            <Image
                                                src={product.image}
                                                alt={product.imageAlt}
                                                width={500}
                                                height={500}
                                                className="product-image w-full h-80 object-cover transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-medium text-gray-800">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium">{product.price.toLocaleString('vi-VN')}₫</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 border rounded-lg">
                            <p className="text-xl font-serif">No products found</p>
                            <p className="text-gray-500 mt-2">Try adjusting your filters to find what you're looking for.</p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

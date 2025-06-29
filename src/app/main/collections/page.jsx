import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This file should be named `page.jsx` and placed in `src/app/collections/`
export default function CollectionsPage() {
    // This component only renders the <main> content.
    // The Header and Footer are automatically added by the root layout.
    return (
        <main>
            <section className="text-center py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Explore</p>
                    <h1 className="text-4xl md:text-6xl">Our Curated Collections</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-gray-600">Each collection is a narrative, a carefully composed story told through objects of beauty and purpose.</p>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Collection 1: Living Room */}
                    <Link href="/collections/living-room" className="md:col-span-2 relative block group overflow-hidden h-[60vh] rounded-lg">
                        <Image 
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400" 
                            alt="The Living Room Edit collection" 
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-colors duration-300 flex flex-col items-center justify-center p-8 text-white text-center">
                            <h2 className="text-4xl md:text-5xl font-serif">The Living Room Edit</h2>
                            <p className="mt-4 max-w-md">Timeless furniture and decor to create a sanctuary of comfort and style.</p>
                            <span className="mt-6 border-b-2 border-white pb-1 font-semibold tracking-wider">Explore Now</span>
                        </div>
                    </Link>

                    {/* Collection 2: Apparel */}
                    <Link href="/collections/apparel" className="relative block group overflow-hidden h-[60vh] rounded-lg">
                        <Image 
                            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600" 
                            alt="Timeless Apparel collection" 
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-colors duration-300 flex flex-col items-center justify-center p-8 text-white text-center">
                            <h2 className="text-4xl font-serif">Timeless Apparel</h2>
                            <p className="mt-4">Staple pieces defined by quality fabrics and impeccable fit.</p>
                             <span className="mt-6 border-b-2 border-white pb-1 font-semibold tracking-wider">Discover Style</span>
                        </div>
                    </Link>

                    {/* Collection 3: Ceramics */}
                    <Link href="/collections/ceramics" className="relative block group overflow-hidden h-[60vh] rounded-lg">
                        <Image 
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600" 
                            alt="Earthen Ceramics collection"
                            fill 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-colors duration-300 flex flex-col items-center justify-center p-8 text-white text-center">
                            <h2 className="text-4xl font-serif">Earthen Ceramics</h2>
                            <p className="mt-4">Handcrafted pottery that brings organic texture to your table.</p>
                             <span className="mt-6 border-b-2 border-white pb-1 font-semibold tracking-wider">Shop Now</span>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
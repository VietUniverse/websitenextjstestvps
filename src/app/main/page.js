import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AuraHomepage() {
  return (
    <>
      <main>
        <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">The Art of<br />Modern Living</h1>
              <p className="mt-6 max-w-md mx-auto md:mx-0 text-gray-600">Discover curated collections that bring beauty, quality, and intention to your everyday life.</p>
              <div className="mt-10">
                <Link href="/collections" className="btn btn-primary">Explore The Collections</Link>
              </div>
            </div>
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
              <Image 
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400" 
                alt="[Hình ảnh của thiết kế nội thất hiện đại]" 
                width={1200}
                height={800}
                priority={true}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl">Shop by Category</h2>
              <p className="mt-3 text-gray-500">Find what you love.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/shop" className="relative block group overflow-hidden rounded-lg">
                <Image src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600" alt="[Hình ảnh của trang trí nhà cửa]" width={800} height={1000} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="font-serif text-white text-3xl">Home & Decor</h3>
                </div>
              </Link>
              <Link href="/shop" className="relative block group overflow-hidden rounded-lg">
                <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600" alt="[Hình ảnh của thời trang]" width={800} height={1000} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="font-serif text-white text-3xl">Apparel</h3>
                </div>
              </Link>
              <Link href="/shop" className="relative block group overflow-hidden rounded-lg">
                <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=499&auto=format&fit=crop" alt="[Hình ảnh của sản phẩm chăm sóc cá nhân]" width={499} height={749} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="font-serif text-white text-3xl">Self-Care</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl">New Arrivals</h2>
                <p className="mt-3 text-gray-500">Fresh from our workshop to your home.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="product-card group text-left">
                    <Link href="/products/linen-armchair">
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg">
                            <Image src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="[Hình ảnh của ghế bành vải Linen]" width={800} height={800} className="product-image w-full h-80 object-cover transition-transform duration-500" />
                        </div>
                        <div className="mt-4">
                            <h3 className="font-medium text-gray-800">Linen Armchair</h3>
                            <p className="mt-1 text-lg font-medium">12.500.000₫</p>
                        </div>
                    </Link>
                </div>
                 <div className="product-card group text-left">
                    <Link href="/products/ceramic-vase"><div className="w-full bg-gray-200 overflow-hidden rounded-lg"><Image src="https://plus.unsplash.com/premium_photo-1668620538983-c5993e4a443d?q=80&w=387&auto=format&fit=crop" alt="[Hình ảnh của bình gốm]" width={387} height={580} className="product-image w-full h-80 object-cover transition-transform duration-500" /></div><div className="mt-4"><h3 className="font-medium text-gray-800">Ceramic Vase</h3><p className="mt-1 text-lg font-medium">1.800.000₫</p></div></Link>
                </div>
                <div className="product-card group text-left">
                    <Link href="/products/aromatic-candle"><div className="w-full bg-gray-200 overflow-hidden rounded-lg"><Image src="https://plus.unsplash.com/premium_photo-1666632471938-53ce50c19dfd?q=80&w=387&auto=format&fit=crop" alt="[Hình ảnh của nến thơm]" width={387} height={580} className="product-image w-full h-80 object-cover transition-transform duration-500" /></div><div className="mt-4"><h3 className="font-medium text-gray-800">Aromatic Candle</h3><p className="mt-1 text-lg font-medium">950.000₫</p></div></Link>
                </div>
                <div className="product-card group text-left">
                    <Link href="/products/leather-tote-bag"><div className="w-full bg-gray-200 overflow-hidden rounded-lg"><Image src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="[Hình ảnh của túi xách da]" width={800} height={800} className="product-image w-full h-80 object-cover transition-transform duration-500" /></div><div className="mt-4"><h3 className="font-medium text-gray-800">Leather Tote Bag</h3><p className="mt-1 text-lg font-medium">8.200.000₫</p></div></Link>
                </div>
            </div>
            <div className="text-center mt-12">
                <Link href="/shop" className="btn btn-secondary">View All Products</Link>
            </div>
        </section>

        <section className="bg-white py-16">
            <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
                <h2 className="text-3xl md:text-4xl">Join The Inner Circle</h2>
                <p className="mt-4 text-gray-600">Be the first to know about new arrivals, exclusive offers, and behind-the-scenes stories. Sign up for the AURA newsletter.</p>
                <form className="mt-8 flex flex-col sm:flex-row max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email address" className="flex-grow w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-l-md" />
                    <button type="submit" className="btn btn-primary mt-4 sm:mt-0 sm:-ml-px rounded-r-md">Subscribe</button>
                </form>
            </div>
        </section>
      </main>
    </>
  );
}

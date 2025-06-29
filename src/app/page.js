// File: src/app/page.js
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header'; // Dùng @ để import từ thư mục src
import Footer from '@/components/Footer';

// Trang chủ là một Server Component theo mặc định, rất tốt cho SEO và tốc độ tải trang.
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">The Art of<br/>Modern Living</h1>
                    <p className="mt-6 max-w-md mx-auto md:mx-0 text-gray-600">Discover curated collections that bring beauty, quality, and intention to your everyday life.</p>
                    <div className="mt-10">
                        <Link href="/collections" className="btn btn-primary">Explore The Collections</Link>
                    </div>
                </div>
                <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
                    {/* Sử dụng component Image của Next.js để tối ưu hình ảnh */}
                    <Image
                      src="[https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400](https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400)"
                      alt="[Hình ảnh thiết kế nội thất hiện đại]"
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </section>

        {/* Category Section */}
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl">Shop by Category</h2>
                    <p className="mt-3 text-gray-500">Find what you love.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category Item */}
                    <Link href="/shop" className="relative block group overflow-hidden rounded-lg">
                        <Image src="[https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600](https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600)" alt="[Hình ảnh trang trí nhà cửa]" width={800} height={1200} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <h3 className="font-serif text-white text-3xl">Home & Decor</h3>
                        </div>
                    </Link>
                    {/* Category Item */}
                    <Link href="/shop" className="relative block group overflow-hidden rounded-lg">
                        <Image src="[https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600](https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600)" alt="[Hình ảnh thời trang]" width={800} height={1200} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <h3 className="font-serif text-white text-3xl">Apparel</h3>
                        </div>
                    </Link>
                    {/* Category Item */}
                    <Link href="/shop" className="relative block group overflow-hidden rounded-lg">
                        <Image src="[https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=499&auto=format&fit=crop](https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=499&auto=format&fit=crop)" alt="[Hình ảnh sản phẩm chăm sóc cá nhân]" width={800} height={1200} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"/>
                         <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <h3 className="font-serif text-white text-3xl">Self-Care</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        {/* New Arrivals Section */}
        {/* (Thêm code cho phần New Arrivals và Newsletter tương tự như các section trên) */}

      </main>
      <Footer />
    </>
  );
}

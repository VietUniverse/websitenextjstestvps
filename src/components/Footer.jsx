import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-secondary">
            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 col-span-2">
                        <Link href="/" className="font-serif text-2xl tracking-widest">AURA</Link>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">Curated goods for a life lived with intention. Quality, craftsmanship, and timeless design.</p>
                    </div>
                    <div>
                        <h4 className="font-bold tracking-wider uppercase text-sm mb-4">Shop</h4>
                        <nav className="space-y-3 text-sm">
                            <Link href="#" className="block hover:text-white">New Arrivals</Link>
                            <Link href="#" className="block hover:text-white">Home & Decor</Link>
                            <Link href="#" className="block hover:text-white">Apparel</Link>
                            <Link href="#" className="block hover:text-white">Self-Care</Link>
                        </nav>
                    </div>
                     <div>
                        <h4 className="font-bold tracking-wider uppercase text-sm mb-4">About</h4>
                        <nav className="space-y-3 text-sm">
                            <Link href="#" className="block hover:text-white">Our Story</Link>
                            <Link href="#" className="block hover:text-white">Journal</Link>
                            <Link href="#" className="block hover:text-white">Contact Us</Link>
                            <Link href="#" className="block hover:text-white">FAQs</Link>
                        </nav>
                    </div>
                     <div>
                        <h4 className="font-bold tracking-wider uppercase text-sm mb-4">Follow</h4>
                        <nav className="space-y-3 text-sm">
                            <Link href="#" className="block hover:text-white">Instagram</Link>
                            <Link href="#" className="block hover:text-white">Facebook</Link>
                        </nav>
                    </div>
                </div>
                 <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} AURA. All Rights Reserved. A project by Le Duy Viet.</p>
                     <p><span>Bài dự thi BrandID 2025 của Lê Duy Việt</span> </p>
                     <p><span>Address: Đoàn Thị Điểm, Phường Xuân Hương, TP. Đà Lạt, Lâm Đồng - Email: vietld.vn@gmail.com</span> </p>
                </div>
            </div>
        </footer>
    );
}
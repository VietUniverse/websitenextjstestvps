"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dữ liệu cho các bộ sưu tập
const collectionsData = [
    {
        slug: 'the-artisan-table',
        title: 'Bàn Ăn Của Người Nghệ Nhân',
        description: 'Nâng tầm không gian ẩm thực của bạn với bộ sưu tập đồ gốm và dụng cụ ăn uống được chế tác thủ công.',
        imageUrl: 'https://images.unsplash.com/photo-1618762044398-ec1917173bb3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        align: 'left',
    },
    {
        slug: 'serene-sanctuary',
        title: 'Không Gian Tĩnh Lặng',
        description: 'Biến ngôi nhà của bạn thành một nơi trú ẩn yên bình với các loại vải mềm mại, hương thơm nhẹ nhàng và đồ trang trí tối giản.',
        imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d6085286?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        align: 'right',
    },
    {
        slug: 'the-nomad-closet',
        title: 'Tủ Đồ Du Mục',
        description: 'Một tủ đồ được tuyển chọn cho những tâm hồn tự do, nổi bật với các loại vải tự nhiên và kiểu dáng linh hoạt.',
        imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        align: 'left',
    },
];

// Component Collection Card với hiệu ứng Parallax
function CollectionCard({ collection, index }) {
    const cardRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                if (isVisible) {
                    const movement = (rect.top / window.innerHeight) * 50;
                    setOffsetY(movement);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLeftAligned = collection.align === 'left';

    return (
        <div ref={cardRef} className="relative w-full h-[80vh] my-12 group overflow-hidden">
            <div className={`absolute top-0 w-full md:w-3/5 h-full transition-all duration-500 ease-out ${isLeftAligned ? 'left-0' : 'right-0'}`}>
                <Image
                    src={collection.imageUrl}
                    alt={`[Hình ảnh của ${collection.title}]`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                    style={{ transform: `translateY(${offsetY}px)` }}
                />
            </div>
            <div
                className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full md:w-3/5 p-8 md:p-16 ${
                    isLeftAligned ? 'md:right-0' : 'md:left-0'
                }`}
            >
                <div className="text-center md:text-left max-w-md space-y-6">
                    <p className="text-sm uppercase tracking-widest text-gray-500">Bộ sưu tập 0{index + 1}</p>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary">{collection.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{collection.description}</p>
                    <Link href={`/collections/${collection.slug}`} className="inline-block relative group/link font-semibold text-primary">
                        <span>Khám Phá Ngay</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Đặt tên file này là page.js và đặt trong thư mục `src/app/collections/`
export default function DeluxeCollectionsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="text-center py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">Những Câu Chuyện<br />Được Kể Bằng Vật Thể</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
                        Mỗi bộ sưu tập là một thế giới riêng, được tuyển chọn cẩn thận để truyền cảm hứng và mang lại vẻ đẹp cho cuộc sống hàng ngày của bạn.
                    </p>
                </div>
            </section>

            {/* Collections Section */}
            <div className="bg-secondary py-16">
                <div className="container mx-auto px-4 md:px-8">
                    {collectionsData.map((collection, index) => (
                        <CollectionCard key={collection.slug} collection={collection} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}

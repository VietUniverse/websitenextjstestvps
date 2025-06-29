import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function JournalPage() {
    return (
        <main className="container mx-auto px-4 md:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl">The Journal</h1>
                <p className="mt-4 max-w-xl mx-auto text-gray-500">Inspiration for intentional living. Stories on design, craftsmanship, and the art of home.</p>
            </div>

            {/* Featured Article */}
            <section className="mb-16">
                <Link href="/journal/a-conversation-with-ana-flores" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center group">
                    <div className="w-full h-96 overflow-hidden rounded-lg">
                        <Image
                            src="[https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400](https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400)"
                            alt="A portrait of ceramicist Ana Flores in her studio."
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Interviews</p>
                        <h2 className="text-3xl md:text-4xl leading-tight group-hover:text-accent transition-colors">A Conversation with Ceramicist Ana Flores on Texture and Form</h2>
                        <p className="mt-4 text-gray-600">We sat down with the artist behind our latest ceramic collection to talk about her process, inspiration, and the beauty of imperfection.</p>
                        <span className="inline-block mt-6 font-semibold border-b-2 border-accent pb-1">Read The Story</span>
                    </div>
                </Link>
            </section>

            {/* Articles Grid */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Article Card 1 */}
                    <Link href="/journal/mid-century-modern-design" className="article-card group block">
                        <div className="w-full h-72 overflow-hidden bg-gray-200 rounded-lg">
                            <Image
                                src="[https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600](https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600)"
                                alt="A living room decorated in mid-century modern style."
                                width={800}
                                height={800}
                                className="article-image w-full h-full object-cover transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Design</p>
                            <h3 className="text-xl font-serif leading-snug group-hover:text-accent transition-colors">The Enduring Appeal of Mid-Century Modern Design</h3>
                            <p className="text-sm text-gray-500 mt-2">18 June, 2025</p>
                        </div>
                    </Link>

                    {/* Article Card 2 */}
                    <Link href="/journal/create-a-restful-sanctuary" className="article-card group block">
                        <div className="w-full h-72 overflow-hidden bg-gray-200 rounded-lg">
                            <Image
                                src="[https://plus.unsplash.com/premium_photo-1683649964414-74cb4e12bb20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D](https://plus.unsplash.com/premium_photo-1683649964414-74cb4e12bb20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                                alt="A calm and restful bedroom with soft lighting."
                                width={800}
                                height={800}
                                className="article-image w-full h-full object-cover transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Inspiration</p>
                            <h3 className="text-xl font-serif leading-snug group-hover:text-accent transition-colors">How to Create a Restful Sanctuary in Your Bedroom</h3>
                            <p className="text-sm text-gray-500 mt-2">12 June, 2025</p>
                        </div>
                    </Link>

                    {/* Article Card 3 */}
                    <Link href="/journal/hand-loomed-linen-throws" className="article-card group block">
                        <div className="w-full h-72 overflow-hidden bg-gray-200 rounded-lg">
                            <Image
                                src="[https://plus.unsplash.com/premium_photo-1661506966203-e9e1e8af0372?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D](https://plus.unsplash.com/premium_photo-1661506966203-e9e1e8af0372?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                                alt="Close up shot of hand-loomed linen fabric."
                                width={800}
                                height={800}
                                className="article-image w-full h-full object-cover transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Craftsmanship</p>
                            <h3 className="text-xl font-serif leading-snug group-hover:text-accent transition-colors">The Story Behind Our Hand-Loomed Linen Throws</h3>
                            <p className="text-sm text-gray-500 mt-2">05 June, 2025</p>
                        </div>
                    </Link>
                </div>
                
                <div className="text-center mt-16">
                    <button type="button" className="btn btn-secondary">Load More Articles</button>
                </div>
            </section>
        </main>
    );
}
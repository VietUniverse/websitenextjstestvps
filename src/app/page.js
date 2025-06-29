document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    body.className = 'antialiased';

    // --- Dynamic Styles ---
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --font-serif: 'Playfair Display', serif;
            --font-sans: 'Inter', sans-serif;
            --color-primary: #1A1A1A;
            --color-secondary: #F8F7F4;
            --color-accent: #004D40;
        }
        body {
            font-family: var(--font-sans);
            background-color: var(--color-secondary);
            color: var(--color-primary);
        }
        h1, h2, h3, h4, .font-serif {
            font-family: var(--font-serif);
            font-weight: 600;
        }
        .bg-primary { background-color: var(--color-primary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .bg-accent { background-color: var(--color-accent); }
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
        .border-accent { border-color: var(--color-accent); }

        /* Button and link effects */
        .nav-link {
            position: relative;
            transition: color 0.3s ease;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--color-primary);
            transition: width 0.3s ease;
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .btn {
            display: inline-block;
            padding: 0.75rem 2rem;
            border: 1px solid var(--color-primary);
            text-transform: uppercase;
            font-size: 0.875rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            transition: all 0.3s ease;
        }
        .btn-primary {
            background-color: var(--color-primary);
            color: var(--color-secondary);
        }
        .btn-primary:hover {
            background-color: transparent;
            color: var(--color-primary);
        }
        .btn-secondary {
             background-color: transparent;
             color: var(--color-primary);
        }
        .btn-secondary:hover {
            background-color: var(--color-primary);
            color: var(--color-secondary);
        }
        .product-card:hover .product-image {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);


    // --- Helper function to create elements with classes ---
    function createElement(tag, classNames = [], attributes = {}, textContent = '') {
        const element = document.createElement(tag);
        if (classNames.length) element.className = classNames.join(' ');
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        if (textContent) element.textContent = textContent;
        return element;
    }

    // --- Header ---
    const header = createElement('header', ['w-full', 'py-6', 'px-4', 'md:px-8', 'bg-secondary/80', 'backdrop-blur-sm', 'sticky', 'top-0', 'z-50', 'border-b', 'border-gray-200']);
    const headerContainer = createElement('div', ['container', 'mx-auto', 'flex', 'justify-between', 'items-center']);

    // Navigation
    const nav = createElement('nav', ['hidden', 'md:flex', 'items-center', 'space-x-8', 'text-sm']);
    nav.innerHTML = `
        <a href="shop.html" class="nav-link">Shop</a>
        <a href="collections.html" class="nav-link">Collections</a>
        <a href="journal.html" class="nav-link">Journal</a>
    `;

    // Logo
    const logoDiv = createElement('div', ['text-center']);
    logoDiv.innerHTML = `<a href="#" class="font-serif text-3xl tracking-widest">AURA</a>`;

    // Header Icons
    const iconsDiv = createElement('div', ['flex', 'items-center', 'space-x-6', 'text-lg']);
    iconsDiv.innerHTML = `
        <a href="shop.html" class="hover:text-accent transition-colors"><i class="fas fa-search"></i></a>
        <a href="register.html" class="hover:text-accent transition-colors"><i class="fas fa-user"></i></a>
        <a href="cart.html" class="hover:text-accent transition-colors relative">
            <i class="fas fa-shopping-bag"></i>
            <span class="absolute -top-1 -right-1.5 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-sans">3</span>
        </a>
    `;

    headerContainer.append(nav, logoDiv, iconsDiv);
    header.appendChild(headerContainer);

    // --- Main ---
    const main = createElement('main');

    // Hero Section
    const heroSection = createElement('section', ['container', 'mx-auto', 'px-4', 'md:px-8', 'py-16', 'md:py-24']);
    const heroGrid = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8', 'items-center']);
    heroGrid.innerHTML = `
        <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-6xl lg:text-7xl leading-tight">The Art of<br>Modern Living</h1>
            <p class="mt-6 max-w-md mx-auto md:mx-0 text-gray-600">Discover curated collections that bring beauty, quality, and intention to your everyday life.</p>
            <div class="mt-10">
                <a href="collections.html" class="btn btn-primary">Explore The Collections</a>
            </div>
        </div>
        <div class="w-full h-64 md:h-96 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400" alt="[Hình ảnh thiết kế nội thất hiện đại]" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
        </div>
    `;
    heroSection.appendChild(heroGrid);

    // Shop by Category Section
    const categorySection = createElement('section', ['bg-white', 'py-16', 'md:py-24']);
    const categoryContainer = createElement('div', ['container', 'mx-auto', 'px-4', 'md:px-8']);
    categoryContainer.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl">Shop by Category</h2>
            <p class="mt-3 text-gray-500">Find what you love.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="shop.html" class="relative block group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600" alt="[Hình ảnh trang trí nhà cửa]" class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 class="font-serif text-white text-3xl">Home & Decor</h3>
                </div>
            </a>
            <a href="shop.html" class="relative block group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600" alt="[Hình ảnh thời trang]" class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 class="font-serif text-white text-3xl">Apparel</h3>
                </div>
            </a>
            <a href="shop.html" class="relative block group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="[Hình ảnh sản phẩm chăm sóc cá nhân]" class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 class="font-serif text-white text-3xl">Self-Care</h3>
                </div>
            </a>
        </div>
    `;
    categorySection.appendChild(categoryContainer);

    // New Arrivals Section
    const arrivalsSection = createElement('section', ['container', 'mx-auto', 'px-4', 'md:px-8', 'py-16', 'md:py-24']);
    const arrivalsContainer = createElement('div');
    arrivalsContainer.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl">New Arrivals</h2>
            <p class="mt-3 text-gray-500">Fresh from our workshop to your home.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="product-card group text-left">
                <a href="#">
                    <div class="w-full bg-gray-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="[Hình ảnh ghế bành vải Linen]" class="product-image w-full h-80 object-cover transition-transform duration-500">
                    </div>
                    <div class="mt-4">
                        <h3 class="font-medium text-gray-800">Linen Armchair</h3>
                        <p class="mt-1 text-lg font-medium">12.500.000₫</p>
                    </div>
                </a>
            </div>
            <div class="product-card group text-left">
                <a href="#"><div class="w-full bg-gray-200 overflow-hidden"><img src="https://plus.unsplash.com/premium_photo-1668620538983-c5993e4a443d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="[Hình ảnh bình gốm]" class="product-image w-full h-80 object-cover transition-transform duration-500"></div><div class="mt-4"><h3 class="font-medium text-gray-800">Ceramic Vase</h3><p class="mt-1 text-lg font-medium">1.800.000₫</p></div></a>
            </div>
            <div class="product-card group text-left">
                <a href="#"><div class="w-full bg-gray-200 overflow-hidden"><img src="https://plus.unsplash.com/premium_photo-1666632471938-53ce50c19dfd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="[Hình ảnh nến thơm]" class="product-image w-full h-80 object-cover transition-transform duration-500"></div><div class="mt-4"><h3 class="font-medium text-gray-800">Aromatic Candle</h3><p class="mt-1 text-lg font-medium">950.000₫</p></div></a>
            </div>
            <div class="product-card group text-left">
                <a href="#"><div class="w-full bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="[Hình ảnh túi xách da]" class="product-image w-full h-80 object-cover transition-transform duration-500"></div><div class="mt-4"><h3 class="font-medium text-gray-800">Leather Tote Bag</h3><p class="mt-1 text-lg font-medium">8.200.000₫</p></div></a>
            </div>
        </div>
        <div class="text-center mt-12">
            <a href="shop.html" class="btn btn-secondary">View All Products</a>
        </div>
    `;
    arrivalsSection.appendChild(arrivalsContainer);

    // Join Section
    const joinSection = createElement('section', ['bg-white', 'py-16']);
    const joinContainer = createElement('div', ['container', 'mx-auto', 'px-4', 'md:px-8', 'text-center', 'max-w-2xl']);
    joinContainer.innerHTML = `
        <h2 class="text-3xl md:text-4xl">Join The Inner Circle</h2>
        <p class="mt-4 text-gray-600">Be the first to know about new arrivals, exclusive offers, and behind-the-scenes stories. Sign up for the AURA newsletter.</p>
        <form class="mt-8 flex flex-col sm:flex-row max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email address" class="flex-grow w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent">
            <button type="submit" class="btn btn-primary mt-4 sm:mt-0 sm:-ml-px">Subscribe</button>
        </form>
    `;
    joinSection.appendChild(joinContainer);

    main.append(heroSection, categorySection, arrivalsSection, joinSection);

    // --- Footer ---
    const footer = createElement('footer', ['bg-primary', 'text-secondary']);
    const footerContainer = createElement('div', ['container', 'mx-auto', 'px-4', 'md:px-8', 'py-16']);
    footerContainer.innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div class="lg:col-span-2">
                <a href="#" class="font-serif text-2xl tracking-widest">AURA</a>
                <p class="mt-4 text-sm text-gray-400 max-w-xs">Curated goods for a life lived with intention. Quality, craftsmanship, and timeless design.</p>
            </div>
            <div>
                <h4 class="font-bold tracking-wider uppercase text-sm mb-4">Shop</h4>
                <nav class="space-y-3 text-sm">
                    <a href="#" class="block hover:text-white">New Arrivals</a>
                    <a href="#" class="block hover:text-white">Home & Decor</a>
                    <a href="#" class="block hover:text-white">Apparel</a>
                    <a href="#" class="block hover:text-white">Self-Care</a>
                </nav>
            </div>
             <div>
                <h4 class="font-bold tracking-wider uppercase text-sm mb-4">About</h4>
                <nav class="space-y-3 text-sm">
                    <a href="journal.html" class="block hover:text-white">Our Story</a>
                    <a href="journal.html" class="block hover:text-white">Journal</a>
                    <a href="https://leduyviet.id.vn/portfolio" class="block hover:text-white">Contact Us</a>
                    <a href="#" class="block hover:text-white">FAQs</a>
                </nav>
            </div>
             <div>
                <h4 class="font-bold tracking-wider uppercase text-sm mb-4">Follow</h4>
                <nav class="space-y-3 text-sm">
                    <a href="instagram.com/tuilavietle" class="block hover:text-white">Instagram</a>
                    <a href="fb.com/tuilavietle" class="block hover:text-white">Facebook</a>
                </nav>
            </div>
        </div>
         <div class="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; <span id="currentYear"></span> AURA. All Rights Reserved. A project by Le Duy Viet.</p>
            <p><span>Bài dự thi BrandID 2025 của Lê Duy Việt</span> </p>
            <p><span>Address: Đoàn Thị Điểm, Phường Xuân Hương, TP. Đà Lạt, Lâm Đồng - Email: vietld.vn@gmail.com</span> </p>
        </div>
    `;
    footer.appendChild(footerContainer);

    // --- Append all to body ---
    body.append(header, main, footer);

    // --- Final script ---
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
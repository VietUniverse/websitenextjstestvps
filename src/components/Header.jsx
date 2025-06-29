import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-secondary/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/collections" className="nav-link">Collections</Link>
          <Link href="/journal" className="nav-link">Journal</Link>
        </nav>
        <div className="text-center flex-1 md:flex-none">
          <Link href="/" className="font-serif text-3xl tracking-widest">AURA</Link>
        </div>
        <div className="flex items-center space-x-6 text-lg">
          <Link href="/search" className="hover:text-accent transition-colors"><i className="fas fa-search"></i></Link>
          <Link href="/register" className="hover:text-accent transition-colors"><i className="fas fa-user"></i></Link>
          <Link href="/cart" className="hover:text-accent transition-colors relative">
            <i className="fas fa-shopping-bag"></i>
            <span className="absolute -top-1 -right-1.5 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-sans">3</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Cấu hình font chữ Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

// Cấu hình font chữ Playfair Display
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

// Metadata cho website (tốt cho SEO)
export const metadata = {
  title: 'AURA - Curated Goods for Modern Living',
  description: 'Discover curated collections that bring beauty, quality, and intention to your everyday life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/*
          Chúng ta không cần thêm link font ở đây vì đã dùng next/font.
          Thêm link Font Awesome vào đây.
        */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {/*
        Class 'antialiased' của TailwindCSS giúp chữ mượt hơn.
        Các biến font (--font-sans, --font-serif) sẽ được áp dụng cho toàn bộ trang.
      */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
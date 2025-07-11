import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'AURA - Curated Goods for Modern Living',
  description: 'Discover curated collections that bring beauty, quality, and intention to your everyday life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
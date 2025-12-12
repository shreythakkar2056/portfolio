import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} antialiased bg-[#050505] text-white`}>{children}</body>
    </html>
  );
}
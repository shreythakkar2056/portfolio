import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
// Configure the primary font
const font = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta', // Optional: for Tailwind config if needed
});

// --- SEO & METADATA ---
export const metadata: Metadata = {
  title: 'Shrey Thakkar | Product Engineer & Full Stack Developer',
  description: 'Portfolio of Shrey Thakkar - A Product Engineer specializing in Flutter, Next.js, and IoT systems. Building high-performance digital experiences.',
  keywords: ['Shrey Thakkar', 'Product Engineer', 'Flutter Developer', 'Next.js', 'React', 'IoT', 'Portfolio'],
  authors: [{ name: 'Shrey Thakkar' }],
  creator: 'Shrey Thakkar',
  // Theme color for mobile browsers
  themeColor: '#050505',
  // Icons (If you have your generated favicon placed in /public)
  icons: {
    icon: '/logo.png', // Ensure you have a favicon.ico or icon.png in public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${font.className} antialiased bg-[#050505] text-white selection:bg-[#4ADE80] selection:text-black`}
      >
        {children}
        
        {/* Vercel Analytics */}
        <Analytics/>
        {/* Vercel Speed Insights */}
        <SpeedInsights/>
      </body>
    </html>
  );
  
}

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lidiann Spears - Portfolio',
  description: 'Student @ NU',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} bg-white text-black`}
        suppressHydrationWarning={true}
      >
        
        {/* Reverted banner to simple gray */}
        <div className="w-full bg-gray-100 py-2 text-center text-sm font-medium text-gray-800">
          This site is currently under development.
        </div>
        
        <Navbar />
        
        <main>{children}</main>
        
      </body>
    </html>
  );
}
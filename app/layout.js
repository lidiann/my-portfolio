import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lidiann Spears - Portfolio',
  description: 'Student at NU',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Set the default background and text colors for the whole site */}
      <body className={`${inter.className} bg-beige text-purple-dark`}>
        
        {/* Under Development Banner */}
        <div className="w-full bg-purple-light py-2 text-center text-sm font-medium text-purple-dark">
          This site is currently under development.
        </div>
        
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
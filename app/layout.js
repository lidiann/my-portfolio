import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar'; // Import the Navbar

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lidiann Spears - Portfolio',
  description: 'Student at NU',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Add the Navbar here */}
        <main>{children}</main> {/* Page content will be rendered here */}
      </body>
    </html>
  );
}
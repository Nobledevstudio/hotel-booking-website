import { ClerkProvider } from '@clerk/nextjs';
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
   title: "Urban Stay",
   description: ""
};


export default function RootLayout({ children }) {
  return (
      
    <ClerkProvider>
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

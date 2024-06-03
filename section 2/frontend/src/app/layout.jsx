import { Inter } from "next/font/google"; //this page is dedicated if we wand to ad content in all pages we make it above the children
import "./globals.css";
import Navbar from "@/components/navbar";
import PrelineScript from "@/components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar />    
       {/* this navbar in imported from componet navbar file  */}
        
        {children}
        <PrelineScript/>
        </body>
    </html>
  );
}

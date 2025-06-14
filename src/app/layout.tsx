"use client"
import "./globals.css";
import Navbar from "./_componenets/navbar/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function RootLayout({children}:any) {
  let y=useRouter()
  useEffect(() => {
y.push("home")
  }, [])
  
  return (
    <>
   
    
    <html lang="en">
      <body className="">
        <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar/>
        </div>
        {children}
      </body>
    </html>
     </>
  );
}

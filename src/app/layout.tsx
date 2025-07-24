'use client';
// isso pode ta muito errado de usar 'use client' mas enfim se compliolou deu bom
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {  ThemeProvider } from "./api/provider/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full">
      <title>CrackoCraft</title>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider>
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

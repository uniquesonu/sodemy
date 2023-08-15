import NavBar from "@/components/layout/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/util/theme-provider";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sodemy",
  description: "Your only stop for learning...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

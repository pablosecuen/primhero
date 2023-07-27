import Footer from "@component/components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import emailjs from "emailjs-com";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracking",
  description:
    "en esta página podras ver toda la información de tu despacho, su recorrido, plazos de entrega y mucho más",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          {" "}
          <Toaster />
          {children}
        </>
      </body>
    </html>
  );
}

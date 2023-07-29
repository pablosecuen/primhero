import Navbar from "@component/components/Nabvar/Navbar";
import "../globals.css";

import { Inter } from "next/font/google";
import Footer from "@component/components/Footer/Footer";
import { Toaster } from "sonner";
import { ExtendedMetadata } from "@component/types/Metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: ExtendedMetadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "PrimHero Tracking",
  description: "Bienvenidos a PrimHero Tracking",
  canonical: { url: "https://primhero-pablosecuen.vercel.app/tracking" },
  robots: "index, follow, max-snippet:150, max-image-preview:large",
  openGraph: {
    title: "Home",
    description: "PrimHero Tracking",
    type: "website",
    images: [
      {
        url: "https://primhero-pablosecuen.vercel.app/_next/static/media/background11.2db30357.png",
      },
    ],
  },
  other: {
    "instagram:username": "transporteprimhero",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}

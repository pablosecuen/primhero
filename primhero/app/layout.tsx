import { ExtendedMetadata } from "@component/types/Metadata";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: ExtendedMetadata = {
  title: "PrimHero Home",
  description: "Bienvenidos a PrimHero",
  canonical: { url: "https://primhero-pablosecuen.vercel.app" },
  robots: "index, follow, max-snippet:150, max-image-preview:large",
  openGraph: {
    title: "Home",
    description: "PrimHero Home",
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
          <Toaster />
          {children}
        </>
      </body>
    </html>
  );
}

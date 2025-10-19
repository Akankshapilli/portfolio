import type { Metadata } from "next";
import {
  Libre_Baskerville,
  Poppins,
  Inter,
  Playfair_Display,
  Lato,
  Lora,
  Josefin_Slab,
  Hind,
} from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const josefinslab = Josefin_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akanksha Pilli Portfolio",
  description:
    "UI/UX Designer crafting human-centered digital experiences for startups and enterprises. Available for freelance and full-time roles.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Web Design",
    "Mobile Design",
    "User Experience",
  ],
  authors: [{ name: "Akanksha Pilli" }],
  openGraph: {
    title: "Akanksha Pilli - UI/UX Designer",
    description:
      "UI/UX Designer crafting human-centered digital experiences for startups and enterprises.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akanksha Pilli - UI/UX Designer",
    description:
      "UI/UX Designer crafting human-centered digital experiences for startups and enterprises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${libreBaskerville.className} ${poppins.variable} ${inter.variable} ${playfairDisplay.variable} ${lato.variable} ${lora.variable} ${josefinslab.variable} ${hind.variable} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

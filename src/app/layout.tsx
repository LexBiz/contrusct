import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://constructvs.cz"),
  title: "ConStrukT VS Company | Строительные решения любой сложности",
  description:
    "ConStrukT VS Company выполняет строительные, инженерные и монтажные работы: от ремонта квартир до промышленных объектов по всей Европе.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "ConStrukT VS Company",
    description:
      "Надежная европейская строительная компания: ремонт, реконструкции, монтаж промышленных конструкций и инженерные работы.",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: "ConStrukT VS Company logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}

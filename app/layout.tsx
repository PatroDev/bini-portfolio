import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Bini Amed - Architecte & Designer 3D | Portfolio Professionnel",
  description:
    "Portfolio professionnel de Bini Amed, architecte et designer 3D expert en rendus photoréalistes. Découvrez mes projets d'architecture résidentielle, design d'intérieur et modélisation 3D.",
  keywords:
    "architecte, designer 3D, rendus photoréalistes, modélisation 3D, SketchUp, Lumion, AutoCAD, Revit, architecture résidentielle, design intérieur",
  icons: {
    icon: "/icon.png",            // favicon par défaut
    shortcut: "/icon.png",        // fallback
    apple: "/icon.png",  // pour iOS
  },
  authors: [{ name: "Bini Amed" }],
  openGraph: {
    title: "Bini Amed - Architecte & Designer 3D",
    description: "Expert en rendus photoréalistes et modélisation 3D basé à Laâyoune, Maroc",
    type: "website",
    locale: "fr_FR"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}













// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter, Playfair_Display } from 'next/font/google';
// import { LanguageProvider } from '@/hooks/use-language';

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter'
// });

// const playfair = Playfair_Display({ 
//   subsets: ['latin'],
//   variable: '--font-playfair'
// });

// export const metadata: Metadata = {
//   title: 'Bini Amed - Architecte & Designer 3D | Portfolio Professionnel',
//   description: 'Portfolio professionnel de Bini Amed, architecte et designer 3D expert en rendus photoréalistes. Découvrez mes projets d\'architecture résidentielle, design d\'intérieur et modélisation 3D.',
//   keywords: 'architecte, designer 3D, rendus photoréalistes, modélisation 3D, SketchUp, Lumion, AutoCAD, Revit, architecture résidentielle, design intérieur',
//   authors: [{ name: 'Bini Amed' }],
//   openGraph: {
//     title: 'Bini Amed - Architecte & Designer 3D',
//     description: 'Expert en rendus photoréalistes et modélisation 3D basé à Laâyoune, Maroc',
//     type: 'website',
//     locale: 'fr_FR',
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="fr">
//       <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
//         <LanguageProvider>
//           {children}
//         </LanguageProvider>
//       </body>
//     </html>
//   );
// }
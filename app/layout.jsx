import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: 'CH MAHESH - Full Stack Developer',
  description: 'Professional portfolio of CH MAHESH, a Full Stack Web Developer specializing in modern web technologies.',
  keywords: 'web developer, full stack, react, nextjs',
  openGraph: {
    title: 'CH MAHESH - Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: "icons",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

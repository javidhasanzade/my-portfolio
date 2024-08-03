import Header from "@/components/header";

import { Poppins as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-sans",
});

export const metadata = {
  title: "Javid | Developer portfolio",
  description: "Developer portfolio of Javid Hasanzade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          ` bg-gray-50 text-gray-950 relative
        dark:bg-zinc-900 dark:text-gray-50 dark:text-opacity-90
        h-full
        `,
          fontSans.variable
        )}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

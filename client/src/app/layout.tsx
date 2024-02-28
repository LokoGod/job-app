import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster, toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Application",
  description: "CeylonTek Internal Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}

import { ModeToggle, ThemeProvider } from "@/components/custom/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AlertProvider } from "@/components/custom/show-alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lohit Prakash",
  description: "Lohit Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AlertProvider>{children}</AlertProvider>
          <ModeToggle className="fixed right-4 bottom-4" />
        </ThemeProvider>
      </body>
    </html>
  );
}

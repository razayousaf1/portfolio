// src/app/layout.tsx
import "./globals.css"; // Tailwind/global CSS
import Providers from "@/components/Providers"; // ✅ use alias instead of relative path
import { Toaster } from "@/components/ui/toaster"; // if you want global toaster

export const metadata = {
  title: "Your Portfolio", // shows in browser tab
  description: "Portfolio website built with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          {children}
          <Toaster /> {/* ✅ toaster available globally */}
        </Providers>
      </body>
    </html>
  );
}

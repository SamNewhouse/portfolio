import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Analytics />
      <Component {...pageProps} />
    </main>
  );
}

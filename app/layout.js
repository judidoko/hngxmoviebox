import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "MovieBox",
  description: "MovieBox is for watching latest movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}

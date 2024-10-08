import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/lazy_dog.ttf",
  variable: "--lazy-dog",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/lazy_dog.ttf",
  variable: "--lazy-dog",
  weight: "100 900",
});

export const metadata = {
  title: "Phasmaphobia investigation helper",
  description: "All around tool for finding your ghost type",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

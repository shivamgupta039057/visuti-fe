import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top NEET Admission Consultant in India – Visuti Career",
  description: "Visuti Career is one of the top NEET admission consultant in India, providing AI-based NEET predictor, verified college data, and expert guidance for securing MBBS admissions.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/Logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} scroll`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

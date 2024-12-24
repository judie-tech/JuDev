import "./globals.css";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Judy Kagia - Software Developer",
  description: "Software Developer, Problem Solver, Tech Enthusiast",
  openGraph: {
    title: "Judy Kagia - Software Developer",
    description: "Software Developer, Problem Solver, Tech Enthusiast",
    images: [
      {
        url: "/images/n.jpeg",
        width: 1200,
        height: 630,
        alt: "JuDev - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JuDev - Software Developer",
    description: "Software Developer, Problem Solver, Tech Enthusiast",
    images: ["/images/n.jpeg"],
  },
  icons: {
    icon: "/favicon.jpeg", //
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpeg" sizes="any" />
        {/* Optional: Add a link for an apple-touch-icon */}
        <link rel="apple-touch-icon" href="/favicon.jpeg" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

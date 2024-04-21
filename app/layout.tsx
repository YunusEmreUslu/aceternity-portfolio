import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000/"),

	title: "Yunus Emre Uslu",		
	authors: {
		name: "Yunus Emre Uslu",
	},

	description:
		"Based in Turkey, I'm a frontend developer who is excited about building modern web applications.",
	openGraph: {
		title: "Yunus Emre Uslu",
		description:
			"Based in Turkey, I'm a frontend developer who is excited about building modern web applications.",
		url: "https://localhost:3000/",
		siteName: "Yunus Emre Uslu",
		images: "public\portfolio.png",
		type: "website",
	},
	keywords: ["Yunus Emre Uslu", "Yunus", "Emre", "Uslu", "Yunus Emre", "front", "frontend", "developer", "front", "front", "front"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}

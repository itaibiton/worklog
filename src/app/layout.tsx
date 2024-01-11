"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-switch";
import { Menu } from "@/components/ui/Menu";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} min-w-screen `}>
				<Menu />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
					<div className="fixed bottom-8 right-8">
						<ModeToggle />
					</div>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}

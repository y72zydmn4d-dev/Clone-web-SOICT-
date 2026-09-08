import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
export const metadata: Metadata = { title: { default: "SOICT — School of Information and Communication Technology", template: "%s — SOICT" }, description: "A modern frontend academic portal for SOICT." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><SiteShell>{children}</SiteShell></body></html>; }

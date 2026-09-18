import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACTOTIVE | Rail & Marine Parts, Engineering & Global Supply",
  description: "ACTOTIVE supplies locomotive, rolling stock, turbocharger and marine engine components with engineering support and worldwide logistics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

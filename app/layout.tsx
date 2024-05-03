import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | AIM System',
    default: 'AIM System',
  },
  description: "An alternative inventory management system.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

export default RootLayout;

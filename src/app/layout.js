export const metadata = {
  title: "MxSense Digital AI Platform",
  description: "Digital AI Platform for Sensing Intelligence",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
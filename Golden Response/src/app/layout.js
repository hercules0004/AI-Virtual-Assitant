import "./globals.css";

export const metadata = {
  title: "AI Models Showcase — Harshit Kumar",
  description: "Exploring the history, capabilities, and applications of modern AI foundation models.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "monyala.me",
  description: "Monyala's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

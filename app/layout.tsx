import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <h1 className="text-green-600">I'm green!</h1>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

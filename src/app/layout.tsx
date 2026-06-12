import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Commercial Website Prototype',
  description: 'A maintainable commercial website prototype with spec-driven UI.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

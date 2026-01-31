import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mikki Mase | $32M Baccarat Winner - Join Free Telegram',
  description: 'From federal prison to winning $32M in baccarat. Banned from 150+ casinos. Join the free Telegram community for strategies, cheatsheets, and real-time updates.',
  keywords: 'Mikki Mase, baccarat, gambling, casino, Telegram, strategies',
  openGraph: {
    title: 'Mikki Mase | $32M Baccarat Winner',
    description: 'From federal prison to winning $32M in baccarat. Join the free Telegram community.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

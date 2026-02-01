import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mikki-mase.com'),
  title: 'Mikki Mase | $32M Baccarat Winner - Join Free Telegram',
  description: 'From federal prison to winning $32M in baccarat. Banned from 150+ casinos. Join the free Telegram community for strategies, cheatsheets, and real-time updates.',
  keywords: ['Mikki Mase', 'baccarat', 'gambling', 'casino', 'Vegas', 'high stakes', 'Telegram'],
  authors: [{ name: 'Mikki Mase' }],
  creator: 'Mikki Mase',

  // Favicon - 🎰 emoji as SVG
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎰</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },

  // Open Graph (for social media sharing)
  openGraph: {
    title: 'Mikki Mase | $32M Baccarat Winner',
    description: 'From federal prison to the most feared gambler in Vegas history. One system. Zero luck. Join 7,400+ members free.',
    url: 'https://mikki-mase.com',
    siteName: 'Mikki Mase',
    images: [
      {
        url: '/images/mikki-main-1.webp',
        width: 1200,
        height: 630,
        alt: 'Mikki Mase - $32M Baccarat Winner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Mikki Mase | $32M Baccarat Winner',
    description: 'From federal prison to the most feared gambler in Vegas history. Join 7,400+ members free.',
    images: ['/images/mikki-main-1.webp'],
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

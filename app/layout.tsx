import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import Container from '@components/Container';
import '@styles/main.css';
import Header from '@components/Header';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Consumer Web Proposal',
  description: 'Fenice Web Proposal',
  metadataBase: new URL('https://proposal.feniceenergy.com'),
  openGraph: {
    title: 'Fenice Consumer Proposal',
    description: 'Fenice Energy',
    siteName: 'Feniceenergy',
    images: [
      {
        url: '/images/preview.png',
        width: 800,
        height: 600,
      },
      {
        url: '/images/preview.png',
        width: 1800,
        height: 1600,
        alt: 'Consumer proposal',
      },
    ],
    locale: 'en_Us',
    type: 'website',
  },
  twitter: {
    title: 'Fenice Consumer Proposal',
    description: 'Fenice Energy',
    images: [
      {
        url: '/images/preview.png',
        width: 800,
        height: 600,
      },
      {
        url: '/images/preview.png',
        width: 1800,
        height: 1600,
        alt: 'Consumer proposal',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}

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
  // metadataBase: new URL('https://proposal.feniceenergy.com/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Fenice Web Proposal" />
        <meta property="og:title" content="Fenice Consumer Proposal" />
        <meta property="og:description" content="Fenice Energy" />
        <meta property="og:url" content="https://proposal.feniceenergy.com/" />
        <meta property="og:site_name" content="Feniceenergy" />
        <meta property="og:locale" content="en_in" />
        <meta
          property="og:image"
          content="https://proposal.feniceenergy.com/public/images/preview.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image"
          content="https://proposal.feniceenergy.com/opengraph-image.png"
        />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="Consumer proposal" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fenice Consumer Proposal" />
        <meta name="twitter:description" content="Fenice Energy" />
        <meta
          name="twitter:image"
          content="https://proposal.feniceenergy.com/twitter-image.png"
        />
        <meta name="twitter:image:width" content="800" />
        <meta name="twitter:image:height" content="600" />
        <meta
          name="twitter:image"
          content="https://proposal.feniceenergy.com/twitter-image.png"
        />
        <meta name="twitter:image:width" content="1800" />
        <meta name="twitter:image:height" content="1600" />
        <meta name="twitter:image:alt" content="Consumer proposal" />
      </head>
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}

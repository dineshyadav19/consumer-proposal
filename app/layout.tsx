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
  metadataBase: new URL('https://proposal.feniceenergy.com/'),
  openGraph: {
    title: 'Fenice Consumer Proposal',
    description: 'Fenice Energy',
    url: 'https://proposal.feniceenergy.com/',
    siteName: 'Feniceenergy',
    images: ['/public/images/preview.png'],
    locale: 'en_in',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}

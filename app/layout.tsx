import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import Container from '@components/Container';
import '@styles/main.css';
import Header from '@components/Header';
import Script from 'next/script';

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
      <head>
        <Script
          id="ms_clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "l9sjymifka");
            `,
          }}
        ></Script>
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

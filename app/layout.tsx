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
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3884463,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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

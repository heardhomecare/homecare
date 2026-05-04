import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Heard Home Care • Trusted Senior Home Care',
    template: '%s • Heard Home Care',
  },
  description: 'Compassionate and professional senior home care services in Central and Eastern North Carolina.',
  icons: {
    icon: '/Asset6.png',
  },
  openGraph: {
    title: 'Heard Home Care • Trusted Senior Home Care',
    description: 'Compassionate and professional senior home care services in Central and Eastern North Carolina.',
    url: 'https://heardhomecare.com',
    siteName: 'Heard Home Care',
    images: [
      {
        url: '/logo-vertical-purple.png',
        width: 1200,
        height: 630,
        alt: 'Heard Home Care Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heard Home Care • Trusted Senior Home Care',
    description: 'Compassionate and professional senior home care services in Central and Eastern North Carolina.',
    images: ['/logo-vertical-purple.png'],
  },
}

import { Providers } from '@/components/Providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/flj2nwh.css" />
      </head>
      <body className="antialiased text-[var(--brand-black)] overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

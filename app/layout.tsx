import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.heardhome.com'),
  title: {
    default: 'Heard Home Care • Trusted Senior Home Care in North Carolina',
    template: '%s • Heard Home Care',
  },
  description: 'Compassionate and professional senior home care services in Central and Eastern North Carolina. We provide personalized care giving that empowers seniors to live with dignity.',
  keywords: ['Senior Home Care', 'Elderly Care NC', 'Home Health Raleigh', 'Compassionate Caregivers', 'Senior Assistance', 'Central North Carolina Home Care', 'home care nc', 'home care raleigh nc', 'home care durham nc', 'home care fayetteville nc', 'home care greensboro nc', 'home', 'home care', 'home health', 'home health care', 'home health aide', 'home health aide jobs', 'home health aide training', 'home health aide certification', 'home health aide requirements', 'home health aide salary', 'home health aide jobs near me', 'home health aide training near me', 'home health aide certification near me', 'home health aide requirements near me', 'home health aide salary near me', 'heard home', 'heard home care'],
  icons: {
    icon: '/Asset5.png',
    shortcut: '/Asset5.png',
    apple: '/Asset5.png',
  },
  openGraph: {
    title: 'Heard Home Care • Trusted Senior Home Care',
    description: 'Compassionate and professional senior home care services in North Carolina.',
    url: 'https://www.heardhome.com',
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
    description: 'Compassionate and professional senior home care services in North Carolina.',
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

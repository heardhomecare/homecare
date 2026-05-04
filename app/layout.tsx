import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
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

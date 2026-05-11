'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#1a1a1a',
            border: '1px solid #332885',
            borderRadius: '12px',
          },
        }}
      />
    </SessionProvider>
  );
}

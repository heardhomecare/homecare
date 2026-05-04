'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import './auth.css'

export default function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="auth-wrapper">
      <div className="auth-content-container">
        {/* Main Content */}
        <main className="auth-main">
          {children}
        </main>
      </div>
    </div>
  )
}


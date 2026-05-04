'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('[HEARD] Forgot password request for:', email)
    setSubmitted(true)
  }

  return (
    <div className="auth-split-card">
      {/* Left Section - Form */}
      <div className="auth-card-left">
        <div className="auth-card-header">
          <h1>Reset Password</h1>
          <p>We&apos;ll send instructions to your email</p>
          <div className="auth-logo-cutout">
            <Link href="/">
              <img 
                src="/logo-circular-purple.png" 
                alt="HEARD Logo" 
              />
            </Link>
          </div>
        </div>

        <div className="auth-card-form-wrapper">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-form-group">
                <label htmlFor="email" className="auth-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="auth-input-field"
                  required
                />
              </div>

              <button type="submit" className="auth-submit-btn">
                Send Reset Link
              </button>

              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <Link href="/auth/login" className="auth-forgot-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ArrowLeft size={16} />
                  Back to Login
                </Link>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={64} color="#10b981" />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>Check Your Email</h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>
                If an account exists with <span style={{ fontWeight: 700, color: '#1e293b' }}>{email}</span>, you will receive password reset instructions shortly.
              </p>
              <Link href="/auth/login" className="auth-submit-btn" style={{ textDecoration: 'none', display: 'block' }}>
                Return to Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Image */}
      <div 
        className="auth-card-right" 
        style={{ backgroundImage: 'url("/keila_and_family.webp")' }}
      >
        <div className="auth-right-overlay"></div>
      </div>
    </div>
  )
}



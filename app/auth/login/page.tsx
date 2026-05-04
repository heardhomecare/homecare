'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false
      })

      if (result?.error) {
        toast.error(result.error)
      } else {
        toast.success('Login successful!')
        router.push('/admin/dashboard')
        router.refresh()
      }
    } catch (error) {
      toast.error('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-split-card">
      {/* Left Section - Form */}
      <div className="auth-card-left">
        <div className="auth-card-header">
          <h1>Welcome Back !</h1>
          <p>Sign in to continue to HEARD Admin</p>
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
          <form onSubmit={handleSubmit} method="POST" className="auth-form">
            <div className="auth-form-group">
              <label htmlFor="email" className="auth-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="auth-input-field"
                required
              />
            </div>


            <div className="auth-form-group">
              <label htmlFor="password" className="auth-label">Password</label>
              <div className="auth-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="auth-input-field"
                  required
                />
                <div 
                  className="auth-eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>

            <div className="auth-form-footer">
              <div className="auth-checkbox-group">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe">keep me logged in</label>
              </div>
              <Link href="/auth/forgot-password" className="auth-forgot-link">
                Forgot Password ?
              </Link>
            </div>

            <button 
              type="submit" 
              className="auth-submit-btn disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                'Login'
              )}
            </button>
          </form>
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



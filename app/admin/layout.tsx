import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HEARD Home Care - Admin Dashboard',
  description: 'Admin dashboard for managing HEARD Home Care operations',
}

import AdminLayoutWrapper from '@/components/admin/AdminLayoutWrapper'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  )
}

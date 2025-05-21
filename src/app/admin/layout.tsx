import React from 'react'
import AdminFooter from '@/components/layout/AdminFooter'
import AdminHeader from '@/components/layout/AdminHeader'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminHeader />
      {/* <AdminSidebar/> */}
      <main className="max-w-4xl mx-auto p-6 bg-white mt-6 rounded shadow">
        {children}
      </main>
      <AdminFooter />
    </>
  )
}

import React from 'react'
import AdminFooter from '@/components/layout/AdminFooter'
import AdminHeader from '@/components/layout/AdminHeader'
import AdminSidebar from '@/components/navigation/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminHeader />
      <main className="bg-white mt-6 rounded shadow">
        <div className='d-flex flex-column flex-sm-row'>
          <AdminSidebar />
          <div className="flex-grow-1 p-4">{children}</div>
        </div>
      </main>
      <AdminFooter />
    </>
  )
}

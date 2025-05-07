import AdminFooter from '@/components/AdminFooter'
import AdminHeader from '@/components/AdminHeader'
import React from 'react'

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
   <>
    <AdminHeader/>
        <main className="max-w-4xl mx-auto p-6 bg-white mt-6 rounded shadow">
            {children} 
        </main>
    <AdminFooter/>
   </>
  )
}

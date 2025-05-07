import UXFooter from '@/components/UXFooter'
import UXHeader from '@/components/UXHeader'
import React from 'react'

export default function UXLayout({children}: {children: React.ReactNode}) {
  return (
    <>
        <UXHeader/>
        <main className="max-w-4xl mx-auto p-6 bg-white mt-6 rounded shadow">
              {children}
            </main>
       <UXFooter/>
   </>
  )
}

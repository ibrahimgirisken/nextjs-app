import UXFooter from '@/components/layout/UXFooter'
import UXHeader from '@/components/layout/UXHeader'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <UXHeader />
        <Container>
          {children}
        </Container>
        <UXFooter />
      </main>
    </>
  )
}

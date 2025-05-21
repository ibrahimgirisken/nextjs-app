import UXFooter from '@/components/layout/UXFooter'
import UXHeader from '@/components/layout/UXHeader'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UXHeader />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <UXFooter />
    </>
  )
}

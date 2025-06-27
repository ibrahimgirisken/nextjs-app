import React from 'react'
import UXFooter from '@/components/layout/UXFooter'
import UXHeader from '@/components/layout/UXHeader'
import { Container } from 'react-bootstrap'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UXHeader />
      <Container>
        {children}
      </Container>
      <UXFooter />
    </>
  )
}

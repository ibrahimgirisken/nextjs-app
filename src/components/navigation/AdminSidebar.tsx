'use client'

import { useState } from 'react'
import { Navbar, Offcanvas, Nav, Button } from 'react-bootstrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ResponsiveSidebar() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  const toggle = () => setShow(!show)
  const isActive = (href: string) => pathname === href

  const links = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/products', label: 'Ürünler' },
    { href: '/admin/categories', label: 'Kategoriler' },
    { href: '/admin/brands', label: 'Markalar' },
    { href: '/admin/settings', label: 'Ayarlar' },
  ]

  return (
    <>
      {/* Üst menü (mobilde görünür) */}
      <Navbar bg="light" className="d-md-none px-0">
        <Button variant="outline-primary" onClick={toggle}>
          ☰ Menü
        </Button>
        <Navbar.Brand className="ms-2">Admin Panel</Navbar.Brand>
      </Navbar>

      {/* Sabit sidebar (desktop) */}
      <div className="d-none d-md-flex flex-column bg-light p-3" style={{ width: 200, minHeight: '100vh' }}>
        <h5 className="mb-4">Admin Panel</h5>
        <Nav className="flex-column">
          {links.map((link) => (
            <Nav.Link
              key={link.href}
              as={Link}
              href={link.href}
              active={isActive(link.href)}
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {/* Offcanvas (mobil) */}
      <Offcanvas show={show} onHide={toggle} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menü</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {links.map((link) => (
              <Nav.Link
                key={link.href}
                as={Link}
                href={link.href}
                active={isActive(link.href)}
                onClick={toggle}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

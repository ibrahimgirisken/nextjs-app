import { Container } from 'react-bootstrap'

export default function UXFooter() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-4 mt-8">
        <Container>
          © {new Date().getFullYear()} CW Enerji
        </Container>
      </footer>
    </>
  )
}

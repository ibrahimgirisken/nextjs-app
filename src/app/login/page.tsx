'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export interface Login {
  nameOrEmail: string,
  password: string
}

type LoginFormProps = {
  initialData?: Login,
  onSuccess?: () => void
}
export default function Page({ initialData, onSuccess }: LoginFormProps) {
const router = useRouter()
  const [formData, setFormData] = useState<Login>({
    nameOrEmail: '',
    password: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (onSuccess) onSuccess()
      router.push('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }))
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="border rounded p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <Col>
          <h3 className="text-center mb-4">Kullanıcı Girişi</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Kullanıcı Adı | E-mail</Form.Label>
              <Form.Control
                type="text"
                name="nameOrEmail"
                value={formData.nameOrEmail}
                onChange={handleChange}
                placeholder="E-posta ya da kullanıcı adı"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Şifreniz"
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Giriş Yap
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

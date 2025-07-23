'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';

export default function Page() {
  const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin');
      } else {
        const data = await res.json();
        setError(data?.error || 'Giriş başarısız');
      }
    } catch {
      setError('Sunucuya bağlanılamadı');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="border rounded p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <Col>
          <h3 className="text-center mb-4">Kullanıcı Girişi</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Kullanıcı Adı | E-mail</Form.Label>
              <Form.Control
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={(e) => setFormData({ ...formData, usernameOrEmail: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">Giriş Yap</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

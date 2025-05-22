import { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Product } from '../types/product'
import { createProduct, updateProduct } from '../api/productService'

type ProductFormProps = {
  initialData?: Product
  onSuccess?: () => void
}

export default function ProductForm({ initialData, onSuccess }: ProductFormProps) {

  const [formData, setFormData] = useState<Product>({
    id: '',
    code: '',
    brandId: null,
    categoryId: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    video: '',
    order: 1,
    status: true,
    productTranslations: [
      {
        langCode: 'tr',
        name: '',
        url: '',
        title: '',
        brief: '',
        pageTitle: '',
        metaDescription: '',
        content: '',
      },
      {
        langCode: 'en',
        name: '',
        url: '',
        title: '',
        brief: '',
        pageTitle: '',
        metaDescription: '',
        content: '',
      },
      {
        langCode: 'de',
        name: '',
        url: '',
        title: '',
        brief: '',
        pageTitle: '',
        metaDescription: '',
        content: '',
      }
    ]
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (formData.id) {
        await updateProduct(formData)
      } else {
        const { id, ...dataToSend } = formData
        await createProduct(dataToSend)
      }
      if (onSuccess) onSuccess()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Ürün Kodu</Form.Label>
            <Form.Control
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Marka</Form.Label>
            <Form.Control
              type="text"
              name="brandId"
              value={formData.brandId ?? ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Control
          name="categoryId"
          value={formData.categoryId ?? ''}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sıra</Form.Label>
        <Form.Control
          type="number"
          name="order"
          value={formData.order}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Check
          type="checkbox"
          name="status"
          label="Aktif mi?"
          checked={formData.status}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              status: e.target.checked,
            }))
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {formData.id ? 'Güncelle' : 'Ekle'}
      </Button>
    </Form>
  )
}

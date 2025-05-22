import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Category } from '../types/category'
import { createCategory, updateCategory } from '../api/categoryService'

type CategoryFormProps = {
    initialData?: Category,
    onSuccess?: () => void
}

export default function CategoryForm({ initialData, onSuccess }: CategoryFormProps) {

    const [formData, setFormData] = useState<Category>({
        id: '',
        image1: '',
        parentId: '',
        order: 1,
        children: [],
        status: true,
        categoryTranslations: [
            {
                langCode: 'tr',
                name: '',
                title: '',
                url: '',
                brief: '',
                metaDescription: ''
            },
            {
                langCode: 'en',
                name: '',
                title: '',
                url: '',
                brief: '',
                metaDescription: ''
            },
            {
                langCode: 'de',
                name: '',
                title: '',
                url: '',
                brief: '',
                metaDescription: ''
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
                await updateCategory(formData)
            } else {
                const { id, ...dataToSend } = formData
                await createCategory(dataToSend)
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
                        <Form.Label>Görsel</Form.Label>
                        <Form.Control
                            type="text"
                            name="image1"
                            value={formData.image1}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Control
                            type="text"
                            name="parentId"
                            value={formData.parentId ?? ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

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

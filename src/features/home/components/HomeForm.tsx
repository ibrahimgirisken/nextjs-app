'use client'
import React, { useEffect, useState } from 'react'
import { reviseTheText } from '@/lib/reviseTheText'
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'
import ImageUpload from '@/shared/imageUpload'
import { Home } from '../types/home'
import { homeService } from '../api/useHome'

type HomeFormProps = {
    initialData?: Home,
    onSuccess?: () => void
}

export default function HomeForm({ initialData, onSuccess }: HomeFormProps) {

    const [formData, setFormData] = useState<Home>({
        id: '',
        contentType: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        video: '',
        order: 1,
        status: true,
        homeTranslations: [
            {
                langCode: 'tr',
                url: '',
                title: '',
                content: '',
                additionalData: '',
            },
            {
                langCode: 'en',
                url: '',
                title: '',
                content: '',
                additionalData: '',
            },
            {
                langCode: 'de',
                url: '',
                title: '',
                content: '',
                additionalData: '',
            }
        ]
    })

    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }))
    }

    const handleTranslationChange = (index: number, field: string, value: string) => {
        setFormData((prev) => {
            const updatedTranslations = [...prev.homeTranslations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            updatedTranslations[index].url = reviseTheText(updatedTranslations[index].url.trim() === '' ? updatedTranslations[index].title : updatedTranslations[index].url)

            return {
                ...prev,
                homeTranslations: updatedTranslations,
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await homeService.update(formData)
            } else {
                const { id, ...dataToSend } = formData
                await homeService.create(dataToSend)
            }
            if (onSuccess) onSuccess()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={handleSubmit} className='m-5'>
            <Row className="mb-3">
                <Col>
                    <ImageUpload
                        name="image1"
                        folder="homes"
                        value={formData.image1}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="image2"
                        folder="homes"
                        value={formData.image2}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="image3"
                        folder="homes"
                        value={formData.image3}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="image4"
                        folder="homes"
                        value={formData.image4}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="image5"
                        folder="homes"
                        value={formData.image5}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                    <ImageUpload
                        name="video"
                        folder="homes"
                        value={formData.video}
                        onChange={(name, val) =>
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }
                    />
                </Col>
            </Row>
            <Tabs defaultActiveKey="tr" className="mb-3">
                {formData.homeTranslations.map((translation, index) => (
                    <Tab key={translation.langCode} eventKey={translation.langCode} title={translation.langCode.toUpperCase()}>
                        <Form.Group className="mb-3">
                            <Form.Label>Başlık</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={translation.title}
                                onChange={(e) => handleTranslationChange(index, 'title', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Sayfa İçerik</Form.Label>
                            <Form.Control
                                type="text"
                                name="content"
                                value={translation.content}
                                onChange={(e) => handleTranslationChange(index, 'content', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Url</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                value={translation.url}
                                onChange={(e) => handleTranslationChange(index, 'url', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Diğe Datalar</Form.Label>
                            <Form.Control
                                type="text"
                                name="additionalData"
                                value={translation.additionalData}
                                onChange={(e) => handleTranslationChange(index, 'additionalData', e.target.value)}
                            />
                        </Form.Group>
                    </Tab>
                ))}
            </Tabs>

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
        </Form >
    )
}

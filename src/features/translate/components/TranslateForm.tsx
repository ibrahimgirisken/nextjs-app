'use client'
import React, { useEffect, useState } from 'react'
import { TranslateKey } from '../types/translate'
import { translateService } from '../api/translateService'
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap'

type TranslateFormProps = {
    initialData?: TranslateKey,
    onSuccess?: () => void
}

export default function TranslateForm({ initialData, onSuccess }: TranslateFormProps) {
    const [formData, setFormData] = useState<TranslateKey>({
        id: '',
        key: '',
        description: '',
        translations: [{
            langCode: 'tr',
            value: '',
        },
        {
            langCode: 'en',
            value: '',
        },
        {
            langCode: 'de',
            value: '',
        }]
    })

    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }))
    }

    const handleTranslationChange = (index: number, field: string, value: string) => {
        setFormData((prev) => {
            const updatedTranslations = [...prev.translations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value,
            }

            return {
                ...prev,
                translations: updatedTranslations,
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await translateService.update(formData)
            } else {
                const { id, ...dataToSend } = formData
                await translateService.create(dataToSend)
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
                    <Form.Group>
                        <Form.Label>Anahtar Değer</Form.Label>
                        <Form.Control
                            type="text"
                            name="key"
                            value={formData.key}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>İçerik Değer</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Tabs defaultActiveKey="tr" className="mb-3">
                {formData.translations.map((translation, index) => (
                    <Tab key={translation.langCode} eventKey={translation.langCode} title={translation.langCode.toUpperCase()}>
                        <Form.Group className="mb-3">
                            <Form.Label>Değer</Form.Label>
                            <Form.Control
                                type="text"
                                name="value"
                                value={translation.value}
                                onChange={(e) => handleTranslationChange(index, 'value', e.target.value)}
                            />
                        </Form.Group>
                    </Tab>
                ))}
            </Tabs>

            <Button variant="primary" type="submit">
                {formData.id ? 'Güncelle' : 'Ekle'}
            </Button>
        </Form >
    )
}

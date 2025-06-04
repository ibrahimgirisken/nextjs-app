'use client'

import { useEffect, useState } from "react"
import { Setting } from "../types/setting"
import { updateSetting } from "../api/settingService"
import { Button, Col, Form, Row } from "react-bootstrap"
import ImageUpload from "@/shared/imageUpload"

type SettingFromProps = {
    initialData?: Setting,
    onSuccess?: () => void
}

export default function SettingForm({ initialData, onSuccess }: SettingFromProps) {
    const [formData, setFormData] = useState<Setting>({
        id: '',
        whiteLogo: '',
        blackLogo: '',
        telephone: '',
        email: '',
        address: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedIn: '',
        youtube: '',
        googlePlus: '',
        googleAnalytics: '',
        googleRecaptcha: '',
        googleTagManager: '',
        googleSiteVerification: '',
        googleMaps: '',
        status: true,
        settingTranslations: [
            {
                langCode: 'tr',
                title: '',
                metaDescription: ''
            },
            {
                langCode: 'en',
                title: '',
                metaDescription: ''
            },
            {
                langCode: 'de',
                title: '',
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
            [name]: value,
        }))
    }

    const handleTranslationChange = (index: number, field: string, value: string) => {
        setFormData((prev) => {
            const updatedTranslations = [...prev.settingTranslations]

            updatedTranslations[index] = {
                ...updatedTranslations[index],
                [field]: value
            }
            return {
                ...prev,
                settingTranslations: updatedTranslations
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                await updateSetting(formData)
            }
            if (onSuccess) {
                onSuccess()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Form onSubmit={handleSubmit} className="m-5">
            <Row className="mb-3">
                <Col>
                    <ImageUpload
                        name="whiteLogo"
                        folder="settings"
                        value={formData.whiteLogo}
                        onChange={(name, val) => {
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }} />
                    <ImageUpload
                        name="blackLogo"
                        folder="settings"
                        value={formData.blackLogo}
                        onChange={(name, val) => {
                            setFormData((prev) => ({
                                ...prev,
                                [name]: val,
                            }))
                        }} />
                    <Form.Group>
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control
                            type="text"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-Posta</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Adres</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group><Form.Group>
                        <Form.Label>Facebook</Form.Label>
                        <Form.Control
                            type="text"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Twitter</Form.Label>
                        <Form.Control
                            type="text"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>İnstagram</Form.Label>
                        <Form.Control
                            type="text"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>linkedIn</Form.Label>
                        <Form.Control
                            type="text"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Youtube</Form.Label>
                        <Form.Control
                            type="text"
                            name="youtube"
                            value={formData.youtube}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Google Plus</Form.Label>
                        <Form.Control
                            type="text"
                            name="googlePlus"
                            value={formData.googlePlus}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Google Analytics</Form.Label>
                        <Form.Control
                            type="text"
                            name="googleAnalytics"
                            value={formData.googleAnalytics}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Google Recaptcha</Form.Label>
                        <Form.Control
                            type="text"
                            name="googleRecaptcha"
                            value={formData.googleRecaptcha}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Google Tag Manager</Form.Label>
                        <Form.Control
                            type="text"
                            name="googleTagManager"
                            value={formData.googleTagManager}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Google Site Verification</Form.Label>
                        <Form.Control
                            type="text"
                            name="googleSiteVerification"
                            value={formData.googleSiteVerification}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Google Maps</Form.Label>
                        <Form.Control
                            type="text"
                            name="googleMaps"
                            value={formData.googleMaps}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
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
                            } />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Güncelle
                    </Button>
                </Col>
            </Row>
        </Form >
    )
}
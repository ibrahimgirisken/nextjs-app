'use client'

import { useEffect, useState } from "react"
import { Setting } from "../types/setting"
import { updateSetting } from "../api/settingService"
import { Col, Form, Row } from "react-bootstrap"
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
                </Col>
            </Row>
        </Form>
    )
}
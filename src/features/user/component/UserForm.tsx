import React, { useEffect, useState } from 'react'
import { User } from '../types/user'
import { userService } from '../api/userService'
import { Button, Col, Form, Row } from 'react-bootstrap'

type UserFormProps = {
    initialData?: User,
    onSuccess?: () => void
}
export default function UserForm({ initialData, onSuccess }: UserFormProps) {

    const [formData, setFormData] = useState<User>({
        id: '',
        nameSurname: '',
        userName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                await userService.update(formData)
            } else {
                const { id, ...dataToSend } = formData
                await userService.create(dataToSend);
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
                        <Form.Label>İsim Soyisim</Form.Label>
                        <Form.Control
                            type="text"
                            name="nameSurname"
                            value={formData.nameSurname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Şifre Tekrar</Form.Label>
                        <Form.Control
                            type="text"
                            name="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                {formData.id ? 'Güncelle' : 'Ekle'}
            </Button>
        </Form >
    )
}

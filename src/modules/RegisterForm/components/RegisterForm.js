import React from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Button, Block} from '../../../components';

const RegisterForm = () => {
    const success = true;

    const onFinish = () => {

    };

    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа нужно зарегистрироваться</p>
            </div>
            <Block>{!success ? (
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input size="large" prefix={<MailOutlined className="site-form-item-icon"/>}
                                   placeholder="Email"/>
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input size="large" prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Ваше имя"/>
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Повторите пароль"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link className="auth__register-link" to="/login">Войти</Link>
                        </Form.Item>
                    </Form>) :
                <div className="auth__success-block">
                        <InfoCircleTwoTone style={{ fontSize: '50px' }}/>
                    <h2>Подтвердите свой аккаунт</h2>
                    <p>Отправлено письмо с подтверждением</p>
                </div>}
            </Block>
        </>
    )
};

export default RegisterForm;
import React from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Button, Block} from '../../../components';
import {validateField} from "../../../utils/helpers";

const RegisterForm = props => {
    const success = false;
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
    } = props;

    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа нужно зарегистрироваться</p>
            </div>
            <Block>{!success ? (
                    <Form
                        className="login-form"
                        onSubmit={handleSubmit}
                    >
                        <Form.Item
                            hasFeedback
                            validateStatus={validateField('email', touched, errors)}
                            help={!touched.email ? '' : errors.email}
                        >
                            <Input
                                id="email"
                                size="large"
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input
                                id="fullname"
                                size="large"
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="Ваше имя"
                                value={values.fullname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            validateStatus={validateField('password', touched, errors)}
                            help={!touched.password ? '' : errors.password}
                        >
                            <Input
                                id="password"
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Пароль"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input
                                id="password2"
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Повторите пароль"
                                value={values.password2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit"
                                    className="login-form-button">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link className="auth__register-link" to="/login">Войти</Link>
                        </Form.Item>
                    </Form>) :
                <div className="auth__success-block">
                    <InfoCircleTwoTone style={{fontSize: '50px'}}/>
                    <h2>Подтвердите свой аккаунт</h2>
                    <p>Отправлено письмо с подтверждением</p>
                </div>}
            </Block>
        </>
    )
};

export default RegisterForm;
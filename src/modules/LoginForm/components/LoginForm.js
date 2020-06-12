import React from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Button, Block} from '../../../components';
import validateField from '../../../utils/helpers/validateField';

const LoginForm = props => {
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
                <h2>Войти в аккаунт</h2>
                <p>Нужно войти в аккаунт</p>
            </div>
            <Block>
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
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Email"
                            value={values.email}
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

                    <Form.Item>
                        <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit" className="login-form-button">
                            Войти в чат
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                    </Form.Item>
                </Form>
            </Block>
        </>
    )
};

export default LoginForm;
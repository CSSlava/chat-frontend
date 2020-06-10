import React from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Button, Block} from '../../../components';

const LoginForm = () => {
    const onFinish = () => {

    };

    return (
        <>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Нужно войти в аккаунт</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon"/>}
                               placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input
                            size="large"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit" className="login-form-button">
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
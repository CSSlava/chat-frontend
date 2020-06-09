import React from 'react';
import {Form, Input, Icon, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Block, Button} from '../../components';

import './Auth.scss';

const Auth = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Нужно войти в аккаунт</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input size="large" prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}
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
                            <a className="auth__register-link" href="#">Зарегистрироваться</a>
                        </Form.Item>
                    </Form>
                </Block>
            </div>
        </section>
    )
};

export default Auth;
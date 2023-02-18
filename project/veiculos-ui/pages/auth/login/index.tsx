import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import styles from '../../../styles/main.module.css'
import Header from '../../common/components/Header'

export default class Home extends Component {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    onFinish(values: any) {
        console.log('Received values of form: ', values)
    };

    render(): ReactNode {
        return (
            <div style={{ width: '100%', height: '100%'}}>
                <Header></Header>
                <main className={`${styles['l-box-main']}`}>

                    <div className={`${styles['l-box-img']}`}></div>

                    <div className={`${styles['l-box-login']}`}>
                        <div className={`row justify-content-center ${styles['l-box-form']}`}>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={() => this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>         
                                    <a className="login-form-forgot" href="">
                                        Esqueci minha senha
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    <span style={{ marginLeft: '6px' }}>Ou</span> <a href="">Registre-se</a>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                </main>
            </div>
        )
    }

}
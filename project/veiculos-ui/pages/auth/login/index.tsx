import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import md5 from 'md5'
import React, { Component, ReactNode } from 'react'
import styles from '../../../styles/main.module.css'
import Header from '../../common/components/layout/components/Header'
import Notification from '../../common/components/layout/components/Notification'
import { TypeNotificationEnum } from '../../common/enum/TypeNotificationEnum'
import { LoginStateProperties } from './src/layouts/interfaces/LoginStateProperties'
import AuthManger from './src/manager/AuthManger'
import { AuthRequestDTO } from './src/manager/dtos/requests/AuthRequestDTO'

export default class Home extends Component<React.ReactNode, LoginStateProperties> {


    constructor(props: any) {
        super(props)

        this.state = {
            loader: { display: 'none' },
            showDialog: { display: 'block' },
            showStatusCard: { display: 'block' },
            childRef: React.createRef(),
        }
    }

    async onFinish(values: AuthRequestDTO) {


        this.setState({ showDialog: { display: 'none' }, loader: { display: 'block' } })
        try {
            await AuthManger.getAuth({ username: values.username, password: md5(values.password) })
        } catch (error) {
            setTimeout(() => {
                this.setState({ showDialog: { display: 'block' }, loader: { display: 'none' } })
                this.setState({ showStatusCard: { display: 'block' } })
                this.state.childRef.current?.openNotification(TypeNotificationEnum.ERROR, 'Erro', 'Endereço de e-email ou senha incorretos.', 'topRight')
            }, 2000)
        }
    };

    render(): ReactNode {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                {/* <Header></Header> */}
                <main className={`${styles['l-box-main']}`}>

                    <div className={`${styles['l-box-img']}`}></div>

                    <div className={`${styles['l-box-login']}`}>
                        <div className={styles['c_loader']} style={this.state.loader}></div>
                        <div className={`row justify-content-center ${styles['l-box-form']}`} style={this.state.showDialog}>
                            <Notification placement='a' ref={this.state.childRef}></Notification>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={(values: AuthRequestDTO) => this.onFinish(values)}
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
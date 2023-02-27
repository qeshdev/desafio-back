import { CarOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Layout, Menu, MenuProps, theme } from 'antd'
import React from 'react'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[],): MenuItem {

    return { key, icon, children, label, } as MenuItem
}

const items: MenuItem[] = [
    getItem('Meus veiculos', 'sub2', <CarOutlined />)
]

const MenuCar: React.FC = () => {

    const { token: { colorBgContainer }, } = theme.useToken()

    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sider collapsed={true} style={{ backgroundColor: 'rgb(62, 0, 125,0.8)' }}>
                <div style={{ height: 32, margin: 25 }}>
                    <Avatar shape="circle" size="default" style={{ backgroundColor: '#d3d3d3' }} icon={<UserOutlined />} />
                </div>

                <Menu theme="dark" style={{ backgroundColor: 'rgb(62, 0, 125,0.8)' }} defaultSelectedKeys={['1']} mode="inline" items={[
                    {
                        label: 'teste',
                        key: '1',
                        icon: <CarOutlined />,
                        style: {backgroundColor: 'rgb(62, 0, 125,0.8)' ,borderRadius:'100' }
                    }
                ]} />
            </Sider>

        </Layout>
    )
}

export default MenuCar
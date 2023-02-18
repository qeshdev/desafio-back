import { notification } from 'antd'
import { NotificationPlacement } from 'antd/lib/notification'
import React, { forwardRef, Ref, useImperativeHandle } from 'react'
import { TypeNotificationEnum } from '../../../enum/TypeNotificationEnum'
import { INotificationRef } from './INotificationRef'

export interface IProps {
    placement: string
}

const Context = React.createContext({ name: 'Default' })

// eslint-disable-next-line react/display-name
const Notification = forwardRef<INotificationRef, IProps>(({ placement }: IProps, ref: Ref<INotificationRef>) => {

    const [api, contextHolder] = notification.useNotification()

    const openNotification = (type: TypeNotificationEnum, title: string, message: string, placement: NotificationPlacement) => {

        if (type === TypeNotificationEnum.ERROR) {
            api.error({
                message: `${title}`,
                description: <Context.Consumer>{() => `${message}`}</Context.Consumer>,
                placement,
            })
        }

        if (type === TypeNotificationEnum.INFO) {
            api.info({
                message: `${title}`,
                description: <Context.Consumer>{() => `${message}`}</Context.Consumer>,
                placement,
            })
        }
        
        if (type === TypeNotificationEnum.OPEN) {
            api.open({
                message: `${title}`,
                description: <Context.Consumer>{() => `${message}`}</Context.Consumer>,
                placement,
            })
        }

        if (type === TypeNotificationEnum.SUCCESS) {
            api.success({
                message: `${title}`,
                description: <Context.Consumer>{() => `${message}`}</Context.Consumer>,
                placement,
            })
        }

        if (type === TypeNotificationEnum.WARNING) {
            api.warning({
                message: `${title}`,
                description: <Context.Consumer>{() => `${message}`}</Context.Consumer>,
                placement,
            })
        }
    }

    useImperativeHandle(ref, () => ({
        openNotification,
    }))

    return (
        <div>
            {contextHolder}
        </div>
    )

})

export default Notification
import { NotificationPlacement } from "antd/lib/notification"
import { TypeNotificationEnum } from "../../enum/TypeNotificationEnum"

export interface INotificationRef {
    openNotification: (type: TypeNotificationEnum, title: string, message: string, placement: NotificationPlacement) => void
}
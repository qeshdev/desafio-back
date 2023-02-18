import { RefObject } from "react"
import { INotificationRef } from "../../../../../common/components/layout/components/INotificationRef"

export interface LoginStateProperties {
    loader: { display: string },
    showDialog: { display: string },
    showStatusCard: { display: string }
    childRef:  RefObject<INotificationRef>
}
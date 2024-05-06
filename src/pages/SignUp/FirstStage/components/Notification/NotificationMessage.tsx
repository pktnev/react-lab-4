import {LayoutProps} from "../../../../../models/LayoutProps.ts";

const NotificationMessageLayout = ({children}: LayoutProps) => {
    return (
        <div className="font-normal font-['Poppins'] text-sm leading-4.5 text-notification">
            {children}
        </div>
    )
}
const NotificationMessage = () => {
    return (
        <NotificationMessageLayout>
            <span>
                We take privacy issues seriously. You can be sure that your personal data is securely protected.
            </span>
        </NotificationMessageLayout>
    )
}

export default NotificationMessage;
import {MdClose, MdLock} from "react-icons/md";
import NotificationMessage from "./NotificationMessage.tsx";
import {useNotification} from "../../../../../hooks/useNotification.ts";
import {AnimatePresence, motion} from "framer-motion";
import {LayoutProps} from "../../../../../models/LayoutProps.ts";
import {notificationSignal} from "../../../../../hooks/useNotification.ts";

type NotificationLayoutProps = LayoutProps & {
    isVisible: boolean;
}

type NotificationIconLayoutProps = LayoutProps & {
    isCursorPointer?: boolean;
}

const NotificationIconLayout = (props: NotificationIconLayoutProps) => {
    const {children, isCursorPointer} = props;

    return (
        <div
            onClick={() => notificationSignal.value = false}
            className={`text-2xl h-fit text-notification-icon ${isCursorPointer ? 'cursor-pointer hover:brightness-125 duration-200 ease-in-out' : ''}`}>
            {children}
        </div>
    )
}

const NotificationLayout = (props: NotificationLayoutProps) => {
    const {children, isVisible} = props;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className="bg-notification responsive:px-6 rounded-lg p-4 responsive:rounded-none flex gap-4">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

const Notification = () => {
    const isVisible = useNotification();

    return (
        <NotificationLayout isVisible={isVisible}>
            <NotificationIconLayout>
                <MdLock/>
            </NotificationIconLayout>
            <NotificationMessage/>
            <NotificationIconLayout isCursorPointer={true}>
                <MdClose/>
            </NotificationIconLayout>
        </NotificationLayout>
    )
}

export default Notification;
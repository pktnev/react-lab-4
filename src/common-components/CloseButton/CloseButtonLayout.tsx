import {LayoutProps} from "../../models/LayoutProps.ts";

const CloseButtonLayout = ({children} : LayoutProps) => {
    return (
        <div className="size-12 flex items-center justify-center">
            {children}
        </div>
    )
}

export default CloseButtonLayout;
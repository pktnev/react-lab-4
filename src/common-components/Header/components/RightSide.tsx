import CloseButtonLayout from "../../CloseButton/CloseButtonLayout.tsx";
import CloseButton from "../../CloseButton/CloseButton.tsx";
import {LayoutProps} from "../../../models/LayoutProps.ts";

const RightSideLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex items-center justify-end">
            {children}
        </div>
    )
}

const RightSide = () => {
    return (
        <RightSideLayout>
            <CloseButtonLayout>
                <CloseButton/>
            </CloseButtonLayout>
        </RightSideLayout>
    )
}

export default RightSide;
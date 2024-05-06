import {LayoutProps} from "../../../../../../models/LayoutProps.ts";

const CaptionTextLayout = ({children}: LayoutProps) => {
    return (
        <div className="font-['Poppins'] text-xs text-body font-normal">
            {children}
        </div>
    )
}
const CaptionText = () => {
    return (
        <CaptionTextLayout>
            <span>Confirm phone number with code from sms message</span>
        </CaptionTextLayout>
    )
}

export default CaptionText;
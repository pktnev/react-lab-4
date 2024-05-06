import {LayoutProps} from "../../../../../models/LayoutProps.ts";

const PhoneNumberLayout = ({children} : LayoutProps) => {
    return (
        <div className="font-['Roboto'] text-lg text-notification">
            {children}
        </div>
    )
}

export default PhoneNumberLayout;
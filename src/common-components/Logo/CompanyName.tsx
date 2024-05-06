import {LayoutProps} from "../../models/LayoutProps.ts";

const CompanyNameLayout = ({children} : LayoutProps) => {
    return (
        <div className="uppercase text-base leading-5 font-bold font-['Raleway'] select-none">
            {children}
        </div>
    )
}
const CompanyName = () => {
    return (
        <CompanyNameLayout>
            <span>company name</span>
        </CompanyNameLayout>
    )
}

export default CompanyName;
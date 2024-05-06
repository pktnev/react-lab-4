import {LayoutProps} from "../../../models/LayoutProps.ts";
import LogoSymbol from "../../Logo/LogoSymbol.tsx";
import CompanyName from "../../Logo/CompanyName.tsx";

const LeftSideLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex items-center gap-x-2">
            {children}
        </div>
    )
}

const LeftSide = () => {
    return (
        <LeftSideLayout>
            <LogoSymbol/>
            <CompanyName/>
        </LeftSideLayout>
    )
}

export default LeftSide;
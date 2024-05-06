import {LayoutProps} from "../models/LayoutProps.ts";

const TopLine = ({children} : LayoutProps) => {
    return (
        <div className="responsive:text-center responsive:w-full responsive:px-6">
            {children}
        </div>
    )
}

export default TopLine;
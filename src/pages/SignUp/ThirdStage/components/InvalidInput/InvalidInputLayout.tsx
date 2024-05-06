import {LayoutProps} from "../../../../../models/LayoutProps.ts";

const InvalidInputLayout = ({children} : LayoutProps) => {
    return (
        <div className="responsive:w-full responsive:px-6">
            {children}
        </div>
    )
}

export default InvalidInputLayout;
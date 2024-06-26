import {LayoutProps} from "../models/LayoutProps.ts";

const FieldContainer = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}

export default FieldContainer;
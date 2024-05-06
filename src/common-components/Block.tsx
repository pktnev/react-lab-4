import {LayoutProps} from "../models/LayoutProps.ts";

const Block = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col w-full">
            {children}
        </div>
    )
}

export default Block;
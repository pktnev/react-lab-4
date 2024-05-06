import {LayoutProps} from "../models/LayoutProps.ts";

const TopTextLayout = ({ children }: LayoutProps) => {
    return (
        <div className="text-9xl font-semibold">
            {children}
        </div>
    )
}

const BottomTextLayout = ({children}: LayoutProps) => {
    return (
        <div className="uppercase text-3xl opacity-80 font-semibold">
            {children}
        </div>
    )
}

const ErrorPageLayout = ({children} : LayoutProps) => {
    return (
        <div className="w-full text-notification font-['Poppins'] h-screen flex flex-col items-center select-none justify-center">
            {children}
        </div>
    )
}

const Error = () => {
    return (
        <ErrorPageLayout>
            <TopTextLayout>
                <span>404</span>
            </TopTextLayout>
            <BottomTextLayout>
                <span>page not found</span>
            </BottomTextLayout>
        </ErrorPageLayout>
    )
}

export default Error;
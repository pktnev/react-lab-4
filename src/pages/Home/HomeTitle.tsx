import {LayoutProps} from "../../models/LayoutProps.ts";

const HomeTitleLayout = ({children}: LayoutProps) => {
    return (
        <div className="font-['Roboto'] font-normal text-notification text-6xl">
            {children}
        </div>
    )
}

const HomeTitle = () => {
    return (
        <HomeTitleLayout>
            <span className="text-4xl font-bold animate-pulse">Home Page</span>
        </HomeTitleLayout>
    )
}

export default HomeTitle;
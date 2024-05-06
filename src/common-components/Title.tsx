import {LayoutProps} from "../models/LayoutProps.ts";

type TitleProps = {
    text: string;
}

const TitleLayout = ({ children } : LayoutProps) => {
    return (
        <div className="pb-4 font-['Poppins'] text-notification text-8 leading-9 font-bold">
            {children}
        </div>
    )
}

const Title = (props: TitleProps) => {
    const {text} = props;

    return (
        <TitleLayout>
            <h1>{text}</h1>
        </TitleLayout>
    );
}

export default Title;
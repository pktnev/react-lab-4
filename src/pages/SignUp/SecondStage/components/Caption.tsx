import {LayoutProps} from "../../../../models/LayoutProps.ts";

type CaptionTextProps = LayoutProps & {
    text?: string
}

const Caption = (props: CaptionTextProps) => {
    const {children, text} = props;

    return (
        <div className={`${text ? text : 'text-body '} text-sm leading-4.5 items-center flex gap-2 font-normal font-['Poppins']`}>
            {children}
        </div>
    )
}

export default Caption;
import {LayoutProps} from "../../../../../../models/LayoutProps.ts";

const CodeConfirmationLabelLayout = ({children}: LayoutProps) => {
    return (
        <div className="text-sm leading-4.5 font-['Poppins'] font-normal">
            {children}
        </div>
    )
}
const Label = () => {
    return (
        <CodeConfirmationLabelLayout>
            <span>Confirmation code</span>
        </CodeConfirmationLabelLayout>
    )
}

export default Label;
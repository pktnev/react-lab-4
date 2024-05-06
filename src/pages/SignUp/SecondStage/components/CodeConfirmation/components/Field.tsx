import Label from "./Label.tsx";
import CodeInput from "./CodeInput.tsx";
import CaptionText from "./CaptionText.tsx";
import {LayoutProps} from "../../../../../../models/LayoutProps.ts";

const CodeConfirmationFieldLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}
const Field = () => {
    return (
        <CodeConfirmationFieldLayout>
            <Label/>
            <CodeInput/>
            <CaptionText/>
        </CodeConfirmationFieldLayout>
    )
}

export default Field;
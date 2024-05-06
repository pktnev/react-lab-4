import Field from "./components/Field.tsx";
import SendAgainBtn from "./components/SendAgainBtn.tsx";
import {LayoutProps} from "../../../../../models/LayoutProps.ts";

const CodeConfirmationLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex mb-8 gap-4 responsive:w-full responsive:px-4 responsive:flex-col">
            {children}
        </div>
    )
}

const CodeConfirmation = () => {
    return (
        <CodeConfirmationLayout>
            <Field/>
            <SendAgainBtn/>
        </CodeConfirmationLayout>
    )
}

export default CodeConfirmation;
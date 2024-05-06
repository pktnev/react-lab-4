import BlockContainer from "../../../../common-components/BlockContainer.tsx";
import Phone from "./Phone.tsx";
import {useDialCodes} from "../../../../hooks/use-dial-codes.ts";
import SelectElement from "../../../../common-components/SelectElement/SelectElement.tsx";
import {Selection} from "../../../../models/Selection.ts";
import { LayoutProps } from "../../../../models/LayoutProps.ts"
import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";

const PhoneNumberInputLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex gap-4 w-full h-11">
            {children}
        </div>
    )
}

const PhoneInputLabel = () => {
    return (
        <FieldLabelLayout>
            <label>Enter you phone number</label>
        </FieldLabelLayout>
    )
}

const PhoneInput = () => {
    const dialCodes = useDialCodes();

    return (
        <BlockContainer>
            <PhoneInputLabel/>
            <PhoneNumberInputLayout>
                <SelectElement
                    width={'w-28'}
                    type={Selection.NORMAL}
                    options={dialCodes}
                    id={'dialCode'}/>
                <Phone/>
            </PhoneNumberInputLayout>
        </BlockContainer>
    );
}

export default PhoneInput;
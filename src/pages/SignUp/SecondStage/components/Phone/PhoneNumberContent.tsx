import PhoneNumberContentLayout from "./PhoneNumberContentLayout.tsx";
import PhoneNumber from "./PhoneNumber.tsx";
import Caption from "../Caption.tsx";

const PhoneNumberContent = () => {
    return (
        <PhoneNumberContentLayout>
            <PhoneNumber/>
            <Caption>
                <span>Number not confirmed yet</span>
            </Caption>
        </PhoneNumberContentLayout>
    )
}

export default PhoneNumberContent;
import PhoneNumberContentLayout
    from "../../../SignUp/SecondStage/components/Phone/PhoneNumberContentLayout.tsx";
import Caption from "../../../SignUp/SecondStage/components/Caption.tsx";
import IconLayout from "../../../../common-components/IconLayout.tsx";
import {IoMdCheckmark} from "react-icons/io";
import PhoneNumberContainer from "../../../../common-components/PhoneNumberContainer.tsx";
import PhoneNumberLayout from "../../../SignUp/SecondStage/components/Phone/PhoneNumberLayout.tsx";
import {getItin} from "../helpers.ts";

const Itin = () => {
    return (
        <PhoneNumberContainer>
            <PhoneNumberContentLayout>
                <PhoneNumberLayout>
                    <span>{getItin()}</span>
                </PhoneNumberLayout>
                <Caption>
                    <IconLayout textSize={"text-lg"} size={"size-4.5"}>
                        <IoMdCheckmark/>
                    </IconLayout>
                    <span>Your ITIN</span>
                </Caption>
            </PhoneNumberContentLayout>
        </PhoneNumberContainer>
    )
}

export default Itin;
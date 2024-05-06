import PhoneNumber from "../../SecondStage/components/Phone/PhoneNumber.tsx";
import Caption from "../../SecondStage/components/Caption.tsx";
import IconLayout from "../../../../common-components/IconLayout.tsx";
import {IoMdCheckmark} from "react-icons/io";
import PhoneNumberContentLayout from "../../SecondStage/components/Phone/PhoneNumberContentLayout.tsx";

const ConfirmedPhone = () => {

    return (
        <PhoneNumberContentLayout>
            <PhoneNumber/>
            <Caption>
                <IconLayout textSize={"text-lg"} size={"size-4.5"}>
                    <IoMdCheckmark/>
                </IconLayout>
                <span>Number confirmed</span>
            </Caption>
        </PhoneNumberContentLayout>
    )
}

export default ConfirmedPhone;
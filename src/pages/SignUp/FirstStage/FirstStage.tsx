import TopLine from "../../../common-components/TopLine.tsx";
import Title from "../../../common-components/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText.tsx";
import Notification from "./components/Notification/Notification.tsx";
import PhoneInputForm from "./components/PhoneInputForm.tsx";
import PhoneInput from "./components/PhoneInput.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import Button from "../../../common-components/Button.tsx";

const FirstStage = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Registration'}/>
                <BodyText type={BodyTextType.REGISTRATION}/>
            </TopLine>
            <Notification/>
            <PhoneInputForm>
                <PhoneInput/>
                <Button>Send Code</Button>
            </PhoneInputForm>
        </PageContentLayout>
    )
}

export default FirstStage;
import TopLine from "../../../common-components/TopLine.tsx";
import Title from "../../../common-components/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText.tsx";
import Notification from "../FirstStage/components/Notification/Notification.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import PhoneNumberContent from "./components/Phone/PhoneNumberContent.tsx";
import PhoneNumberContainer from "../../../common-components/PhoneNumberContainer.tsx";
import Pencil from "./components/Pencil.tsx";
import CodeConfirmation from "./components/CodeConfirmation/CodeConfirmation.tsx";
import ConfirmationCodeForm from "./components/ConfirmationCodeForm.tsx";
import Button from "../../../common-components/Button.tsx";

const SecondStageContent = () => {

    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Registration'}/>
                <BodyText type={BodyTextType.REGISTRATION}/>
            </TopLine>
            <Notification/>
            <PhoneNumberContainer>
                <PhoneNumberContent/>
                <Pencil/>
            </PhoneNumberContainer>
            <ConfirmationCodeForm>
                <CodeConfirmation/>
                <Button>Confirm</Button>
            </ConfirmationCodeForm>
        </PageContentLayout>
    )
}

export default SecondStageContent;
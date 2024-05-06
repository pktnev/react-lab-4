import TopLine from "../../../common-components/TopLine.tsx";
import Title from "../../../common-components/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText.tsx";
import Notification from "../FirstStage/components/Notification/Notification.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import PhoneNumberContainer from "../../../common-components/PhoneNumberContainer.tsx";
import ConfirmedPhone from "./components/ConfirmedPhone.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import Button from "../../../common-components/Button.tsx";
import EmailPasswordForm from "./components/EmailPasswordForm.tsx";
import Email from "./components/Inputs/Email.tsx";
import Password from "./components/Inputs/Password.tsx";

const ThirdStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Registration'}/>
                <BodyText type={BodyTextType.REGISTRATION}/>
            </TopLine>
            <Notification/>
            <PhoneNumberContainer>
                <ConfirmedPhone/>
            </PhoneNumberContainer>
            <EmailPasswordForm>
                <BlockContainer>
                    <Email/>
                    <Password/>
                </BlockContainer>
                <Button primary={true}>Register Now</Button>
            </EmailPasswordForm>
        </PageContentLayout>
    )
}

export default ThirdStageContent;

import Title from "../../../common-components/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText.tsx";
import TopLine from "../../../common-components/TopLine.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import SubHead from "../../../common-components/SubHead/SubHead.tsx";
import Email from "./components/Inputs/Email.tsx";
import SecondProfileInfoForm from "./components/SecondProfileInfoForm.tsx";
import Button from "../../../common-components/Button.tsx";
import {MdArrowRightAlt} from "react-icons/md";
import Block from "../../../common-components/Block.tsx";
import PhoneNumberIn from "./components/Inputs/PhoneNumberIn.tsx";
import AddSocialButton from "./components/AddSocialButton.tsx";
import SocialsList from "./components/SocialsList.tsx";
import Separator from "../../../common-components/Separator.tsx";
import InvalidInput from "../../../common-components/InvalidInput.tsx";
import {getErrorMessages} from "./helpers.ts";

const SecondStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Profile info'}/>
                <BodyText type={BodyTextType.PROFILE_INFO}/>
            </TopLine>
            <Separator/>
            <SecondProfileInfoForm>
                <Block>
                    <InvalidInput getMessagesFunc={getErrorMessages}/>
                    <BlockContainer isMarginBottom={false}>
                        <SubHead
                            topLineText={'Contacts'}
                            bottomLineText={'These contacts are used to inform about orders'}
                        />
                        <Email message={'Email is required'}/>
                        <PhoneNumberIn message={'Phone number is required'}/>
                        <SubHead
                            topLineText={'Social network'}
                            bottomLineText={'TIndicate the desired communication method'}
                        />
                        <SocialsList/>
                        <AddSocialButton/>
                    </BlockContainer>
                </Block>
                <Button>
                    <span>Go Next</span>
                    <MdArrowRightAlt className="text-2xl"/>
                </Button>
            </SecondProfileInfoForm>
        </PageContentLayout>
    )
}

export default SecondStageContent;

import Title from "../../../common-components/Title.tsx";
import BodyText, { BodyTextType } from "../../../common-components/BodyText.tsx";
import TopLine from "../../../common-components/TopLine.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import Separator from "../../../common-components/Separator.tsx";
import ThirdProfileInfoForm from "./ThirdProfileInfoForm.tsx";
import Block from "../../../common-components/Block.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import SubHead from "../../../common-components/SubHead/SubHead.tsx";
import Button from "../../../common-components/Button.tsx";
import { IoMdCheckmark } from "react-icons/io";
import Address from "./Inputs/Address.tsx";
import Country from "../FirstStage/components/Inputs/Country.tsx";
import InputsSeparator from "../../../common-components/InputsSeparator.tsx";
import ZipCode from "./Inputs/ZipCode.tsx";
import Optional from "./Inputs/Optional.tsx";
import InvalidInput from "../../../common-components/InvalidInput.tsx";
import { getErrorMessages } from "./helpers.ts";
import City from "../FirstStage/components/Inputs/City.tsx";
import { appDataSignal } from "../../../App.tsx";

const ThirdStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Profile info'} />
                <BodyText type={BodyTextType.PROFILE_INFO} />
            </TopLine>
            <Separator />
            <ThirdProfileInfoForm>
                <Block>
                    <InvalidInput getMessagesFunc={getErrorMessages} />
                    <BlockContainer isMarginBottom={false}>
                        <SubHead
                            topLineText={'Delivery address'}
                            bottomLineText={'Used for shipping orders'}
                        />
                        <Address />
                        <City
                            initialValue={appDataSignal.value.city}
                        />
                        <InputsSeparator>
                            <Country
                                initialValue={appDataSignal.value.country}
                            />
                            <ZipCode />
                        </InputsSeparator>
                        <Optional />
                    </BlockContainer>
                </Block>
                <Button primary={true}>
                    <IoMdCheckmark />
                    <span>Save</span>
                </Button>
            </ThirdProfileInfoForm>
        </PageContentLayout>
    )
}

export default ThirdStageContent;

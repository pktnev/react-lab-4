import Title from "../../../common-components/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText.tsx";
import TopLine from "../../../common-components/TopLine.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import Agreement from "./components/Agreement.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import FirstName from "./components/Inputs/FirstName.tsx";
import FirstProfileInfoForm from "./components/FirstProfileInfoForm.tsx";
import Button from "../../../common-components/Button.tsx";
import {MdArrowRightAlt} from "react-icons/md";
import SecondName from "./components/Inputs/SecondName.tsx";
import SubHead from "../../../common-components/SubHead/SubHead.tsx";
import DataOfBirth from "./components/Inputs/DataOfBirth.tsx";
import Country from "./components/Inputs/Country.tsx";
import InputsSeparator from "../../../common-components/InputsSeparator.tsx";
import City from "./components/Inputs/City.tsx";
import Itin from "./components/Itin.tsx";
import Block from "../../../common-components/Block.tsx";
import InvalidInput from "../../../common-components/InvalidInput.tsx";
import Separator from "../../../common-components/Separator.tsx";
import {getErrorMessages} from "./helpers.ts";

const FirstStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Profile info'}/>
                <BodyText type={BodyTextType.PROFILE_INFO}/>
            </TopLine>
            <FirstProfileInfoForm>
                <Agreement/>
                <Separator/>
                <Block>
                    <InvalidInput getMessagesFunc={getErrorMessages}/>
                    <BlockContainer isMarginBottom={false}>
                        <SubHead
                            topLineText={'Personal data'}
                            bottomLineText={'Specify exactly as in your passport'}
                        />
                        <FirstName/>
                        <SecondName/>
                        <DataOfBirth/>
                        <InputsSeparator>
                            <Country/>
                            <City/>
                        </InputsSeparator>
                    </BlockContainer>
                </Block>
                <Itin/>
                <Button>
                    <span>Go Next</span>
                    <MdArrowRightAlt className="text-2xl"/>
                </Button>
            </FirstProfileInfoForm>
        </PageContentLayout>
    )
}

export default FirstStageContent;
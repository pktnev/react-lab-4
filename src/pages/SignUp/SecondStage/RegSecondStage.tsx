import PageLayout from "../../../common-components/PageLayout.tsx";
import LeftSide from "../../../common-components/Header/components/LeftSide.tsx";
import RightSide from "../../../common-components/Header/components/RightSide.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import CenterLayout from "../../../common-components/Header/components/CenterLayout.tsx";
import SecondStageContent from "./SecondStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../hooks/use-stage-navigation.ts";

const RegSecondStage = () => {
    const checked = useStageNavigation(RegistrationPageType.NORMAL, "number_validation");

    if(!checked) return null;
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={"number_validation"}/>
                <SecondStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default RegSecondStage;
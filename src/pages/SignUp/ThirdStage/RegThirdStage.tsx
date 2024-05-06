
import PageLayout from "../../../common-components/PageLayout.tsx";
import LeftSide from "../../../common-components/Header/components/LeftSide.tsx";
import RightSide from "../../../common-components/Header/components/RightSide.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import CenterLayout from "../../../common-components/Header/components/CenterLayout.tsx";
import ThirdStageContent from "./ThirdStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../hooks/use-stage-navigation.ts";

const RegThirdStage = () => {
    const checked = useStageNavigation(RegistrationPageType.NORMAL, "create_account");

    if (!checked) return null;
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={"create_account"}/>
                <ThirdStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default RegThirdStage;

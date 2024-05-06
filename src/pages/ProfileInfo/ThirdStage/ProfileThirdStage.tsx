import LeftSide from "../../../common-components/Header/components/LeftSide.tsx";
import CenterLayout from "../../../common-components/Header/components/CenterLayout.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import RightSide from "../../../common-components/Header/components/RightSide.tsx";
import PageLayout from "../../../common-components/PageLayout.tsx";
import ThirdStageContent from "./ThirdStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../hooks/use-stage-navigation.ts";

const ProfileThirdStage = () => {
    const checked = useStageNavigation(RegistrationPageType.PERSONAL_INFO, "delivery_data");

    if (!checked) return null;
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={"delivery_data"}/>
                <ThirdStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default ProfileThirdStage;
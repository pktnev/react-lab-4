import LeftSide from "../../../common-components/Header/components/LeftSide.tsx";
import CenterLayout from "../../../common-components/Header/components/CenterLayout.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import RightSide from "../../../common-components/Header/components/RightSide.tsx";
import PageLayout from "../../../common-components/PageLayout.tsx";
import SecondStageContent from "./SecondStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../hooks/use-stage-navigation.ts";

const ProfileSecondStage = () => {
    const checked = useStageNavigation(RegistrationPageType.PERSONAL_INFO, "contacts_data");

    if (!checked) return null;
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={"contacts_data"}/>
                <SecondStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default ProfileSecondStage;
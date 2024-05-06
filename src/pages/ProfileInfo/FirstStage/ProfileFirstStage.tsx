import LeftSide from "../../../common-components/Header/components/LeftSide.tsx";
import CenterLayout from "../../../common-components/Header/components/CenterLayout.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import RightSide from "../../../common-components/Header/components/RightSide.tsx";
import PageLayout from "../../../common-components/PageLayout.tsx";
import FirstStageContent from "./FirstStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../hooks/use-stage-navigation.ts";

const ProfileFirstStage = () => {
    const checked = useStageNavigation(RegistrationPageType.PERSONAL_INFO, "personal_data");


    if (!checked) return null;
    console.log('');

    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={"personal_data"}/>
                <FirstStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default ProfileFirstStage;
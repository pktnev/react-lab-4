import PageLayout from "../../../common-components/PageLayout.tsx";
import LeftSide from "../../../common-components/Header/components/LeftSide.tsx";
import RightSide from "../../../common-components/Header/components/RightSide.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import CenterLayout from "../../../common-components/Header/components/CenterLayout.tsx";
import FirstStage from "./FirstStage.tsx";
const RegFirstStage = () => {
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={"number_input"}/>
                <FirstStage/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default RegFirstStage;
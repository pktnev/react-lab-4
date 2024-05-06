import {LayoutProps} from "../../../../models/LayoutProps.ts";
import Indicator from "./components/Indicator.tsx";
import Line from "./components/Line.tsx";

type ProgressbarProps = {
    stage: string;
}

const ProgressbarLayout = ({children} : LayoutProps) => {
    return(
        <div className="flex gap-x-2 items-center max-w-114">
            {children}
        </div>
    )
}

const Progressbar = (props: ProgressbarProps) => {
    const {stage} = props;

    if (stage == "number_input")
        return (
            <ProgressbarLayout>
                <Indicator active={true}/>
                <Line active={false}/>
                <Indicator active={false}/>
                <Line active={false}/>
                <Indicator active={false}/>
            </ProgressbarLayout>
        )
    else if (stage == "number_validation")
        return (
            <ProgressbarLayout>
                <Indicator active={true}/>
                <Line active={true}/>
                <Indicator active={true}/>
                <Line active={false}/>
                <Indicator active={false}/>
            </ProgressbarLayout>
        )
    else if (stage == "create_account")
        return (
            <ProgressbarLayout>
                <Indicator active={true}/>
                <Line active={true}/>
                <Indicator active={true}/>
                <Line active={true}/>
                <Indicator active={true}/>
            </ProgressbarLayout>
        )
    else return null;
}

export default Progressbar;
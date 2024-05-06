import TopLine from "./components/TopLine.tsx";
import BottomLine from "./components/BottomLine.tsx";
import {LayoutProps} from "../../models/LayoutProps.ts";

type SubHeadProps = {
    topLineText: string;
    bottomLineText: string;
}

const SubHeadLayout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col gap-0.5">
            {children}
        </div>
    )
}

const SubHead = (props: SubHeadProps) => {
    const {topLineText, bottomLineText} = props;

    return (
        <SubHeadLayout>
            <TopLine text={topLineText}/>
            <BottomLine text={bottomLineText}/>
        </SubHeadLayout>
    )
}

export default SubHead;
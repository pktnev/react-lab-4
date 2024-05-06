import AgreementCheckbox from "./AgreementCheckbox.tsx";
import {handleTermsClick} from "../handlers.tsx";
import {LayoutProps} from "../../../../models/LayoutProps.ts";

type AgreementTextLayoutProps = LayoutProps & {
    color?: string;
    weight?: string;
    handleClick?: () => void;
    cursor?: string;
}

const AgreementTextLayout = (props: AgreementTextLayoutProps) => {
    const {children, color, weight, cursor, handleClick} = props;

    return (
        <div
            onClick={handleClick}
            className={`
            ${weight ? weight : 'font-normal'} 
            ${color ? color : 'text-notification'} 
            ${cursor ? cursor : 'cursor-auto'}
            text-base font-['Roboto']`}>
            {children}
        </div>
    )
}

const AgreementBlockLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex gap-2 h-8 w-full items-center responsive:justify-center"}>
            {children}
        </div>
    )
}

const Agreement = () => {
    return (
        <AgreementBlockLayout>
            <AgreementCheckbox/>
            <AgreementTextLayout>
                <span>I agree with</span>
            </AgreementTextLayout>
            <AgreementTextLayout
                handleClick={handleTermsClick}
                cursor={'cursor-pointer'}
                color={'text-primary'}
                weight={'font-medium'}>
                <a>Terms of use</a>
            </AgreementTextLayout>
        </AgreementBlockLayout>
    )
}

export default Agreement;
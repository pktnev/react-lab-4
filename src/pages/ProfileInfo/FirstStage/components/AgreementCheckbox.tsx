import {useFormContext} from "react-hook-form";
import {LayoutProps} from "../../../../models/LayoutProps.ts";

const AgreementCheckboxLayout = ({children} : LayoutProps) => {
    return (
        <div className={"h-full w-8 flex items-center justify-center"}>
            {children}
        </div>
    )
}

const AgreementCheckbox = () => {
    const {register} = useFormContext();

    return (
        <AgreementCheckboxLayout>
            <input
                {...register('agreement', {required: true})}
                className="size-6"
                type={"checkbox"}
            />
        </AgreementCheckboxLayout>
    )
}

export default AgreementCheckbox;
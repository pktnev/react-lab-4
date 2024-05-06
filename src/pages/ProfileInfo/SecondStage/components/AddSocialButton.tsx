import {FaPlus} from "react-icons/fa6";
import {LayoutProps} from "../../../../models/LayoutProps.ts";
import {useContext} from "react";
import {SocialNetworkContext} from "./SecondProfileInfoForm.tsx";

const AddSocialNetworkButtonLayout = ({children}: LayoutProps) => {
    const {append} = useContext(SocialNetworkContext);

    return (
        <button
            onClick={() => {
                append({type: '', value: ''}, {shouldFocus: true})
            }}
            type={'button'}
            className={"flex active:scale-95 w-fit ease-in-out h-8 text-primary items-center gap-2 text-base font-['Roboto'] font-medium"}>
            {children}
        </button>
    )
}

const IconLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center justify-center h-full text-lg"}>
            {children}
        </div>
    )
}

const AddSocialButton = () => {
    return (
        <AddSocialNetworkButtonLayout>
            <IconLayout>
                <FaPlus/>
            </IconLayout>
            <span>Add More</span>
        </AddSocialNetworkButtonLayout>
    )
}

export default AddSocialButton;
import {useFormContext} from "react-hook-form";
import SocialsElement from "./SocialsElement.tsx";
import {useContext} from "react";
import {SocialNetworkContext} from "./SecondProfileInfoForm.tsx";

const SocialsList = () => {
    const {register} = useFormContext();
    const {fields} = useContext(SocialNetworkContext);

    return (
        <>
            {fields.map((field, index) => (
                <SocialsElement
                    key={field.id}
                    index={index}
                    register={register}
                />
            ))}
        </>
    )
}

export default SocialsList;
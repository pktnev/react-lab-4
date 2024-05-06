import SelectElement from "../../../../common-components/SelectElement/SelectElement.tsx";
import {Selection} from "../../../../models/Selection.ts";
import {socialNetworks} from "../../../../common-components/SelectElement/social-network-options.tsx";
import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import RemoveSocialButton from "./RemoveSocialButton.tsx";
import InputsSeparator from "../../../../common-components/InputsSeparator.tsx";
import {useState} from "react";

type SocialNetworkElementProps = {
    index: number;
    register: any;
}

const SocialsElement = (props: SocialNetworkElementProps) => {
    const [isRemoveButtonVisible, setIsRemoveButtonVisible] = useState(false);
    const {index, register} = props;

    return (
        <InputsSeparator visibilitySetter={setIsRemoveButtonVisible}>
            <SelectElement
                type={Selection.NETWORK}
                options={socialNetworks}
                id={`socialNetworks.${index}.type`}
            />
            <InputElement
                placeholder={'@profile'}
                type={'text'}
                register={register}
                id={`socialNetworks.${index}.value`}
            />
            <RemoveSocialButton
                index={index}
                isRemoveButtonVisible={isRemoveButtonVisible}
            />
        </InputsSeparator>
    )
}

export default SocialsElement;
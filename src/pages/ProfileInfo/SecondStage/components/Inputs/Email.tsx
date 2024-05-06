import InputElement from "../../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../../common-components/FieldContainer.tsx";
import {useFormContext} from "react-hook-form";
import {FaRegEnvelope} from "react-icons/fa6";

type EmailInputProps = {
    message: string;
}

const Email = (props: EmailInputProps) => {
    const {message} = props;
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <InputElement
                errorMessage={message}
                LeftIcon={<FaRegEnvelope/>}
                id={'email'}
                register={register}
                type={'email'}
            />
        </FieldContainer>
    )
}

export default Email;
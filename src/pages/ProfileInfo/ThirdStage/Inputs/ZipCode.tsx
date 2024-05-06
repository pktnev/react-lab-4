import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useFormContext} from "react-hook-form";
import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";

const ZipCode = () => {
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Zip code</label>
            </FieldLabelLayout>
            <InputElement
                formatZipCode={true}
                id={'zipCode'}
                register={register}
                type={'text'}
            />
        </FieldContainer>
    )
}

export default ZipCode;
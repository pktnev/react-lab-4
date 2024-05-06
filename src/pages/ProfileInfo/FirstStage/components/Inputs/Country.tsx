import FieldContainer from "../../../../../common-components/FieldContainer.tsx";
import FieldLabelLayout from "../../../../../common-components/FieldLabelLayout.tsx";
import SelectElement from "../../../../../common-components/SelectElement/SelectElement.tsx";
import {useCountries} from "../../../../../hooks/use-countries.ts";
import {Selection} from "../../../../../models/Selection.ts";

type CountryInputProps = {
    initialValue?: string;
}

const Country = (props: CountryInputProps) => {
    const {initialValue} = props;
    const countries = useCountries();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Country</label>
            </FieldLabelLayout>
            <SelectElement
                initialValue = {initialValue}
                type={Selection.NORMAL}
                options={countries}
                id={'country'}/>
        </FieldContainer>
    )
}

export default Country;
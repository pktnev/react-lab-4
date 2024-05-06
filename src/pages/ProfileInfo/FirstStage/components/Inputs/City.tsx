import FieldContainer from "../../../../../common-components/FieldContainer.tsx";
import FieldLabelLayout from "../../../../../common-components/FieldLabelLayout.tsx";
import SelectElement from "../../../../../common-components/SelectElement/SelectElement.tsx";
import {useCities} from "../../../../../hooks/use-cities.ts";
import {Selection} from "../../../../../models/Selection.ts";

type CityInputProps = {
    initialValue?: string;
}

const City = (props: CityInputProps) => {
    const {initialValue} = props;
    const cities = useCities();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>City</label>
            </FieldLabelLayout>
            <SelectElement
                initialValue={initialValue}
                type={Selection.NORMAL}
                options={cities}
                id={'city'}/>
        </FieldContainer>
    )
}

export default City;
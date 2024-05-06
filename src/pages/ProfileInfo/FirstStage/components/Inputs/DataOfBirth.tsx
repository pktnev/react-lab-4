import FieldContainer from "../../../../../common-components/FieldContainer.tsx";
import FieldLabelLayout from "../../../../../common-components/FieldLabelLayout.tsx";
import {IoCaretDown} from "react-icons/io5";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {useSelectedDate} from "../../../../../hooks/use-selected-date.ts";
import {useFormContext} from "react-hook-form";

const DataOfBirth = () => {
    const {setValue} = useFormContext();

    const {selectedDate, setSelectedDate} = useSelectedDate(setValue);

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Date of Birth</label>
            </FieldLabelLayout>
            <DatePicker
                maxDate={new Date()}
                onChange={data=>setSelectedDate(data)}
                value={selectedDate}
                clearIcon={null}
                calendarIcon={<IoCaretDown />}
                format={"dd.MM.yyyy"}
            />
        </FieldContainer>
    )
}

export default DataOfBirth;
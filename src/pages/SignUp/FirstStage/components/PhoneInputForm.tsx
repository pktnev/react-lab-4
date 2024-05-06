import {useForm, SubmitHandler, FormProvider} from "react-hook-form";
import InvalidInput from "./InvalidInput.tsx";
import {LayoutProps} from "../../../../models/LayoutProps.ts";
import {appDataSignal} from "../../../../App.tsx";
import {useNavigate} from "react-router-dom";
import {Phone} from "../../../../models/Phone.ts";

const PhoneInputForm = ({children}: LayoutProps) => {
    const methods = useForm<Phone>();
    const {
        handleSubmit,
        formState: {errors},
    } = methods;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Phone> = (data) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            phoneNumber: data.phoneNumber,
            dialCode: data.dialCode
        }

        navigate('/registration/number_validation');
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col responsive:items-center">
                {errors.phoneNumber && <InvalidInput/>}
                {children}
            </form>
        </FormProvider>
    )
}

export default PhoneInputForm;
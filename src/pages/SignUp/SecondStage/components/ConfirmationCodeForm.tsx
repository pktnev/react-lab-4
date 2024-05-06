import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {ConfirmationCode} from "../../../../models/ConfirmationCode.ts";
import {useNavigate} from "react-router-dom";
import {LayoutProps} from "../../../../models/LayoutProps.ts";
import InvalidInputLayout from "../../FirstStage/components/InvalidInputLayout.tsx";
import {appDataSignal} from "../../../../App.tsx";


const ConfirmationCodeForm = ({children}: LayoutProps) => {
    const methods = useForm<ConfirmationCode>();
    const {handleSubmit, formState: {errors}} = methods;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ConfirmationCode> = (data) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            confirmedNumber: true
        }

        navigate('/registration/create_account');
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                {errors.code && <InvalidInputLayout>Invalid confirmation code</InvalidInputLayout>}
                {children}
            </form>
        </FormProvider>
    )
}

export default ConfirmationCodeForm;
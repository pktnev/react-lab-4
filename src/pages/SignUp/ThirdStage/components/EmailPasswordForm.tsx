import {LayoutProps} from "../../../../models/LayoutProps.ts";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {inputDataSchema} from "../helpers.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import InvalidInput from "./InvalidInput/InvalidInput.tsx";
import {appDataSignal} from "../../../../App.tsx";
import {useNavigate} from "react-router-dom";

type InputsType = {
    email: string,
    password: string
}

const EmailPasswordForm = ({children}: LayoutProps) => {
    const methods = useForm<InputsType>({resolver: zodResolver(inputDataSchema)});
    const {handleSubmit, formState: {errors}} = methods;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            email: data.email,
            password: data.password,
            itin: 12345678
        }

        navigate('/profile-info/personal_data');
    }

    return (
        <FormProvider {...methods}>
            <form
                noValidate
                className="w-full flex justify-center flex-col responsive:items-center"
                onSubmit={handleSubmit(onSubmit)}>
                <InvalidInput errors={errors}/>
                {children}
            </form>
        </FormProvider>
    )
}

export default EmailPasswordForm;
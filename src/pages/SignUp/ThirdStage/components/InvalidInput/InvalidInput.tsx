import InvalidInputLayout from "./InvalidInputLayout.tsx";

type InvalidInputDataProps = {
    errors: any
}

const InvalidInput = (props: InvalidInputDataProps) => {
    const {errors} = props;

    if (errors.email)
        return (
            <InvalidInputLayout>
                <InvalidInputLayout><span>{errors.email.message}</span></InvalidInputLayout>
            </InvalidInputLayout>
        )
    if (errors.password)
        return (
            <InvalidInputLayout>
                <InvalidInputLayout><span>{errors.password.message}</span></InvalidInputLayout>
            </InvalidInputLayout>
        )
    else return null;
}

export default InvalidInput;
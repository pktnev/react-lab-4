
import InvalidInputLayout from "../pages/SignUp/FirstStage/components/InvalidInputLayout.tsx";

type InvalidInputProps = {
    getMessagesFunc: () => string | null;
}

const InvalidInput = (props: InvalidInputProps) => {
    const {getMessagesFunc} = props;
    const message = getMessagesFunc();

    if (!message) return null;
    return (
        <InvalidInputLayout>
            <InvalidInputLayout>{message as string}</InvalidInputLayout>
        </InvalidInputLayout>
    )
}

export default InvalidInput;

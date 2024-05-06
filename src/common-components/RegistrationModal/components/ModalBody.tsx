import {LayoutProps} from "../../../models/LayoutProps.ts";

const ModalBodyLayout = ({children} : LayoutProps) => {
    return (
        <div className={"text-sm text-notification mt-2 font-['Roboto']"}>
            {children}
        </div>
    )
}

type ModalBodyProps = {
    text: string;
}

const ModalBody = (props: ModalBodyProps) => {
    const {text} = props;

    return (
        <ModalBodyLayout>
            <p>{text}</p>
        </ModalBodyLayout>
    )
}

export default ModalBody;
import Button from "../../Button.tsx";
import {Dispatch, SetStateAction} from "react";
import {LayoutProps} from "../../../models/LayoutProps.ts";

const ModalButtonLayout = ({children}: LayoutProps) => {
    return (
        <div className="mt-4">
            {children}
        </div>
    );
}

type ModalButtonProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalButton = (props: ModalButtonProps) => {
    const {setIsOpen} = props;

    return (
        <ModalButtonLayout>
            <Button
                mb={'mb-0'}
                px={'px-10'}
                action={() => setIsOpen(false)}
                primary={true}>
                Okay
            </Button>
        </ModalButtonLayout>
    )
}

export default ModalButton;
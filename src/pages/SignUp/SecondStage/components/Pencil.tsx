import {RiPencilFill} from "react-icons/ri";
import {LayoutProps} from "../../../../models/LayoutProps.ts";
import {useNavigate} from "react-router-dom";

const PencilIconLayout = ({children} : LayoutProps) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/registration/number_input")}
            className="text-2xl cursor-pointer hover:brightness-125 duration-200 ease-in-out size-6 flex items-center justify-center text-primary">
            {children}
        </div>
    )
}

const Pencil = () => {
    return (
        <PencilIconLayout>
            <RiPencilFill/>
        </PencilIconLayout>
    )
}

export default Pencil;
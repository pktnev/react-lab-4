import { handleNumberChange } from "../../handlers.ts";
import {useFormContext} from "react-hook-form";
import {LayoutProps} from "../../../../models/LayoutProps.ts";

const PhoneNumberLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex gap-4 px-4 font-['Roboto'] text-lg text-notification">
            {children}
        </div>
    )
}

const Phone = () => {
    const {register, setValue} = useFormContext();

    return (
        <PhoneNumberLayout>
            <input
                autoComplete="off"
                {...register("phoneNumber", {
                    required: true,
                    minLength: 10,
                })}
                onChange={(event) =>
                    handleNumberChange(event, setValue)
                }
                className="focus:outline-0 border-b border-phone-number focus:border-primary py-2 px-4 responsive:w-full h-full bg-transparent"
            />
        </PhoneNumberLayout>
    );
};

export default Phone;
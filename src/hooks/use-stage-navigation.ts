import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {appDataSignal} from "../App.tsx";

export enum RegistrationPageType {
    PERSONAL_INFO = "personal-info",
    NORMAL = "normal",
}

export const useStageNavigation = (registrationPageType: RegistrationPageType, stage: string) => {
    const [checked, setChecked] = useState(false);

    const navigation = useNavigate();

    useEffect(() => {
        const data = appDataSignal.value;

        if (registrationPageType === RegistrationPageType.NORMAL) {

            if (stage === "number_validation" && (!data.phoneNumber || !data.dialCode)) {
                navigation("/registration/number_input");
            } else if (stage === "create_account" && !data.confirmedNumber) {
                navigation("/registration/number_input");
            }
        }

        if (registrationPageType === RegistrationPageType.PERSONAL_INFO) {
            if (stage === "number_input" && !data.confirmedNumber) {
                navigation("/registration/number_input");
            } else if (stage === "number_validation" &&  (!data.firstName || !data.secondName
                || !data.dateOfBirth || !data.country || !data.city)) {
                navigation("/registration/number_input");
            } else if (stage === "create_account" && data.socialNetworks.length === 0) {
                navigation("/registration/number_input");
            }
        }

        setChecked(true);
    }, []);

    return checked;
}
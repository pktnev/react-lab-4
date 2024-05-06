import {useEffect, useState} from "react";
import { dialCodesApi } from "../api/dial-codes.api.ts";

export const useDialCodes = () => {
    const [dialCodes, setDialCodes] = useState<string[]>([]);

    useEffect(() => {
        dialCodesApi().then((data) => {
            if (!data) return;

            setDialCodes(data);
        })
    }, []);

    return dialCodes;
}
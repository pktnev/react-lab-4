import {Socials} from "./Socials.ts";

export type AppDefault = {
    dialCode: string | null;
    phoneNumber: string | null;
    email: string | null;
    password: string | null;
    confirmedNumber: boolean;
    itin: number | null;
    firstName: string | null;
    secondName: string | null;
    dateOfBirth: Date | null;
    country: string | null;
    city: string | null;
    socialNetworks: Socials[]
}
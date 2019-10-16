import { getString, setString, setNumber, getNumber, setBoolean, getBoolean } from "tns-core-modules/application-settings";

export class BackendService {

    static isLoggedIn(): boolean {
        return !!getString("token");
    }

    static get token(): string {
        return getString("token");
    }

    static set token(theToken: string) {
        setString("token", theToken);
    }

    static get phoneNumber(): string {
        return getString("phoneNumber");
    }

    static set phoneNumber(thePhoneNumber: string) {
        setString("phoneNumber", thePhoneNumber);
    }

    static get code(): number {
        return getNumber("code");
    }

    static set code(theCode: number) {
        setNumber("code", theCode);
    }

    static get upload(): boolean {
        return getBoolean("upload");
    }

    static set upload(theUpload: boolean) {
        setBoolean("upload", theUpload);
    }
}

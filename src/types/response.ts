import { UserType } from "./user";

export interface SaveUserResponse {
    success: boolean;
    data?: UserType;
    message?: string;
}
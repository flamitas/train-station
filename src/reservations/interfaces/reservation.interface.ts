import { Document } from "mongoose";

export interface Reservation extends Document {
    readonly userId: string;
    readonly trainI: string;
    readonly is_cancelled: boolean;
}
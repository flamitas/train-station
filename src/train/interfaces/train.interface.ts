import { Document } from "mongoose";

export interface Train extends Document {
    readonly arrival: string;
    readonly departure: string;
    readonly duration: string;
    readonly availability: number;
}
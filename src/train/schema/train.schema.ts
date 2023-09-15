import { Schema } from "mongoose";

export const TrainSchema = new Schema({
    arrival: { type: String, required: true },
    departure: { type: String, required: true },
    duration: { type: String, required: true },
    availability: { type: Boolean, required: true },
});

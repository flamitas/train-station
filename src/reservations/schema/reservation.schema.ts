import { Schema } from "mongoose";

export const ReservationSchema = new Schema({
    userId: { type: String, required: true },     
    trainId: { type: String, required: true },
    is_cancelled:{ type: Boolean, default: false },
});

  
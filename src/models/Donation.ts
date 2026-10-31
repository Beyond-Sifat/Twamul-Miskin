import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const donationSchema = new Schema(
    {
        tranId: { type: String, required: true, unique: true }, // our own unique ID sent to SSLCommerz
        donorName: { type: String, required: true, trim: true },
        email: { type: String, required: true, lowercase: true, trim: true },
        phone: { type: String, required: true, trim: true },
        amount: { type: Number, required: true, min: 10 }, // adjust to your real minimum
        currency: { type: String, default: "BDT" },
        status: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED", "CANCELLED"],
            default: "PENDING",
            index: true,
        },
        locale: { type: String, enum: ["bn", "en"], default: "bn" },

        // filled after the gateway responds
        sessionKey: String,
        valId: String,
        bankTranId: String,
        cardType: String,
        paidAt: Date,
        gatewayResponse: Schema.Types.Mixed,
    },
    { timestamps: true }
);

export type DonationDoc = InferSchemaType<typeof donationSchema>;

export const Donation: Model<DonationDoc> =
    (models.Donation as Model<DonationDoc>) ||
    model<DonationDoc>("Donation", donationSchema);
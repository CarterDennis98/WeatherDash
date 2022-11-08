import { InferSchemaType, Schema } from 'mongoose';

export const bookmarkSchema = new Schema(
    {
        city: { type: String },
        state: { type: String },
        lat: { type: Number },
        long: { type: Number }
    },
    { _id: false, id: false, minimize: false }
);

export type Bookmark = InferSchemaType<typeof bookmarkSchema>;
import * as mongoose from 'mongoose';
import { bookmarkSchema } from './bookmark';

const options: mongoose.SchemaOptions = {
    collection: 'Users'
};

export const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        bookmarks: { type: [bookmarkSchema] }
    },
    options
);

type IUser = mongoose.InferSchemaType<typeof userSchema>;

interface UserModel extends mongoose.Model<IUser> { };

export const User = mongoose.model<IUser, UserModel>(
    'User',
    userSchema
);
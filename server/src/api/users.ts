import { User } from "../models/users";

export const getUser = async (_id: string) => {
    try {
        return await User.findOne({ _id });
    } catch (error) {
        throw error;
    }
}

export const signIn = async (data: any) => {
    try {
        return await User.findOne({ 'email': data.email });
    } catch (error) {
        throw error;
    }
}

export const signUp = async (data: any) => {
    try {
        return User.create(data);
    } catch (error) {
        throw error;
    }
}

export const updateUser = async (_id: string, data: any) => {
    try {
        return await User.findByIdAndUpdate(_id, data, { returnDocument: 'after' });
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (_id: string) => {
    try {
        return await User.findByIdAndDelete(_id);
    } catch (error) {
        throw error;
    }
}
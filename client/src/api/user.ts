import axios from "axios";

export interface User {
    _id: string,
    email: string,
    password: string,
    bookmarks?: Array<Bookmark>
}

interface Bookmark {
    city: string,
    state: string,
    lat: number,
    long: number
}

export interface GetUserReq {
    _id: string
}
// Get user by id
export async function getUser({ _id }: GetUserReq) {
    try {
        const { data } = await axios.get(
            `/users/${_id}`
        );

        return data;
    } catch (error) {
        console.error(error);
    }
}

export interface LogInUserReq {
    email: string
}
// Attempt to log in a user
export async function loginUser({ email }: LogInUserReq) {
    try {
        const { data } = await axios.post<User>(
            `/users/signin`,
            { email }
        );

        return data;
    } catch (error) {
        console.error(error);
    }
}

export interface CreateUserReq {
    user: Omit<User, "_id">
}
// Create user
export async function createUser({ user }: CreateUserReq): Promise<any> {
    try {
        const { data } = await axios.post<User>(
            `/users/signup`,
            user
        );

        return data;
    } catch (error) {
        throw (error);
    }
}

export interface UpdateUserReq {
    _id: string,
    user: {
        email?: string,
        password?: string,
        bookmarks?: Array<Bookmark>
    }
}
// Update user
export async function updateUser({ _id, user }: UpdateUserReq): Promise<any> {
    try {
        const { data } = await axios.post(
            `/users/${_id}`,
            user
        );

        return data;
    } catch (error) {
        console.error(error);
    }
}
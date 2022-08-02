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
            `http://localhost:5000/users/${_id}`
        );

        return data;
    } catch (error) {
        console.error(error);
    }
}

export interface LogInUserReq {
    email: string,
    password: string
}
// Attempt to log in a user
export async function loginUser({ email, password }: LogInUserReq) {
    try {
        const { data } = await axios.post<User>(
            `http://localhost:${process.env.REACT_APP_MONGO_PORT}/users/signin`,
            { email, password }
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
            `http://localhost:${process.env.REACT_APP_MONGO_PORT}/users/signup`,
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
        bookmarks?: Array<{
            city: string,
            state: string,
            lat: number,
            long: number
        }>
    }
}
// Update user
export async function updateUser({ _id, user }: UpdateUserReq): Promise<any> {
    try {
        const { data } = await axios.post(
            `http://localhost:5000/users/update/${_id}`,
            user
        );

        return data;
    } catch (error) {
        console.error(error);
    }
}
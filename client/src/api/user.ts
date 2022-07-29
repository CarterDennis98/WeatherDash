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
// Get single user by id
export async function getUser({ _id }: GetUserReq) {
    try {
        const { data } = await axios.get<User>(
            `http://localhost:${process.env.REACT_APP_MONGO_PORT}/users/${_id}`
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
export async function createUser({ user }: CreateUserReq): Promise<User> {
    try {
        const { data } = await axios.post<User>(
            `http://localhost:${process.env.REACT_APP_MONGO_PORT}/users`,
            user
        );

        return data;
    } catch (error) {
        throw (error);
    }
}
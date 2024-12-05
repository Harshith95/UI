import axios from 'axios';
import * as userConstants from './userConstants';
import { UserReq } from '../model/UserReq';

export const fetchUserData = async () => {
    try {
        const response = await axios.get(`${userConstants.API_URL}`)
        return response.data;
    } catch (error) {
        console.error("Error while Fetching User Details", error);
        throw error;
    }
}

export const fetchUsersById = async (userIdParam: string) => {
    try {
        const response = await axios.delete(`${userConstants.API_URL}`, {
            params: {
                userId: userIdParam,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error while fetching details of user", ":::", userIdParam, " ::: ", error);
        throw error;
    }
}

export const createUser = async (newUser: UserReq) => {
    try {
        const response = await axios.post(`${userConstants.API_URL}`, newUser, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error Creating Users', error);
        throw error;
    }
}

export const updateUser = async (id: string, updateReq: UserReq) => {
    try {
        const response = await axios.put(`${userConstants.API_URL}/${id}`, updateReq);
        return response.data;
    } catch (error) {
        console.error('Error While Updating Users', error);
        throw error;
    }
}

export const deleteUser = async (id: number) => {
    try {
        const response = await axios.delete(`${userConstants.API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error while deleting users", error);
        throw error;
    }
}
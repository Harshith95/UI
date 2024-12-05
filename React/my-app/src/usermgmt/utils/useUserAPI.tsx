import axios from 'axios';
import * as userConstants from './userConstants';
import { UserReq } from '../model/UserReq';

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
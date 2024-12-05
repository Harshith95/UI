import { useEffect, useState } from 'react';
import { User } from '../model/User';
import { fetchUserData } from '../utils/useUserAPI';


export const useFetchUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    const loadUsers = async () => {
        try {
            const usersData = await fetchUserData();
            setUsers(usersData);
        } catch (error) {
            setError('Failed to load Users');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return { users, loading, error, refetch: fetchUserData }
}

export type { User }
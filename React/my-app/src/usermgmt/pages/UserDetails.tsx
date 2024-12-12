import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchUsersById } from "../utils/useUserAPI";
import { useEffect, useState } from "react";
import { User } from "../model/User";

const UserDetails = () => {
    const { id } = useParams<{ id: string }>();

    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);


    const getUser = async () => {
        try {
            const data = await fetchUsersById(id!);
            setUser(data);
        } catch (error) {
            console.error('Error fetching user details', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser();
    }, [id])


    if (!loading) {
        return <CircularProgress />
    }

    if (!user) {
        return <Typography>User not found</Typography>
    }

    return (<>
        <Box>
            <Typography>{user.name}</Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.age}</Typography>
            <Typography>{user.street}</Typography>
        </Box>
    </>);
}

export default UserDetails;
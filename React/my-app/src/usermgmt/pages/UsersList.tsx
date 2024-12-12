import { Box, Grid } from "@mui/material";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { deleteUser } from "../utils/useUserAPI";
import UserCard from "./UserCard";

const UsersList = () => {
    const { users, loading, error, refetch } = useFetchUsers();

    const handleDelete = async (id: number) => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            try {
                await deleteUser(id);
                alert('User Deleted Successfully');
                refetch();
            } catch (error) {
                console.error();
                alert('Failed to delete user, please try again');
            }
        } else {
            alert('You have cancelled the request');
        }
    }

    return (
        <Box sx={{ marginLeft: '200px', padding: 3 }}>
            <Grid container spacing={3}>
                {
                    users.map(us => (
                        <UserCard key={us.id} user={us} onDelete={handleDelete} />
                    ))
                }
            </Grid>
        </Box>
    );
}
export default UsersList;
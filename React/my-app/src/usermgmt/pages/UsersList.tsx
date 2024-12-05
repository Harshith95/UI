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
        users.map(us => (
            <UserCard key={us.id} user={us} onDelete={handleDelete} />
        ))
    );
}
export default UsersList;
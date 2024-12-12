import React from 'react';
import { Card, CardContent, Typography, Grid, Stack, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface UserCardProps {
    user: { id: number, name: string, email: string };
    onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardContent>
                    <Typography variant="h6">{user.name}</Typography>
                    <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
                        {/* Edit Button */}
                        <Button component={Link} to={`/users/edit/${user.id}`} variant="outlined" color="primary"  fullWidth>
                            Edit
                        </Button>

                        {/* Delete Button */}
                        <Button variant="outlined" color="secondary"onClick={() => onDelete(user.id)} fullWidth>
                            Delete
                        </Button>
                    </Stack>
                    <Box sx={{ marginTop: 2 }}>
                        <Button   component={Link}  to={`/users/${user.id}`} variant="text" color="primary">
                            View Details
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default UserCard;

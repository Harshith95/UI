import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

interface UserFormProps {

    mode: 'create' | 'update';

    userData: {
        name: string;
        email: string;
        phone: string;
        website: string;
    };

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

    onSubmit: (e: React.FormEvent) => void;

}

const UserForm: React.FC<UserFormProps> = ({ mode, userData, onChange, onSubmit }) => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        {mode === 'create' ? 'Create User' : 'Update User'}
                    </Typography>
                </Paper>

                <form onSubmit={onSubmit}>
                    <TextField label="Name" name="name" value={userData.name} onChange={onChange} fullWidth required margin="normal" />
                    <TextField label="Email" name="email" value={userData.email} onChange={onChange} fullWidth required margin="normal" />
                    <TextField label="Phone" name="phone" value={userData.phone} onChange={onChange} fullWidth required margin="normal" />
                    <TextField label="Website" name="website" value={userData.website} onChange={onChange} fullWidth required margin="normal" />
                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#646cff', color: 'white', '&:hover': { backgroundColor: '#4a54e1' }}} fullWidth>
                        {mode === 'create' ? 'CREATE USER' : 'UPDATE USER'}
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default UserForm;
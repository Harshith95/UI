import { Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

type loginProps = {
    onLogin: (email: string) => void;
}

const Login: React.FC<loginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        setError(null);
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 100));

        if (email === 'a@a' && password === 'test') {
            onLogin(email);
        } else {
            setError('Invalid Login');
        }
        setLoading(false);
        if (loading) {
            return <CircularProgress />;
        }
    }


    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '50vh', backgroundColor: '#f4f6f8', padding: '0 2rem' }}>
            <Grid item xs={12} sm={10} md={8} lg={12} style={{ width: '100%' }}>
                <Paper elevation={6} style={{ padding: '2rem', borderRadius: '8px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
                    <Typography variant="h5" align="center" gutterBottom style={{ marginBottom: '1.5rem' }}>Login</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required variant="outlined" style={{ marginBottom: '1rem' }} />
                        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" required variant="outlined" style={{ marginBottom: '1rem' }} />
                        {error && <Typography color="error" variant="body2" align="center" style={{ marginTop: '1rem' }}>{error}</Typography>}
                        <Box mt={2}>
                            <Button variant="contained" color="primary" fullWidth type="submit" style={{ padding: '0.75rem', textTransform: 'none', fontWeight: 600 }}>Login</Button>
                        </Box>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
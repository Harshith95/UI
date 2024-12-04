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
            console.error("Email:", email, "Password", password);
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
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={10} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Typography variant="h5" align="center" gutterBottom>Login</Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField label="Email" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal"
                            required />

                        <TextField label="Password" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal"
                            required />
                        {
                            error && (
                                <Typography color="error" variant="body2" align="center" style={{ marginTop: '1rem' }}>
                                    {error}
                                </Typography>
                            )
                        }

                        <Box mt={2}>
                            <Button variant="contained" color="primary" fullWidth type="submit">Login</Button>
                        </Box>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login;
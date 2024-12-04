import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar: React.FC<{ user: string | null; onlogout: () => void }> = ({ user, onlogout }) => {
    return (
        <AppBar position="fixed" sx={{ width: '200px', height: '100vh', left: 0, top: 0, }}>
            <Toolbar sx={{ flexDirection: 'column', alignItems: 'flex-start', p: 2 }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    My Application
                </Typography>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
                <Button component={Link} to="/about" color="inherit">
                    About
                </Button>
                <Button component={Link} to="/users" color="inherit">
                    Users
                </Button>
                {
                    user && (
                        <Button color="inherit" onClick={onlogout} sx={{ justifyContent: 'flex-start', width: '100%', textAlign: 'left' }}>
                            Logout
                        </Button>
                    )

                }
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
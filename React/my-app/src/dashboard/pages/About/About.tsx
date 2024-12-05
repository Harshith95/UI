import { Typography } from "@mui/material";

const About = () => {
    return (
        <Typography variant="h1" sx={{ backgroundColor: 'white', color: '#646cff', '&:hover': { backgroundColor: '#f1f1f1' }, padding: '10px', borderRadius: '5px' }}>This is About component</Typography>
    );
}

export default About;
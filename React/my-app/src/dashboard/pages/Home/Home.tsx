import { Typography } from "@mui/material";

const Home = () => {
    return (
        <Typography variant="h1" sx={{ backgroundColor: 'white', color: '#646cff', '&:hover': { backgroundColor: '#f1f1f1' }, padding: '10px', borderRadius: '5px' }}>This is Home component</Typography>
    )
}

export default Home;
import { Box, Grid2 } from "@mui/material";
import AppTitle from "./Components/AppTitle";

const HomePage: React.FC = () => {
  return (
    <>
      <AppTitle />
      <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <Box>Insert some information here regarding services</Box>
        </Grid2>
        <Grid2 size={4}>
          <Box>Insert some information here regarding services</Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default HomePage;

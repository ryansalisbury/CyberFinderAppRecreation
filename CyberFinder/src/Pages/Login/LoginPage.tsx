import { Paper, Stack, TextField, Typography } from "@mui/material";
import LoginButton from "./Components/LoginButton";
import { FormProvider, useForm } from "react-hook-form";

const LoginPage: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  return (
    <Stack alignContent="center">
      <Paper sx={{ padding: 2, boxShadow: 5 }}>
        <Stack alignContent="center">
          <FormProvider {...methods}>
            <Typography variant="h3">Login</Typography>
            <TextField label="Username:" sx={{ padding: 2 }} />
            <TextField label="Password:" sx={{ padding: 2 }} />

            <LoginButton submit={handleSubmit} />
          </FormProvider>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default LoginPage;

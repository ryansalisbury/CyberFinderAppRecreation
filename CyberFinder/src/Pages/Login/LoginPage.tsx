import { Button, Paper, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FormInputText from "../Questionnaire/common/components/FormInputText";

const LoginPage: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const methods = useForm();
  const { handleSubmit } = methods;
  return (
    <Stack alignContent="center">
      <Paper sx={{ padding: 2, boxShadow: 5 }}>
        <Stack alignContent="center">
          <FormProvider {...methods}>
            <Typography variant="h3">Login</Typography>
            <FormInputText label="Username" name="username" />
            <FormInputText label="Password" name="password" />
            <Stack>
              <Button onClick={handleSubmit(onSubmit)}>Login</Button>
            </Stack>
          </FormProvider>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default LoginPage;

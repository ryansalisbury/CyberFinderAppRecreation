import { Button, Paper, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FormInputText from "./components/FormInputText";

const QuestionnairePage: React.FC = () => {
  // add type for questionnaire
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  return (
    <Stack>
      <Typography variant="h1" sx={{ color: "white" }}>
        Questionnaire Page
      </Typography>
      <FormProvider {...methods}>
        <FormInputText label="Question 1" name="Question1" />
        <FormInputText label="Question 2" name="Question2" />
        <FormInputText label="Question 3" name="Question3" />
        <FormInputText label="Question 4" name="Question4" />
        <FormInputText label="Question 5" name="Question5" />
        <FormInputText label="Question 6" name="Question6" />
      </FormProvider>

      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        Submit
      </Button>
      <Button onClick={() => reset()} variant="outlined">
        Reset
      </Button>
    </Stack>
  );
};

export default QuestionnairePage;

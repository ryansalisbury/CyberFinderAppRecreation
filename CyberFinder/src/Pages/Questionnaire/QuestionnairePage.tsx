import { Button, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import BusinessAdminSection from "./sections/BusinessAdminSection/BusinessAdminSection";
import BusinessSecuritySection from "./sections/BusinessSecuritySection/BusinessSecuritySection";
import useCalculateQuestionnaireScore from "./hooks/useGetQuestionnaireScore/useGetQuestionnaireScore";

const QuestionnairePage: React.FC = () => {
  // TO DO add type for questionnaire (Pre calculation)
  const onSubmit = (data: any) => {
    // TO DO implement this function
    useCalculateQuestionnaireScore(data);
    console.log(data);
  };

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  return (
    <Stack>
      <Typography variant="h1">Questionnaire Page</Typography>
      <FormProvider {...methods}>
        <BusinessAdminSection />
        <BusinessSecuritySection />
      </FormProvider>

      <Button
        sx={{ margin: 1 }}
        onClick={handleSubmit(onSubmit)}
        variant="contained"
      >
        Submit
      </Button>
      <Button sx={{ margin: 1 }} onClick={() => reset()} variant="outlined">
        Reset
      </Button>
    </Stack>
  );
};

export default QuestionnairePage;

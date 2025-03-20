import { Button, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import InternalSOCInput from "./components/InternalSOCInput/InternalSOCInput";
import {
  BusinessNameInput,
  BusinessSizeInput,
  PhoneNumberInput,
  EmployeeNumberInput,
  PostcodeInput,
  RegionPickerInput,
  PreviousInteractionInput,
  UrlInput,
} from "./components";
import CyberTopicMultiSelect from "./components/CyberTopicMultiSelect";

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
        <BusinessNameInput label="Question 1" name="BusinessName" />
        <PhoneNumberInput label="Question 2" name="PhoneNumber" />
        <UrlInput label="Question 3" name="Url" />
        <RegionPickerInput label="Question 4" name="Region" />
        <PostcodeInput label="Question 5" name="Postcode" />
        <PreviousInteractionInput name="PreviousInteraction" />
        <EmployeeNumberInput label="Question 7" name="EmployeeNumber" />
        <BusinessSizeInput label="Question8" name="PreviousInteraction" />
        <InternalSOCInput name="InternalSOC" />
        <CyberTopicMultiSelect name="CyberTopicSelection" label="Question10" />
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

import { Button, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FormInputText from "./common/components/FormInputText";
import PhoneNumberInput from "./components/PhoneNumberInput";
import UrlInput from "./components/UrlInput";
import RegionPickerInput from "./components/RegionPickerInput";
import BusinessNameInput from "./components/BusinessNameInput";
import PostcodeInput from "./components/PostcodeInput";
import PreviousInteractionInput from "./components/PreviousInteraction";
import EmployeeNumberInput from "./components/EmployeeNumberInput";
import BusinessSizeInput from "./components/BusinessSizeInput";
import InternalSOCInput from "./components/InternalSOCInput/InternalSOCInput";

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
        <InternalSOCInput label="Question9" name="InternalSOC" />
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

import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useController, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  label: string;
  name: string;
  required?: boolean;
}

const ActionFraudDatePicker = ({ label, name, required }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ?? false },
    defaultValue: "",
  });

  const pickerValue = field.value ? dayjs(field.value) : null;
  const handleChange = (newDate: Dayjs | null) => {
    if (!newDate) {
      field.onChange("");
      return;
    }
    field.onChange(newDate.toISOString());
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={pickerValue}
          onChange={handleChange}
          label={label}
          slotProps={{
            textField: {
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default ActionFraudDatePicker;

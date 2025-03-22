import {
  Checkbox,
  Chip,
  Grid2,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  question: string;
  values: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const StyledMultiSelect = ({ label, name, question, values }: Props) => {
  const { control } = useFormContext();

  const {
    field: { value, ref, ...restField },
    fieldState,
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: [],
  });

  const renderValue = (selected: string[]) => (
    <Stack direction="row" gap={1}>
      {(selected as string[]).map((val) => (
        <Chip key={val} label={val} />
      ))}
    </Stack>
  );

  return (
    <Grid2 container padding={1}>
      <Grid2 size={4}>
        <Typography fontWeight="bold" textAlign={"center"}>
          {question}
        </Typography>
      </Grid2>
      <Grid2 size={8}>
        <Select
          multiple
          label={label}
          input={<OutlinedInput label="Tag" />}
          value={value || []}
          {...restField}
          renderValue={renderValue}
          error={!!fieldState.error}
          MenuProps={MenuProps}
        >
          {values.map((val) => (
            <MenuItem key={val} value={val}>
              <ListItemIcon>
                <Checkbox
                  checked={(value as string[]).includes(val)}
                  value={val}
                />
                <ListItemText primary={val} />
              </ListItemIcon>
            </MenuItem>
          ))}
        </Select>
      </Grid2>
    </Grid2>
  );
};

export default StyledMultiSelect;

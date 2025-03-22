import {
  Box,
  Checkbox,
  Chip,
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {selected.map((val) => (
        <Chip key={val} label={val} />
      ))}
    </Box>
  );

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold">
        {question}
      </Typography>
      <Select
        multiple
        label={label}
        input={<OutlinedInput label="Tag" />}
        value={value || []}
        {...restField}
        sx={{
          width: "70%",
          "& .MuiSelect-select": {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 0.5,
            minHeight: 40,
            padding: "8px 12px",
          },
        }}
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
    </Stack>
  );
};

export default StyledMultiSelect;

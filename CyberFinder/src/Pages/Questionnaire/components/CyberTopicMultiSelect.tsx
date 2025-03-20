import { Chip, MenuItem, Stack } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
}

const cyberTopics: string[] = [
  "name1",
  "name2",
  "name3",
  "name4",
  "name5",
  "name6",
  "name7",
  "name8",
  "name9",
];

const CyberTopicMultiSelect = ({ name, label }: Props) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const { control } = useFormContext();

  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: [],
  });

  const handleChange = (e: SelectChangeEvent<string[]>) => {
    setSelectedTopics(e.target.value as string[]);
  };

  const render = () => (
    <Stack>
      {selectedTopics.map((topic) => (
        <Chip key={topic} label={topic} />
      ))}
    </Stack>
  );

  return (
    <Select
      multiple
      //   value={cyberTopics}
      //   onChange={handleChange}
      label={label}
      renderValue={render}
      {...field}
    >
      {cyberTopics.map((topic) => (
        <MenuItem key={topic} value={topic}>
          {topic}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CyberTopicMultiSelect;

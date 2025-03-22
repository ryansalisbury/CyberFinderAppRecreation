import StyledMultiSelect from "../../../common/components/StyledMultiSelect";

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

const question = "Cyber Topics to learn about: ";

const CyberTopicMultiSelect = ({ name, label }: Props) => {
  return (
    <StyledMultiSelect
      name={name}
      label={label}
      question={question}
      values={cyberTopics}
    />
  );
};

export default CyberTopicMultiSelect;

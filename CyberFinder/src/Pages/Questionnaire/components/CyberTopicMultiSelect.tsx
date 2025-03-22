import StyledMultiSelect from "../common/components/StyledMultiSelect";

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

const question =
  "Please select the cyber topics you would like your business to improve upon through the ROCU services";

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

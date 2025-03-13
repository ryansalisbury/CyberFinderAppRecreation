import { Button, Stack } from "@mui/material";
import { useState } from "react";

const url = "http://127.0.0.1:3000";

const LoginButton: React.FC = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/test`);
      console.log("test");
      if (!response.ok) throw new Error(`Response Status: ${response.status}`);

      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };
  // front-end is successfully talking to the back-end
  console.log(data);

  return (
    <Stack>
      {data}
      <Button onClick={fetchData}>Login</Button>
    </Stack>
  );
};

export default LoginButton;

import axios from "axios";
import { Region } from "../types/types";

export const getRegions = async (): Promise<Region[]> => {
  const response = await axios.get(
    "https://towns.online-tech.co.uk/api/v1/regions"
  );

  return response.data.data;
};

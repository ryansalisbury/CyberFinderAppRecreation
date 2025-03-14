import { useQuery } from "@tanstack/react-query";
import { getRegions } from "../../../api/Service";

const useGetRegions = () =>
  useQuery({
    queryKey: ["REGIONS"],
    queryFn: getRegions,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

export default useGetRegions;

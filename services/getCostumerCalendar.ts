import axios, { AxiosResponse } from "axios";
import type { ChallengeData } from "@/app/models/ChallengeData";
import { apiUrl } from "@/constants/api-url";

export const getCostumerCalendar = async (): Promise<ChallengeData> => {
  try {
    const response: AxiosResponse<ChallengeData> = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching the client's calendar.");
  }
};

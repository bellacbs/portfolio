import { Data, JsonResponse } from "../global/types";

export const getRepositoryData = async (setFunction: (value: Data | string) => void) => {
  try{
    const result = await fetch("/profile.json")
    let response: JsonResponse | undefined
    if (result.ok) {
      response = await result.json();
    }else {
      throw result;
    }
    response && setFunction(response.data);
  }catch(error) {
    console.error(
      `${error} (Failed to get gitHub data)`
    );
    setFunction("Error");
  }
};
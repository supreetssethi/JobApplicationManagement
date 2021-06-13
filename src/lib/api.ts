import { ApiCallInterface } from "../types";
import executeApi from "./apiCore";

export const executeGet = async ({ url }: ApiCallInterface) => {
  return await executeApi({ url });
};

export const executePost = async (url: string, data: object) => {
  let options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "application/job",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  return await executeApi({ url, options });
};

export default executeApi;

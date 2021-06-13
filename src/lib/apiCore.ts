import { ApiCallInterface } from "../types";

interface ApiReturnInterface {
  isSuccess: boolean;
  err?: string;
  data?: JSON;
}
const executeApi = async ({ url, options }: ApiCallInterface) => {
  let response = await fetch(url, options);
  if (response.ok) {
    let data = await response.json();
    return <ApiReturnInterface>{
      isSuccess: true,
      data,
    };
  } else {
    let err = await response.text();
    return <ApiReturnInterface>{
      isSuccess: true,
      err,
    };
  }
};

export default executeApi;

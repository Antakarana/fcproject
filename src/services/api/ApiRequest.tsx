import axios, {AxiosResponse} from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

const apiRequest = async (url, requestType) => {
  return new Promise<Object>(async (resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const request = {
        method: requestType,
        url: url,
        headers: headers,
      };
      const result = await axios(request);
      if (result?.status == 200) resolve(result?.data);
      else resolve(result);
    } catch (error) {
      if (error?.response?.status == 400) resolve(error.response);
      else resolve(error.response);
    }
  });
};

export default apiRequest;
import axios, {AxiosResponse} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

let isThereInternetConnection = true;

const apiRequest = async (url, requestType) => {
  NetInfo.fetch().then(state => {
    isThereInternetConnection = state.isConnected;
  });

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
      if (isThereInternetConnection) {
        const result = await axios(request);
        if (result?.status == 200) resolve(result?.data);
        else resolve(result);
      } else return Alert.alert('There is no internet connection');
    } catch (error) {
      if (error?.response?.status == 400) resolve(error.response);
      else if (error?.response?.status == 500)
        return Alert.alert('API server not working');
      else resolve(error.response);
    }
  });
};

export default apiRequest;

import { useCallback, useState } from 'react';
import axios from 'axios';
// import useStorageService from '../services/useStorageService';
import { FIVE_DAYS_MOCK } from '../mock/data';

export const useHttp = () => {
     // const storageService = useStorageService();
     const [isErrorMessageHttpRequest, setIsErrorMessageHttpRequest] = useState('');
     const httpRequest = useCallback(async (url: string, method = 'GET', data: string | null = null, headers: Record<string, string> = {}, params: Record<string, any> = {}) => {
          try {
               if (data) {
                    data = JSON.stringify(data);
                    headers['Content-Type'] = 'application/json';
               }
               // remove axios
               const response = await axios({ url, method, data, headers, params });
               const resData = await response.data;
               return resData;
          } catch (error: any) {
               if (error.response && error.response.status === 401) {
                    // handle 401 error
               } else {
                    // handle other errors
                    setIsErrorMessageHttpRequest('Something Went wrong!');
                    return FIVE_DAYS_MOCK;
               }
          }
     }, []);
     const clearError = useCallback(() => {}, []);

     return { httpRequest, clearError, isErrorMessageHttpRequest };
};

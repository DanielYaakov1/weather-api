import { useCallback } from 'react';
import axios from 'axios';
import useStorageService from '../services/useStorageService';

const useHttp = () => {
     const storageService = useStorageService();
     const httpRequest = useCallback(async (url: string, method = 'GET', data: string | null = null, headers: Record<string, string> = {}) => {
          try {
               if (data) {
                    data = JSON.stringify(data);
                    headers['Content-Type'] = 'application/json';
               }
               const response = await axios({ url, method, data, headers });
               const resData = await response.data;
               return resData;
          } catch (err: any) {
               if (err.response.status === 401) {
                    //Handle authenticated
               }
               throw err;
          } finally {
               //TODO: set all loaders to false
          }
     }, []);
     const clearError = useCallback(() => {}, []);

     return { httpRequest, clearError };
};
export default useHttp;

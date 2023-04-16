import {  useCallback } from 'react';

export const useStorageService = () => {
     const setItem = useCallback((key: string, value: string): void => {
          localStorage.setItem(key, value);
     }, []);

     const getItem = useCallback((key: string) => {
          return localStorage.getItem(key);
     }, []);

     const removeItem = useCallback((key: string): void => {
          localStorage.removeItem(key);
     }, []);

     return { setItem, getItem, removeItem };
};

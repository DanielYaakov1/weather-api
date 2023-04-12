import { memo, useCallback } from 'react';

interface IStorageService {
     setItem(key: string, value: string): void;
     getItem(key: string): string | null;
     removeItem(key: string): void;
}

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

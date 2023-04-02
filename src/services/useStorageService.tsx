interface IStorageService {
     setItem(key: string, value: string): void;
     getItem(key: string): string | null;
     removeItem(key: string): void;
}

const useStorageService = (): IStorageService => {
     const setItem = (key: string, value: string): void => {
          localStorage.setItem(key, value);
     };

     const getItem = (key: string) => {
          return localStorage.getItem(key);
     };

     const removeItem = (key: string): void => {
          localStorage.removeItem(key);
     };

     return { setItem, getItem, removeItem };
};

export default useStorageService;

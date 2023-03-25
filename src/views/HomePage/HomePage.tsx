import { useEffect, useState } from 'react';
import useStyles from './useStyles';
import useHttp from '../../hooks/useHttp';
import useStorageService from '../../services/useStorageService';

const HomePage = () => {
     const classes = useStyles();
     const { httpRequest } = useHttp();
     const storageService = useStorageService();
     const [data, setData] = useState(null);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const res = await httpRequest('');
                    const dataStr = JSON.stringify(res);
                    storageService.setItem('resData', dataStr);
                    setData(res);
               } catch (error) {
                    console.error(error);
               }
          };
          fetchData();
     }, []);

     return <div>home page</div>;
};

export default HomePage;

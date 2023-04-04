import { ILocation } from '../HomePage/HomePage';
import useStyles from './useStyles';

interface IFavorites {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

const Favorites = ({ favorites, setFavorites }: IFavorites) => {
     const classes = useStyles();
     return <div>Favorites</div>;
};
export default Favorites;

import { useDispatch, useSelector } from 'react-redux'
import styles from './RecipeItem.module.css'
import { actions } from '../store/favorites/favorites.slice';

export const RecipeItem = ({ recipe }) => {

    const { favorites } = useSelector(state => state)
    const dispatch = useDispatch();

    console.log(favorites)
    return <div className={styles.item}>
        <h3>{recipe.name}</h3>
        <button onClick={() => dispatch(actions.toogleFavorites(recipe))}>Add to favorites</button>
    </div>
}
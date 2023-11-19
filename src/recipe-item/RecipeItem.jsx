import { useSelector } from 'react-redux'
import styles from './RecipeItem.module.css'

export const RecipeItem = ({ recipe }) => {

    const { favorites } = useSelector(state => state)

    console.log(favorites)

    return <div className={styles.item}>
        <h3>{recipe.name}</h3>
        <button>Add to favorites</button>
    </div>
}
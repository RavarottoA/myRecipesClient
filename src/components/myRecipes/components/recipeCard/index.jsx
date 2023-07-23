import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const RecipeCard = ({title, id, setRecipeClickedId}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe?id=${id}`);
    };

    return (
        <div className={styles.mainContainer}>
            <button
                className={styles.titleBtn}
                onClick={handleClick}
            >
                {title}
            </button>
        </div>
    );
};

export default RecipeCard;

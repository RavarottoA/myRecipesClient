import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = ({setShowNewRecipeSection, setRecipeClickedId}) => {

    const navigate = useNavigate();

    const handleCreateRecipeClick = () => {
        navigate('/new-recipe');
    };

    const handleMyRecipesClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.welcomeTxt} onClick={handleMyRecipesClick}>My Recipes</h1>
            <button
                className={styles.createBtn}
                onClick={handleCreateRecipeClick}
            >
                Create Recipe
            </button>
        </div>
    );
};

export default Navbar;

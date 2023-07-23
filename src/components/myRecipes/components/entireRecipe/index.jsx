import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteRecipe } from '../../../../services/deleteRecipe';
import { getRecipe } from '../../../../services/getRecipe';
import styles from './styles.module.css';

const EntireRecipe = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        if (id) {
            getRecipe(id, setRecipe);
        }
    }, [id]);

    const handleDeleteClick = () => {
        deleteRecipe(recipe.id);
        navigate(`/`);
    };

    const handleEditClick = () => {
        navigate(`/update-recipe?id=${id}`);
    };

    return (
        <div className={styles.mainContainer}>
            <h1>{recipe?.title}</h1>
            <div className={styles.subContainer}>
                <div>
                    <h1>Ingredients:</h1>
                    <h1 className={styles.subTxt}>{recipe?.ingredients}</h1>
                </div>
                <div>
                    <h1>Description:</h1>
                    <h1 className={styles.subTxt}>{recipe?.description}</h1>
                </div>
            </div>
            <div>
                <button
                    className={`${styles.btn} ${styles.editBtn}`}
                    onClick={handleEditClick}
                >
                    Edit
                </button>
                <button
                    className={`${styles.btn} ${styles.deleteBtn}`}
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default EntireRecipe;

import React, { useState, useEffect } from "react";
import { createRecipe } from "../../services/createRecipe";
import { useNavigate, useLocation } from "react-router-dom";
import { getRecipe } from "../../services/getRecipe";
import { updateRecipe } from "../../services/updateRecipe";
import styles from "./styles.module.css";

const RecipeForm = ({ setShowNewRecipeSection }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: "",
        description: ""
    });

    useEffect(() => {
        if (id) {
            getRecipe(id, setRecipe);
        }
    }, [id]);

    const handleOnChange = (e) => {
        setRecipe(
            {
                ...recipe,
                [e.target.name]: e.target.value
            }
        );
    };

    const handleDoneClick = async () => {
        if (id) {
            updateRecipe(id, recipe);
        } else {
            createRecipe(recipe);
        }
        setTimeout(() => {
            navigate("/");
        }, 300);
    };

    return (
        <div className={styles.mainContainer}>
            <label className={styles.title}>
                Title:
            </label>
            <textarea
                type="text"
                name="title"
                value={recipe.title}
                className={styles.titleTextarea}
                onChange={handleOnChange}
            />
            <label>
                Ingredients:
            </label>
            <textarea
                type="text"
                className={styles.ingredientsInput}
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleOnChange}
            />
            <label className={styles.description}>
                Description:
            </label>
            <textarea
                type="text"
                className={styles.descriptionInput}
                name="description"
                value={recipe.description}
                onChange={handleOnChange}
            />
            <button className={styles.createBtn} onClick={handleDoneClick}>
                Done
            </button>
        </div>
    );
};

export default RecipeForm;

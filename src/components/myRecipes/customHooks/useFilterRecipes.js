export const useFilterRecipes = () => {

    const filterRecipes = (recipes, recipeClickedId, setFilteredRecipe) => {
        const recipeToShow = recipes.filter(recipe => recipe.id === Number(recipeClickedId));
        setFilteredRecipe(recipeToShow[0]);
    };
    
    return filterRecipes; 

};

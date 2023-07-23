export const createRecipe = async (recipe) => {
    await fetch(
        "http://localhost:4000/recipe",
        {
            method: "POST",
            body: JSON.stringify(recipe),
            headers: { "Content-type": "application/json" }
        }
    );
};

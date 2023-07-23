export const updateRecipe = async (id, recipe) => {
    await fetch(
        `http://localhost:4000/recipe/${id}`,
        {
            method: "PUT",
            body: JSON.stringify(recipe),
            headers: { "Content-type": "application/json" }
        }
    );
};

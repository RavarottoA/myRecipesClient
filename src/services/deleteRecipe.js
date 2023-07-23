export const deleteRecipe = async (id) => {
    await fetch(
        `http://localHost:4000/recipes`,
        {
            method: "DELETE",
            body: JSON.stringify({id}),
            headers: { "Content-type": "application/json" }
        }
    );
};

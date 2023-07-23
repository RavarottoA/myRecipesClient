export const getAllRecipes = async(setRecipes) => {
    const res = await fetch(
        "http://localhost:4000/v1/recipes",
    );
    const data = await res.json();
    setRecipes(data);
};

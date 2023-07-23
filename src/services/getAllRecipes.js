export const getAllRecipes = async(setRecipes) => {
    const res = await fetch(
        "http://localhost:4000/recipes",
    );
    const data = await res.json();
    setRecipes(data);
};

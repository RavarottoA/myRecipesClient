export const getRecipe = async (id, setCorrespondingState) => {
    const res = await fetch(
        `http://localhost:4000/v1/recipe/${id}`,
        {
            method: "GET"
        }
    );
    const data = await res.json();
    setCorrespondingState(data);
};

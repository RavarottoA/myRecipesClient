export const createUser = async (user) => {
    await fetch(
        "http://localhost:4000/v1/users/register",
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" }
        }
    );
};

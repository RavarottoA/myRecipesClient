export const loginUser = async (user) => {
    await fetch(
        "http://localhost:4000/v1/users/singIn",
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" }
        }
    );
};
